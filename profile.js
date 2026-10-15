
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://zkyfudbyweohpvokimlb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_3_GAGYan-vVgXlN7AOX-rg_9Lk54_LT";

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

const message = document.getElementById("profileMessage");
const content = document.getElementById("profileContent");
const logoutButton = document.getElementById("logoutButton");

function showMessage(text) {
  message.textContent = text;
}

async function loadProfile() {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw error;

    const user = data.session?.user;

    if (!user) {
      window.location.replace("auth.html");
      return;
    }

    const name =
      user.user_metadata?.full_name ||
      user.email ||
      "Foydalanuvchi";

    document.getElementById("fullName").textContent = name;
    document.getElementById("editFullName").value =
  user.user_metadata?.full_name || "";
    document.getElementById("email").textContent = user.email || "";
    document.getElementById("avatar").textContent =
      name.trim().charAt(0).toUpperCase() || "B";
      
const avatarImage = document.getElementById("avatarImage");
const avatarPlaceholder = document.getElementById("avatar");

const savedAvatar = user.user_metadata?.avatar_url;

if (savedAvatar) {
  avatarImage.src = savedAvatar;
  avatarImage.hidden = false;
  avatarPlaceholder.hidden = true;
} else {
  avatarImage.hidden = true;
  avatarPlaceholder.hidden = false;
}


    // Brauzerda saqlangan natijalarni o'qiymiz.
    let localState = { completed: {}, scores: {}, attempts: {} };

    try {
      const saved = localStorage.getItem("bilimYoliV2");
      if (saved) {
        const parsed = JSON.parse(saved);
        localState = {
          completed: parsed.completed || {},
          scores: parsed.scores || {},
          attempts: parsed.attempts || {}
        };
      }
    } catch (storageError) {
      console.warn("Mahalliy natijalarni o'qib bo'lmadi.");
    }

    // Supabase'dagi ushbu foydalanuvchining natijalari.
    const [
      { data: progressRows, error: progressError },
      { data: resultRows, error: resultsError }
    ] = await Promise.all([
      supabase
        .from("student_progress")
        .select("course_key, lesson_index, completed")
        .eq("user_id", user.id),

      supabase
        .from("student_test_results")
        .select("course_key, best_score, attempts")
        .eq("user_id", user.id)
    ]);

    if (progressError) throw progressError;
    if (resultsError) throw resultsError;

    const completedKeys = new Set(
      Object.entries(localState.completed)
        .filter(([, value]) => Boolean(value))
        .map(([key]) => key)
    );

    for (const row of progressRows || []) {
      if (row.completed) {
        completedKeys.add(`${row.course_key}:${row.lesson_index}`);
      }
    }

    const localScores = Object.values(localState.scores)
      .map(Number)
      .filter(Number.isFinite);

    const remoteScores = (resultRows || [])
      .map(row => Number(row.best_score))
      .filter(Number.isFinite);

    const bestScore = Math.max(0, ...localScores, ...remoteScores);

    const localAttempts = Object.values(localState.attempts)
      .map(Number)
      .filter(Number.isFinite);

    const remoteAttempts = (resultRows || [])
      .map(row => Number(row.attempts))
      .filter(Number.isFinite);

    const attempts = Math.max(
      0,
      ...localAttempts,
      ...remoteAttempts
    );

    document.getElementById("completedLessons").textContent =
      completedKeys.size;

    document.getElementById("bestScore").textContent =
      `${bestScore}%`;

    document.getElementById("testAttempts").textContent =
      attempts;

    message.hidden = true;
    content.hidden = false;
  } catch (error) {
    console.error("Profilni yuklash xatosi:", error);
    showMessage(
      "Profilni yuklab bo'lmadi. Internet, publishable key va Supabase jadvallarini tekshiring."
    );
  }
}

logoutButton.addEventListener("click", async () => {
  logoutButton.disabled = true;

  try {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    window.location.replace("auth.html");
  } catch (error) {
    console.error("Chiqish xatosi:", error);
    showMessage("Akkauntdan chiqishda xatolik yuz berdi.");
    logoutButton.disabled = false;
  }
});

loadProfile();

const editProfileForm = document.getElementById("editProfileForm");
const editFullName = document.getElementById("editFullName");
const saveProfileButton = document.getElementById("saveProfileButton");
const editProfileMessage = document.getElementById("editProfileMessage");

editProfileForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fullName = editFullName.value.trim();

  if (fullName.length < 2 || fullName.length > 80) {
    editProfileMessage.textContent =
      "Ism 2 dan 80 tagacha belgidan iborat bo‘lsin.";
    return;
  }

  saveProfileButton.disabled = true;
  editProfileMessage.textContent = "Saqlanmoqda...";

  try {
    const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession();

    if (sessionError) throw sessionError;

    if (!sessionData.session?.user) {
      window.location.replace("auth.html");
      return;
    }

    const { data, error } = await supabase.auth.updateUser({
      data: { full_name: fullName }
    });

    if (error) throw error;

    document.getElementById("fullName").textContent =
      data.user.user_metadata?.full_name || fullName;

    document.getElementById("avatar").textContent =
      fullName.charAt(0).toUpperCase();

    editProfileMessage.textContent =
      "Ism muvaffaqiyatli saqlandi!";

  } catch (error) {
    console.error("Profilni yangilash xatosi:", error);

    editProfileMessage.textContent =
      "Saqlashda xatolik. Internetni va Supabase sozlamalarini tekshiring.";
  } finally {
    saveProfileButton.disabled = false;
  }
});

const avatarInput = document.getElementById("avatarInput");
const avatarMessage = document.getElementById("avatarMessage");

avatarInput.addEventListener("change", async () => {
  const file = avatarInput.files?.[0];
  if (!file) return;

  // Faqat rasm fayllariga ruxsat beramiz
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp"
  ];

  if (!allowedTypes.includes(file.type)) {
    avatarMessage.textContent =
      "Faqat JPG, PNG yoki WEBP rasm tanlang.";
    avatarInput.value = "";
    return;
  }

  // Rasm hajmi 5 MB dan oshmasin
  if (file.size > 5 * 1024 * 1024) {
    avatarMessage.textContent =
      "Rasm hajmi 5 MB dan oshmasligi kerak.";
    avatarInput.value = "";
    return;
  }

  avatarMessage.textContent = "Rasm yuklanmoqda...";
  avatarInput.disabled = true;

  try {
    const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession();

    if (sessionError) throw sessionError;

    const user = sessionData.session?.user;

    if (!user) {
      window.location.replace("auth.html");
      return;
    }

    const extension = {
      "image/jpeg": "jpg",
      "image/png": "png",
      "image/webp": "webp"
    }[file.type];

    // Har bir foydalanuvchining o'z papkasi
    const filePath = `${user.id}/avatar.${extension}`;

    // Rasmni Supabase Storage'ga yuklash
    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, {
        upsert: true,
        contentType: file.type,
        cacheControl: "3600"
      });

    if (uploadError) throw uploadError;

    // Ommaviy ko'rish uchun rasm manzilini olish
    const { data: urlData } = supabase.storage
      .from("avatars")
      .getPublicUrl(filePath);

    const avatarUrl =
      `${urlData.publicUrl}?t=${Date.now()}`;

    // Rasm manzilini foydalanuvchi profilida saqlash
    const { error: updateError } = await supabase.auth.updateUser({
      data: { avatar_url: avatarUrl }
    });

    if (updateError) throw updateError;

    // Yangi rasmni sahifada ko'rsatish
    const image = document.getElementById("avatarImage");
    const placeholder = document.getElementById("avatar");

    image.onload = () => {
      image.hidden = false;
      placeholder.hidden = true;
      avatarMessage.textContent =
        "Profil rasmi muvaffaqiyatli saqlandi!";
    };

    image.onerror = () => {
      avatarMessage.textContent =
        "Rasm yuklandi, ammo uni ko'rsatib bo'lmadi. Bucket sozlamalarini tekshiring.";
    };

    image.src = avatarUrl;

  } catch (error) {
    console.error("Profil rasmi xatosi:", error);
    avatarMessage.textContent =
      "Rasmni saqlab bo'lmadi. Supabase Storage va RLS qoidalarini tekshiring.";
  } finally {
    avatarInput.disabled = false;
    avatarInput.value = "";
  }
});
