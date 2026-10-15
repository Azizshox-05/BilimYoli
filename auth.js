
import { createClient } from
  "https://esm.sh/@supabase/supabase-js@2";

// 1. SUPABASE MA'LUMOTLARINI KIRITING
const SUPABASE_URL = "https://zkyfudbyweohpvokimlb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_3_GAGYan-vVgXlN7AOX-rg_9Lk54_LT";

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

const form = document.getElementById("authForm");
const nameGroup = document.getElementById("nameGroup");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const message = document.getElementById("message");
const accountPanel = document.getElementById("accountPanel");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

let mode = "login";

function showMessage(text, type = "") {
  message.textContent = text;
  message.className = `message ${type}`;
}

function setMode(nextMode) {
  mode = nextMode;

  const isRegister = mode === "register";
  loginTab.classList.toggle("active", !isRegister);
  registerTab.classList.toggle("active", isRegister);
  nameGroup.classList.toggle("hidden", !isRegister);

  fullNameInput.required = isRegister;
  passwordInput.autocomplete = isRegister
    ? "new-password"
    : "current-password";

  submitBtn.textContent = isRegister
    ? "Ro'yxatdan o'tish"
    : "Kirish";

  showMessage("");
}

loginTab.addEventListener("click", () => setMode("login"));
registerTab.addEventListener("click", () => setMode("register"));

function showAccount(user) {
  if (!user) {
    accountPanel.classList.add("hidden");
    form.classList.remove("hidden");
    return;
  }

  userName.textContent =
    user.user_metadata?.full_name || "Foydalanuvchi";
  userEmail.textContent = user.email || "";

  form.classList.add("hidden");
  accountPanel.classList.remove("hidden");
  showMessage("Siz tizimga muvaffaqiyatli kirdingiz.", "success");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const fullName = fullNameInput.value.trim();

  if (mode === "register" && !fullName) {
    showMessage("Ism va familiyangizni kiriting.", "error");
    return;
  }

  if (password.length < 6) {
    showMessage("Parol kamida 6 ta belgidan iborat bo'lsin.", "error");
    return;
  }

  submitBtn.disabled = true;
  showMessage("Iltimos, kuting...");

  try {
    if (mode === "register") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName }
        }
      });

      if (error) throw error;

      if (data.session) {
        showAccount(data.user);
      } else {
        showMessage(
          "Ro'yxatdan o'tish so'rovi bajarildi. " +
          "Emailingizni tekshiring va tasdiqlash havolasini bosing. " +
          "Tasdiqlagach, login bo'limidan kiring.",
          "success"
        );
      }
    } else {
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password
        });

    if (error) throw error;

window.location.href = "index.html";
    }
  } catch (error) {
    showMessage(error.message || "Xatolik yuz berdi.", "error");
  } finally {
    submitBtn.disabled = false;
  }
});

logoutBtn.addEventListener("click", async () => {
  logoutBtn.disabled = true;

  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;

    showAccount(null);
    setMode("login");
    passwordInput.value = "";
    showMessage("Tizimdan chiqdingiz.", "success");
  } catch (error) {
    showMessage(error.message || "Chiqishda xatolik yuz berdi.", "error");
  } finally {
    logoutBtn.disabled = false;
  }
});

// Sahifa qayta ochilganda avvalgi sessiyani tekshirish
async function restoreSession() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    showMessage("Sessiyani tekshirishda xatolik yuz berdi.", "error");
    return;
  }

  if (data.session?.user) {
    showAccount(data.session.user);
  }
}

restoreSession();

supabase.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN" && session?.user) {
    showAccount(session.user);
  }

  if (event === "SIGNED_OUT") {
    showAccount(null);
  }
});
