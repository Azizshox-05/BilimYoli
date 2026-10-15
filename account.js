```javascript
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
    if (status) status.textContent = "Akkauntni tekshirib bo'lmadi";
    return;
  }

  const user = data.session?.user;

  if (user) {
    const name =
      user.user_metadata?.full_name ||
      user.email ||
      "Foydalanuvchi";

    if (status) status.textContent = `Salom, ${name}`;

    if (accountLink) {
      accountLink.textContent = "Profil";
      accountLink.href = "profile.html";
    }

    if (logoutButton) logoutButton.hidden = false;
  } else {
    if (status) status.textContent = "Akkauntga kirmagansiz";

    if (accountLink) {
      accountLink.textContent = "Kirish / Ro'yxatdan o'tish";
      accountLink.href = "auth.html";
    }

    if (logoutButton) logoutButton.hidden = true;
  }
}

logoutButton?.addEventListener("click", async () => {
  logoutButton.disabled = true;

  const { error } = await supabase.auth.signOut();

  if (error) {
    if (status) status.textContent = "Chiqishda xatolik yuz berdi";
    logoutButton.disabled = false;
    return;
  }

  window.location.replace("auth.html");
});

supabase.auth.onAuthStateChange(() => {
  updateAccount();
});

updateAccount();
```
