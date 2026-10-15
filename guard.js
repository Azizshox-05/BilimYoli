import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://zkyfudbyweohpvokimlb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_3_GAGYan-vVgXlN7AOX-rg_9Lk54_LT";

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

async function protectPage() {
  try {
    const { data, error } = await supabase.auth.getSession();

    if (error || !data.session?.user) {
      window.location.replace("auth.html");
      return;
    }

    document.documentElement.classList.add("authenticated");
  } catch (error) {
    console.error("Sessiyani tekshirish xatosi:", error);
    window.location.replace("auth.html");
  }
}

protectPage();

supabase.auth.onAuthStateChange((event) => {
  if (event === "SIGNED_OUT") {
    window.location.replace("auth.html");
  }
});
