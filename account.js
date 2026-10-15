
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://zkyfudbyweohpvokimlb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_3_GAGYan-vVgXlN7AOX-rg_9Lk54_LT";

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

const status = document.getElementById("accountStatus");
const accountLink = document.getElementById("accountLink");
const logoutButton = document.getElementById("accountLogout");

async function updateAccount() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    status.textContent = "Akkauntni tekshirib bo'lmadi";
    return;
  }

  const user = data.session?.user;

  if (user) {
    const name = user.user_metadata?.full_name || user.email || "Foydalanuvchi";
    status.textContent = `Salom, ${name}`;
    accountLink.textContent = "Profil";
    accountLink.href = "profile.html";
    logoutButton.hidden = false;
  } else {
    status.textContent = "Akkauntga kirmagansiz";
    accountLink.textContent = "Kirish / Ro'yxatdan o'tish";
    accountLink.href = "auth.html";
    logoutButton.hidden = true;
  }
}

logoutButton?.addEventListener("click", async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    status.textContent = "Chiqishda xatolik yuz berdi";
    return;
  }

  window.location.href = "auth.html";
});

supabase.auth.onAuthStateChange(() => {
  updateAccount();
});

updateAccount();
