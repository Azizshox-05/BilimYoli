
"use strict";

const courses = [
  {
    id: "computer", icon: "💻", category: "Boshlang'ich",
    title: "Kompyuter bilan tanishuv",
    description: "Kompyuter qismlari, ularning vazifalari va to'g'ri foydalanish.",
    color: "#9d8cff",
    lessons: [
      {
        title: "Kompyuter nima?",
        text: `Kompyuter ' ma'lumotlarni qabul qilish, qayta ishlash, saqlash va natijani ko'rsatish uchun ishlatiladigan elektron qurilma.

Kompyuter yordamida matn yozish, hisob-kitob qilish, internetdan foydalanish, rasm chizish va o'qish mumkin.

Kompyuterning asosiy qismlari:
' Monitor ' ma'lumotni ekranda ko'rsatadi.
' Tizim bloki ' hisoblash va ma'lumotlarni qayta ishlash ishlarini bajaradi.
' Klaviatura ' matn va buyruqlar kiritadi.
' Sichqoncha ' ekrandagi obyektlarni tanlash va boshqarishga yordam beradi.`,
        tip: "Eslab qoling: monitor, tizim bloki, klaviatura va sichqoncha turli vazifalarni bajaradi."
      },
      {
        title: "Kompyuterni yoqish va o'chirish",
        text: `Kompyuterdan foydalanishni boshlashdan oldin qurilma elektr manbaiga to'g'ri ulanganini tekshiring.

1. Kompyuterning quvvat tugmasini bosing.
2. Operatsion tizim yuklanishini kuting.
3. Ish tugagach, dasturlarni saqlab yoping.
4. Operatsion tizimdagi Shut down yoki O'chirish buyrug'ini tanlang.

Kompyuterni doim elektr simidan uzib o'chirish tavsiya etilmaydi. Bu saqlanmagan ma'lumotlarning yo'qolishiga sabab bo'lishi mumkin.`,
        tip: "Muhim: ishingizni saqlang, so'ng kompyuterni tizim menyusi orqali o'chiring."
      },
      {
        title: "Klaviatura va sichqoncha",
        text: `Klaviaturada harflar, raqamlar va turli vazifali tugmalar mavjud.

' Enter ' buyruqni tasdiqlash yoki yangi qatorga o'tish.
' Backspace ' kursorning chap tomonidagi belgini o'chirish.
' Shift ' katta harf yozish yoki qo'shimcha belgini kiritish.
' Ctrl + C ' tanlangan ma'lumotni nusxalash.
' Ctrl + V ' nusxalangan ma'lumotni joylashtirish.

Sichqonchaning chap tugmasi tanlash uchun, o'ng tugmasi esa qo'shimcha menyuni ochish uchun ishlatiladi. G'ildirak sahifani yuqoriga-pastga aylantiradi.`,
        tip: "Amaliy mashq: matn yozing, bir so'zni belgilang va Ctrl + C hamda Ctrl + V tugmalarini sinab ko'ring."
      }
    ],
    questions: [
      { q: "Ma'lumotni ekranda ko'rsatadigan qurilma qaysi?", options: ["Klaviatura", "Monitor", "Sichqoncha", "Printer"], answer: 1, explanation: "Monitor matn, rasm, video va boshqa ma'lumotlarni ekranda ko'rsatadi." },
      { q: "Kompyuterni to'g'ri o'chirish usuli qaysi?", options: ["Elektr simini tortish", "Monitorni urish", "Tizimdagi o'chirish buyrug'ini tanlash", "Klaviaturani uzish"], answer: 2, explanation: "Operatsion tizimdagi o'chirish buyrug'i ishni xavfsiz yakunlashga yordam beradi." },
      { q: "Ctrl + C odatda qanday vazifani bajaradi?", options: ["Nusxalaydi", "O'chiradi", "Kompyuterni yoqadi", "Ovozni pasaytiradi"], answer: 0, explanation: "Ctrl + C tanlangan matn yoki obyektni nusxalash uchun ishlatiladi." }
    ]
  },
  {
    id: "files", icon: "📁", category: "Boshlang'ich",
    title: "Fayl va papkalar",
    description: "Fayl yaratish, nomlash, saqlash va tartiblashni o'rganing.",
    color: "#78a8ff",
    lessons: [
      {
        title: "Fayl va papka tushunchasi",
        text: `Fayl ' kompyuterda saqlanadigan ma'lumot. Masalan, rasm, hujjat, musiqa va video fayllari.

Papka ' fayllar va boshqa papkalarni tartibli saqlash uchun ishlatiladigan joy.

Masalan, 'Darslar' nomli papka ochib, uning ichida 'Informatika', 'Matematika' va 'Ingliz tili' papkalarini yaratishingiz mumkin.`,
        tip: "Fayllarni mavzular bo'yicha papkalarga ajratsangiz, kerakli ma'lumotni topish osonlashadi."
      },
      {
        title: "Yangi papka yaratish",
        text: `Windows tizimida yangi papka yaratish uchun:

1. File Explorer dasturini oching.
2. Kerakli joyga, masalan, Documents bo'limiga kiring.
3. Bo'sh joyda sichqonchaning o'ng tugmasini bosing.
4. New > Folder ni tanlang.
5. Papkaga nom bering va Enter tugmasini bosing.

Ko'p Windows dasturlarida Ctrl + Shift + N yangi papka yaratish uchun xizmat qiladi.`,
        tip: "Papkaga 'Yangi papka' kabi umumiy nom o'rniga mazmunini bildiruvchi nom bering."
      },
      {
        title: "Faylni saqlash va nusxalash",
        text: `Matn yoki boshqa fayl ustida ishlayotganda ma'lumotni muntazam saqlang.

' Ctrl + S ' faylni saqlash.
' Ctrl + C ' nusxalash.
' Ctrl + X ' kesib olish.
' Ctrl + V ' joylashtirish.
' F2 ' tanlangan fayl yoki papka nomini o'zgartirish.

Fayl nomi uning mazmunini bildirishi maqsadga muvofiq. Masalan, 'Informatika_referat' nomi 'Hujjat1' nomidan aniqroq.`,
        tip: "Eslatma: kesib olishdan oldin nimani ko'chirayotganingizni tekshiring."
      }
    ],
    questions: [
      { q: "Papkaning asosiy vazifasi nima?", options: ["Faqat musiqa tinglash", "Fayllarni tartibli saqlash", "Kompyuterni o'chirish", "Internetni tezlashtirish"], answer: 1, explanation: "Papka fayl va boshqa papkalarni bir joyda tartib bilan saqlashga yordam beradi." },
      { q: "Windows tizimida yangi papka yaratish uchun qaysi tugmalar ishlatilishi mumkin?", options: ["Ctrl + P", "Alt + F4", "Ctrl + Shift + N", "Ctrl + Z"], answer: 2, explanation: "Ctrl + Shift + N ko'plab Windows papka oynalarida yangi papka yaratadi." },
      { q: "Ctrl + S qanday vazifani bajaradi?", options: ["Saqlaydi", "Nusxalaydi", "Chop etadi", "Qidiradi"], answer: 0, explanation: "Ctrl + S ko'plab dasturlarda joriy faylni saqlash buyrug'idir." }
    ]
  },
  {
    id: "internet", icon: "🌐", category: "Boshlang'ich",
    title: "Internet va brauzer",
    description: "Veb-sahifalar, qidiruv tizimlari va internetdan foydalanish.",
    color: "#69d9d0",
    lessons: [
      {
        title: "Internet nima?",
        text: `Internet ' butun dunyodagi qurilmalar va tarmoqlarni o'zaro bog'laydigan global tarmoq.

Internet orqali ma'lumot izlash, xabar yuborish, video ko'rish, masofadan o'qish va xizmatlardan foydalanish mumkin.

Internetga ulanish Wi-Fi, mobil aloqa yoki kabel orqali amalga oshirilishi mumkin.`,
        tip: "Internetdagi barcha ma'lumot ham ishonchli emas. Muhim ma'lumotni bir nechta ishonchli manbadan tekshiring."
      },
      {
        title: "Brauzer va qidiruv tizimi",
        text: `Brauzer ' veb-saytlarni ochish uchun mo'ljallangan dastur. Google Chrome, Microsoft Edge va Mozilla Firefox brauzerlarga misol bo'ladi.

Qidiruv tizimi internetdagi ma'lumotlarni topishga yordam beradi. Masalan, Google yoki Bing qidiruv tizimlaridir.

Qidiruvda aniq so'zlardan foydalaning. 'Kompyuter' deb qidirish o'rniga 'Kompyuter qismlari va vazifalari' deb yozish foydaliroq bo'lishi mumkin.`,
        tip: "Brauzer ' sahifani ochadi; qidiruv tizimi ' kerakli ma'lumotni topishga yordam beradi."
      },
      {
        title: "Veb-manzil va yuklab olish",
        text: `Veb-manzil (URL) sayt yoki sahifaning internetdagi manzilidir. Masalan, https://example.com.

Yuklab olish internetdagi faylni qurilmangizga saqlashdir. Faylni yuklab olishdan oldin uning manbasini tekshiring.

Noma'lum saytlardan dastur yoki fayl yuklab olmang. Shubhali reklama va 'kompyuteringizda virus bor' kabi yolg'on ogohlantirishlarga ishonmang.`,
        tip: "HTTPS ulanishi ma'lumot uzatishni himoyalashga yordam beradi, lekin saytning o'zi albatta ishonchli degani emas."
      }
    ],
    questions: [
      { q: "Veb-saytlarni ochish uchun qaysi dastur ishlatiladi?", options: ["Kalkulyator", "Brauzer", "Paint", "Fayl arxivi"], answer: 1, explanation: "Brauzer internetdagi veb-sahifalarni ko'rsatadi." },
      { q: "Google odatda qaysi vazifada ishlatiladi?", options: ["Qidiruv tizimi sifatida", "Klaviatura sifatida", "Monitor sifatida", "Fayl papkasi sifatida"], answer: 0, explanation: "Google internetdan kerakli sahifa va ma'lumotlarni topishga yordam beradi." },
      { q: "Noma'lum saytdan fayl yuklab olishdan oldin nima qilish kerak?", options: ["Darhol ochish", "Manba va fayl xavfsizligini tekshirish", "Barcha ogohlantirishlarni o'chirish", "Parolni yuborish"], answer: 1, explanation: "Fayl manbasini tekshirish zararli dasturlardan himoyalanishga yordam beradi." }
    ]
  },
  {
    id: "word", icon: "📝", category: "Amaliy",
    title: "Microsoft Word asoslari",
    description: "Matn yozish, formatlash va hujjatlarni saqlash.",
    color: "#76a9ff",
    lessons: [
      {
        title: "Word dasturi bilan tanishuv",
        text: `Microsoft Word matnli hujjatlarni yaratish va tahrirlash dasturidir. Unda ariza, referat, hisobot va boshqa hujjatlar tayyorlash mumkin.

Yangi hujjat yaratib, matn yozishni boshlang. Hujjatga mazmunli nom berib, kerakli papkaga saqlang.

Word'ning yuqori qismidagi menyular orqali matn ko'rinishi, sahifa va boshqa sozlamalarni boshqarish mumkin.`,
        tip: "Ish davomida Ctrl + S tugmalarini bosib, o'zgarishlarni saqlab turing."
      },
      {
        title: "Matnni formatlash",
        text: `Formatlash ' matnning ko'rinishini o'zgartirish.

' Ctrl + B ' qalin yozuv.
' Ctrl + I ' kursiv yozuv.
' Ctrl + U ' tagiga chizish.
' Ctrl + A ' barcha matnni belgilash.
' Ctrl + Z ' oxirgi amalni bekor qilish.

Shrift, o'lcham, rang va tekislash sozlamalari matnni o'qishni osonlashtirishi kerak. Rasmiy hujjatlarda bir xil va sodda uslubni saqlash foydali.`,
        tip: "Sarlavha, asosiy matn va ro'yxatlarni bir-biridan aniq ajrating."
      },
      {
        title: "Hujjatni saqlash va PDF",
        text: `Ctrl + S hujjatni saqlaydi. Yangi faylda sizdan nom va saqlash joyi so'ralishi mumkin.

DOCX ' Word hujjatlari uchun keng tarqalgan format. PDF esa turli qurilmalarda sahifa ko'rinishini saqlash uchun qulay.

Word dasturida File > Save As yoki Export orqali PDF formatini tanlash mumkin. Menyu nomlari dastur versiyasiga qarab farq qiladi.`,
        tip: "Hujjatni topshirishdan oldin uning nomi, sahifalari va matnida xatolar yo'qligini tekshiring."
      }
    ],
    questions: [
      { q: "Microsoft Word asosan nima uchun ishlatiladi?", options: ["Matnli hujjatlar tayyorlash", "Faqat video ko'rish", "Kompyuterni ta'mirlash", "Internetni ulash"], answer: 0, explanation: "Word matn yozish, tahrirlash va hujjatlarni formatlash uchun ishlatiladi." },
      { q: "Word'da matnni qalin qilish uchun qaysi tugmalar ishlatiladi?", options: ["Ctrl + P", "Ctrl + B", "Ctrl + S", "Ctrl + X"], answer: 1, explanation: "Ctrl + B tanlangan matnni qalin ko'rinishga o'tkazadi." },
      { q: "PDF formatining foydali tomoni nima?", options: ["Faylni albatta tahrirlash mumkin", "Sahifa ko'rinishini turli qurilmalarda saqlashga yordam beradi", "Internetni o'chiradi", "Faqat audio saqlaydi"], answer: 1, explanation: "PDF hujjatning sahifa tuzilishini turli qurilmalarda saqlashga yordam beradi." }
    ]
  },
  {
    id: "excel", icon: "📊", category: "Amaliy",
    title: "Microsoft Excel asoslari",
    description: "Jadval tuzish, formulalar va oddiy hisob-kitoblar.",
    color: "#75e2ad",
    lessons: [
      {
        title: "Excel jadvali",
        text: `Microsoft Excel jadval va hisob-kitoblar bilan ishlash dasturidir.

Excel jadvali satrlar va ustunlardan tashkil topadi. Ularning kesishgan joyi katak deb ataladi. Katak manzili ustun harfi va satr raqamidan iborat: A1, B3 yoki C5.

Masalan, A ustuniga mahsulot nomlarini, B ustuniga narxlarni kiritish mumkin.`,
        tip: "Har bir ustunga tushunarli sarlavha qo'yish jadvalni o'qishni osonlashtiradi."
      },
      {
        title: "Oddiy formulalar",
        text: `Excel formulalari odatda tenglik belgisi (=) bilan boshlanadi.

' =A1+B1 ' ikki katak qiymatini qo'shadi.
' =A1-B1 ' ayiradi.
' =A1*B1 ' ko'paytiradi.
' =A1/B1 ' bo'ladi.
' =SUM(A1:A5) ' A1 dan A5 gacha qiymatlarni yig'adi.

Formula natijasi katakda ko'rsatiladi. Katak qiymati o'zgarsa, formula natijasi odatda avtomatik yangilanadi.`,
        tip: "Formulani yozgach, Enter tugmasini bosing. Funksiya nomlari til va dastur sozlamalariga qarab farq qilishi mumkin."
      },
      {
        title: "Jadvalni tartiblash",
        text: `Excel'da ma'lumotlarni tartiblash va filtrlash mumkin.

Sort ' ma'lumotlarni alifbo yoki son tartibida joylashtiradi. Filter ' tanlangan shartga mos qatorlarni ko'rsatishga yordam beradi.

Diagrammalar raqamlarni ko'rgazmali ko'rsatadi. Masalan, oylar bo'yicha savdoni ustunli diagrammada taqqoslash mumkin.`,
        tip: "Tartiblashdan oldin butun jadvaldagi bog'liq ma'lumotlarni to'g'ri tanlaganingizni tekshiring."
      }
    ],
    questions: [
      { q: "Excel jadvalidagi ustun va satr kesishmasi nima deyiladi?", options: ["Slayd", "Katak", "Sahifa cheti", "Papka"], answer: 1, explanation: "Ustun va satr kesishgan joy katak deyiladi, masalan A1." },
      { q: "Excel formulasi odatda qaysi belgi bilan boshlanadi?", options: ["#", "?", "=", "&"], answer: 2, explanation: "Excel formulalari tenglik belgisi bilan boshlanadi." },
      { q: "=SUM(A1:A5) formulasi nima qiladi?", options: ["Kataklarni o'chiradi", "A1 dan A5 gacha qiymatlarni yig'adi", "Matnni qalin qiladi", "Faylni yopadi"], answer: 1, explanation: "SUM funksiyasi ko'rsatilgan oraliqdagi sonlarni qo'shadi." }
    ]
  },
  {
    id: "security", icon: "???", category: "Xavfsizlik",
    title: "Internet xavfsizligi",
    description: "Kuchli parol, firibgarlik va shaxsiy ma'lumotlarni himoyalash.",
    color: "#ffad91",
    lessons: [
      {
        title: "Kuchli parol yaratish",
        text: `Parol hisobingizga kirishni himoyalash uchun ishlatiladi.

Kuchli parol uzun, taxmin qilib topish qiyin va boshqa hisoblaringizdagi parollardan farqli bo'lishi kerak.

Ism, tug'ilgan sana yoki 123456 kabi oson topiladigan parollardan saqlaning. Imkon bo'lsa, ko'p omilli tasdiqlashni yoqing va parollarni ishonchli parol menejerida saqlang.`,
        tip: "Parolingizni hech kimga yubormang. Xizmat xodimi deb tanishtirgan odamga ham parol yoki tasdiqlash kodini bermang."
      },
      {
        title: "Firibgarlikni aniqlash",
        text: `Firibgarlar soxta xabarlar, havolalar yoki saytlar orqali parol va pulni qo'lga kiritishga urinishi mumkin.

Quyidagi belgilar xavf haqida ogohlantiradi:
' Shoshilinch pul yuborish talabi.
' Sovrin yutganingiz haqida kutilmagan xabar.
' Shubhali havola yoki g'alati domen.
' Parol, bank ma'lumoti yoki SMS kodini so'rash.

Shubhali xabarni mustaqil ravishda rasmiy sayt yoki telefon orqali tekshiring.`,
        tip: "SMS orqali kelgan tasdiqlash kodini hech kimga bermang."
      },
      {
        title: "Shaxsiy ma'lumotlarni himoyalash",
        text: `Shaxsiy ma'lumotlarga telefon raqami, manzil, shaxsiy hujjat ma'lumotlari va hisobga kirish ma'lumotlari kirishi mumkin.

Ijtimoiy tarmoqlarda kimlar nimalarni ko'ra olishini tekshiring. Ommaviy kompyuterda ishlagandan keyin hisobdan chiqing. Dastur va tizim yangilanishlarini o'rnatib boring.

Muhim fayllarning zaxira nusxasini saqlash ham ma'lumot yo'qolishidan himoyalanishga yordam beradi.`,
        tip: "Internetga joylagan ma'lumotingizni boshqalar saqlab olishi mumkinligini doimo yodda tuting."
      }
    ],
    questions: [
      { q: "Kuchli parol qanday bo'lishi kerak?", options: ["Faqat 123456", "Hamma hisobda bir xil", "Uzun va taxmin qilish qiyin", "Ismingizning o'zi"], answer: 2, explanation: "Uzun va noyob parolni taxmin qilish qiyinroq. Har bir hisob uchun alohida parol ishlatish tavsiya etiladi." },
      { q: "Notanish odam SMS tasdiqlash kodini so'rasa nima qilish kerak?", options: ["Kodini yuborish", "Kodni bermaslik", "Barcha parollarni aytish", "Telefonni o'chirib tashlash"], answer: 1, explanation: "Tasdiqlash kodi hisobingizga kirish uchun ishlatilishi mumkin. Uni boshqa odamlarga bermang." },
      { q: "Kutilmagan sovrin haqidagi shubhali xabarni qanday tekshirish kerak?", options: ["Darhol pul to'lash", "Havolaga shoshilib kirish", "Rasmiy manbadan mustaqil tekshirish", "Parol yuborish"], answer: 2, explanation: "Rasmiy manbadan tekshirish soxta sovrin va firibgarlikni aniqlashga yordam beradi." }
    ]
  },
  {
    id: "email", icon: "📧", category: "Amaliy",
    title: "Elektron pochta",
    description: "Email yuborish, fayl biriktirish va xat odobini o'rganing.",
    color: "#e3a4ff",
    lessons: [
      {
        title: "Elektron pochta nima?",
        text: `Elektron pochta (email) internet orqali xabar va fayllar yuborish xizmatidir.

Email manzili odatda foydalanuvchi nomi, @ belgisi va domen nomidan iborat. Masalan: foydalanuvchi@example.com.

Elektron pochta orqali o'qituvchi, hamkasb yoki tashkilotga yozma murojaat yuborish mumkin.`,
        tip: "Rasmiy xat yuborishdan oldin qabul qiluvchining manzilini tekshiring."
      },
      {
        title: "Xat yozish va yuborish",
        text: `Yangi xat yozayotganda quyidagi maydonlar uchrashi mumkin:

' To ' qabul qiluvchi manzili.
' Subject ' xat mavzusi.
' Message ' xatning asosiy matni.
' Attachment ' biriktirilgan fayl.

Xatni salomlashish bilan boshlang, maqsadni aniq yozing va xushmuomalalik bilan yakunlang. Yuborishdan oldin imlo, manzil va biriktirilgan fayllarni tekshiring.`,
        tip: "Mavzu maydoniga xat mazmunini qisqa va aniq yozing."
      },
      {
        title: "Fayl biriktirish va ehtiyotkorlik",
        text: `Ko'p email xizmatlarida qog'oz qisqich shaklidagi belgi orqali fayl biriktiriladi.

Fayl biriktirilganini va to'g'ri fayl tanlanganini tekshiring. Noma'lum jo'natuvchidan kelgan kutilmagan fayllarni ochmang.

Maxfiy hujjatlarni yuborishda qabul qiluvchining manzili va faylga kirish huquqini yana bir bor tekshiring.`,
        tip: "Yuborishdan oldin xatni bir marta boshidan oxirigacha o'qib chiqing."
      }
    ],
    questions: [
      { q: "Email manzilida odatda qaysi belgi bo'ladi?", options: ["@", "#", "%", "*"], answer: 0, explanation: "Elektron pochta manzilida foydalanuvchi nomi va domenni ajratish uchun @ belgisi ishlatiladi." },
      { q: "Emaildagi Subject maydoni nima uchun kerak?", options: ["Xat mavzusini yozish", "Faylni o'chirish", "Kompyuterni yoqish", "Parolni ko'rsatish"], answer: 0, explanation: "Subject qabul qiluvchiga xatning asosiy mavzusini tushunishga yordam beradi." },
      { q: "Noma'lum jo'natuvchidan kelgan kutilmagan faylga qanday munosabatda bo'lish kerak?", options: ["Darhol ochish", "Uni barcha tanishlarga yuborish", "Ehtiyot bo'lib, manbani tekshirish", "Parol bilan javob qaytarish"], answer: 2, explanation: "Noma'lum fayllar zararli dastur yoki firibgarlik vositasi bo'lishi mumkin." }
    ]
  },
  {
    id: "ai", icon: "🤖", category: "Amaliy",
    title: "Sun'iy intellekt asoslari",
    description: "AI vositalari, samarali savollar va javoblarni tekshirish.",
    color: "#f5c875",
    lessons: [
      {
        title: "Sun'iy intellekt nima?",
        text: `Sun'iy intellekt (AI) ' ayrim vazifalarni bajarishda inson aqliy faoliyatiga o'xshash usullardan foydalanadigan texnologiyalar sohasi.

AI vositalari matn tuzish, g'oya topish, tarjima qilish, ma'lumotni tushuntirish va tasvir yaratishda yordam berishi mumkin.

AI bergan javob har doim ham to'g'ri bo'lavermaydi. Muhim faktlarni ishonchli manbalardan tekshirish kerak.`,
        tip: "AI ' yordamchi vosita. Yakuniy qaror va tekshirish mas'uliyati foydalanuvchida qoladi."
      },
      {
        title: "Yaxshi so'rov yozish",
        text: `AI vositasiga yozilgan topshiriq ko'pincha prompt yoki so'rov deb ataladi.

Yaxshi so'rovda quyidagilar bo'lishi mumkin:
' Maqsad ' nima kerakligini ayting.
' Kontekst ' mavzu yoki vaziyatni tushuntiring.
' Format ' ro'yxat, jadval yoki qisqa matn so'rang.
' Daraja ' boshlovchi yoki mutaxassis uchunligini ko'rsating.

Masalan: 'Kompyuterning asosiy qismlarini boshlovchi o'quvchi uchun sodda tilda 5 bandda tushuntir.'`,
        tip: "Natija siz kutgandek bo'lmasa, so'rovingizni aniqroq qilib qayta yozing."
      },
      {
        title: "AI va mas'uliyatli foydalanish",
        text: `AI ba'zan noto'g'ri faktlar, mavjud bo'lmagan manbalar yoki noaniq javoblar berishi mumkin.

Shuning uchun:
' Muhim ma'lumotni tekshiring.
' Maxfiy ma'lumotlarni kiritmang.
' Mualliflik huquqini hurmat qiling.
' AI yordamida tayyorlangan ishni tushunib, o'zingiz tekshiring.
' Ta'lim muassasangiz qoidalariga amal qiling.

AI'dan o'rganish va fikrlarni rivojlantirish uchun foydalaning, lekin uni xatosiz manba deb qabul qilmang.`,
        tip: "AI javobining to'g'riligini tekshirish ham raqamli savodxonlikning bir qismidir."
      }
    ],
    questions: [
      { q: "Sun'iy intellekt nima ishda yordam berishi mumkin?", options: ["Faqat elektr ishlab chiqarishda", "Matn tuzish va ma'lumotni tushuntirishda", "Har doim xatosiz qaror chiqarishda", "Internetni butunlay almashtirishda"], answer: 1, explanation: "AI matn tuzish, tushuntirish, g'oya topish kabi vazifalarda yordam berishi mumkin, ammo natijani tekshirish kerak." },
      { q: "Yaxshi AI so'rovi qanday bo'ladi?", options: ["Maqsadi aniq bo'ladi", "Faqat tasodifiy belgilar yoziladi", "Vazifa tushuntirilmaydi", "Maxfiy parollar kiritiladi"], answer: 0, explanation: "Aniq maqsad va kerakli formatni ko'rsatish foydaliroq javob olishga yordam beradi." },
      { q: "AI bergan muhim faktni nima qilish kerak?", options: ["Hech tekshirmaslik", "Ishonchli manbadan tekshirish", "Hamma joyga darhol tarqatish", "Parol bilan almashtirish"], answer: 1, explanation: "AI xato qilishi mumkin, shu sababli muhim faktlar mustaqil ravishda tekshirilishi lozim." }
    ]
  },
  {
    id: "digital", icon: "📱", category: "Boshlang'ich",
    title: "Raqamli savodxonlik",
    description: "Onlayn xizmatlar, raqamli odob va axborotni baholash.",
    color: "#f2a7c9",
    lessons: [
      {
        title: "Raqamli savodxonlik nima?",
        text: `Raqamli savodxonlik ' raqamli qurilmalar va internetdan xavfsiz, samarali hamda mas'uliyatli foydalanish ko'nikmalaridir.

Bunga axborot izlash, manbani tekshirish, elektron muloqot, raqamli fayllarni boshqarish va shaxsiy ma'lumotlarni himoyalash kiradi.

Raqamli savodxonlik faqat qurilmani ishlatish emas, balki undan oqilona foydalanishni ham anglatadi.`,
        tip: "Yangi dastur o'rganayotganda rasmiy yo'riqnomalar va ishonchli manbalardan foydalaning."
      },
      {
        title: "Axborotni baholash",
        text: `Internetdagi xabarni o'qiganda quyidagi savollarni bering:

' Muallif yoki tashkilot kim?
' Xabar qachon e'lon qilingan?
' Dalil yoki ishonchli manbalar keltirilganmi?
' Boshqa mustaqil manbalar ham shu ma'lumotni tasdiqlaydimi?
' Sarlavha haddan tashqari shov-shuvlimi?

Faqat sarlavhaga qarab xulosa chiqarmang. Ma'lumotning sanasi va kontekstini ham hisobga oling.`,
        tip: "Bir xabar ko'p joyda tarqalgan bo'lishi uning haqiqat ekanini avtomatik isbotlamaydi."
      },
      {
        title: "Raqamli odob va fayllarni boshqarish",
        text: `Internetdagi muloqotda ham boshqalarga hurmat bilan munosabatda bo'ling.

Boshqa odamning suratini yoki ma'lumotini ruxsatsiz tarqatmang. Haqoratli xabar yozmang va shubhali havolalarni boshqalarga yubormang.

Raqamli fayllarni mazmunli nomlang, kerakli hujjatlarni zaxiralang va eski yoki keraksiz fayllarni ehtiyotkorlik bilan boshqaring.`,
        tip: "Onlayn muloqotda ham haqiqiy hayotdagi kabi hurmat va mas'uliyat muhim."
      }
    ],
    questions: [
      { q: "Raqamli savodxonlik nimani anglatadi?", options: ["Faqat kompyuter sotib olish", "Raqamli vositalardan xavfsiz va samarali foydalanish", "Faqat video tomosha qilish", "Internetda istalgan narsani tarqatish"], answer: 1, explanation: "Raqamli savodxonlik texnologiyadan foydalanish, axborotni baholash va xavfsizlik ko'nikmalarini qamrab oladi." },
      { q: "Internetdagi xabarni tekshirishda qaysi ish foydali?", options: ["Faqat sarlavhani o'qish", "Muallif, sana va mustaqil manbalarni tekshirish", "Xabarni darhol tarqatish", "Barcha reklamaga ishonish"], answer: 1, explanation: "Muallif, sana, dalillar va boshqa manbalarni tekshirish axborotni to'g'ri baholashga yordam beradi." },
      { q: "Boshqa odamning shaxsiy suratini internetda tarqatishdan oldin nima qilish kerak?", options: ["Hech narsani tekshirmaslik", "Ruxsat va maxfiylikni hisobga olish", "Suratga parol qo'yish shart emas deb o'ylash", "Uni noma'lum odamlarga yuborish"], answer: 1, explanation: "Boshqalarning maxfiyligi va roziligini hurmat qilish raqamli odobning muhim qismidir." }
    ]
  }
];

const STORAGE_KEY = "bilimYoliV2";

const SUPABASE_URL = "https://zkyfudbyweohpvokimlb.supabase.co";

// Bu yerga auth.js yoki account.js faylingizdagi
// aynan o'sha publishable keyni ko'chiring.
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_3_GAGYan-vVgXlN7AOX-rg_9Lk54_LT";

const OWNER_KEY = "bilimYoliV2_owner";

let cloudClient = null;
let cloudUserId = null;
let cloudReady = false;
let cloudSaveQueue = Promise.resolve();

const TOTAL_LESSONS = courses.reduce((sum, course) => sum + course.lessons.length, 0);

let currentFilter = "Barchasi";
let currentCourseId = null;
let currentLessonIndex = 0;
let quizState = null;
let toastTimer = null;

function freshState() {
  return { completed: {}, scores: {}, attempts: {} };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") return freshState();
    return {
      completed: saved.completed && typeof saved.completed === "object" ? saved.completed : {},
      scores: saved.scores && typeof saved.scores === "object" ? saved.scores : {},
      attempts: saved.attempts && typeof saved.attempts === "object" ? saved.attempts : {}
    };
  } catch {
    return freshState();
  }
}

let state = loadState();


function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    showToast("Natijalarni saqlab bo'lmadi. Brauzer xotirasini tekshiring.");
    return;
  }

  if (cloudReady && cloudClient && cloudUserId) {
    queueCloudSave();
  }
}

function queueCloudSave() {
  if (!cloudClient || !cloudUserId || !cloudReady) return;

  const snapshot = JSON.parse(JSON.stringify(state));

  cloudSaveQueue = cloudSaveQueue
    .then(() => writeCloudState(snapshot))
    .catch(error => {
      console.error("Supabase saqlash xatosi:", error);
      showToast("Bulutga saqlashda xatolik. Internetni tekshiring.");
    });
}

async function writeCloudState(snapshot) {
  if (!cloudClient || !cloudUserId) return;

  const progressRows = Object.entries(snapshot.completed)
    .filter(([, completed]) => Boolean(completed))
    .map(([key]) => {
      const separator = key.lastIndexOf(":");

      return {
        user_id: cloudUserId,
        course_key: key.slice(0, separator),
        lesson_index: Number(key.slice(separator + 1)),
        completed: true,
        updated_at: new Date().toISOString()
      };
    });

  const testCourseIds = new Set([
    ...Object.keys(snapshot.scores),
    ...Object.keys(snapshot.attempts)
  ]);

  const resultRows = [...testCourseIds].map(courseId => ({
    user_id: cloudUserId,
    course_key: courseId,
    best_score: Number(snapshot.scores[courseId] || 0),
    attempts: Number(snapshot.attempts[courseId] || 0),
    updated_at: new Date().toISOString()
  }));

  if (progressRows.length) {
    const { error } = await cloudClient
      .from("student_progress")
      .upsert(progressRows, {
        onConflict: "user_id,course_key,lesson_index"
      });

    if (error) throw error;
  }

  if (resultRows.length) {
    const { error } = await cloudClient
      .from("student_test_results")
      .upsert(resultRows, {
        onConflict: "user_id,course_key"
      });

    if (error) throw error;
  }
}

async function initializeCloudSync() {
  try {
    const { createClient } = await import(
      "https://esm.sh/@supabase/supabase-js@2"
    );

    cloudClient = createClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY
    );

    const { data, error } = await cloudClient.auth.getSession();
    if (error) throw error;

    const user = data.session?.user;

    // Foydalanuvchi kirmagan bo'lsa, mahalliy saqlash davom etadi.
    if (!user) return;

    cloudUserId = user.id;

    const previousOwner = localStorage.getItem(OWNER_KEY);

    const [
      { data: remoteProgress, error: progressError },
      { data: remoteResults, error: resultsError }
    ] = await Promise.all([
      cloudClient.from("student_progress").select("*"),
      cloudClient.from("student_test_results").select("*")
    ]);

    if (progressError) throw progressError;
    if (resultsError) throw resultsError;

    // Boshqa akkauntning mahalliy natijalarini yangi akkauntga aralashtirmaymiz.
    const canMergeLocal = !previousOwner || previousOwner === cloudUserId;
    const merged = canMergeLocal ? loadState() : freshState();

    for (const row of remoteProgress || []) {
      if (row.completed) {
        merged.completed[`${row.course_key}:${row.lesson_index}`] = true;
      }
    }

    for (const row of remoteResults || []) {
      merged.scores[row.course_key] = Math.max(
        Number(merged.scores[row.course_key] || 0),
        Number(row.best_score || 0)
      );

      merged.attempts[row.course_key] = Math.max(
        Number(merged.attempts[row.course_key] || 0),
        Number(row.attempts || 0)
      );
    }

    state = merged;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    localStorage.setItem(OWNER_KEY, cloudUserId);

    cloudReady = true;
    refreshPage();

    // Mahalliy natijalarni ham joriy akkauntga sinxronlaydi.
    queueCloudSave();

    showToast("O'quv natijalari akkaunt bilan sinxronlandi.");
  } catch (error) {
    console.error("Supabase ulanish xatosi:", error);
alert("Supabase xatosi: " + error.message);
    
    showToast("Bulut bilan ulanish amalga oshmadi. Konsolni tekshiring.");
  }
}

function clearCloudProgress() {
  if (!cloudReady || !cloudClient || !cloudUserId) return;

  cloudSaveQueue = cloudSaveQueue
    .then(async () => {
      const { error: progressError } = await cloudClient
        .from("student_progress")
        .delete()
        .eq("user_id", cloudUserId);

      if (progressError) throw progressError;

      const { error: resultsError } = await cloudClient
        .from("student_test_results")
        .delete()
        .eq("user_id", cloudUserId);

      if (resultsError) throw resultsError;
    })
    .catch(error => {
      console.error("Natijalarni o'chirish xatosi:", error);
      showToast("Bulutdagi natijalarni o'chirib bo'lmadi.");
    });
}


function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function getCourse(id) {
  return courses.find(course => course.id === id);
}

function completedCount() {
  return courses.reduce((sum, course) => {
    return sum + course.lessons.filter((_, index) =>
      Boolean(state.completed[course.id + ":" + index])
    ).length;
  }, 0);
}

function courseCompleted(course) {
  return course.lessons.filter((_, index) =>
    Boolean(state.completed[course.id + ":" + index])
  ).length;
}

function courseProgress(course) {
  return Math.round(courseCompleted(course) / course.lessons.length * 100);
}

function bestOverallScore() {
  const scores = Object.values(state.scores).filter(Number.isFinite);
  return scores.length ? Math.max(...scores) : 0;
}

function averageScore() {
  const scores = Object.values(state.scores).filter(Number.isFinite);
  return scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
}

function renderCourses() {
  const search = document.getElementById("courseSearch").value.trim().toLocaleLowerCase("uz");
  const filtered = courses.filter(course => {
    const matchesFilter = currentFilter === "Barchasi" || course.category === currentFilter;
    const searchable = (course.title + " " + course.description + " " + course.category).toLocaleLowerCase("uz");
    return matchesFilter && searchable.includes(search);
  });

  const grid = document.getElementById("courseGrid");
  document.getElementById("emptyState").classList.toggle("hidden", filtered.length !== 0);

  grid.innerHTML = filtered.map((course, index) => {
    const done = courseCompleted(course);
    const progress = courseProgress(course);
    return `
      <article class="course-card" style="--glow:${course.color};--iconbg:${course.color}18;animation-delay:${index * 35}ms">
        <div class="course-icon">${course.icon}</div>
        <div class="course-category">${escapeHTML(course.category)}</div>
        <h3>${escapeHTML(course.title)}</h3>
        <p>${escapeHTML(course.description)}</p>
        <div class="course-meta">
          <span>? ${course.lessons.length} ta dars</span>
          <span>${done}/${course.lessons.length} bajarildi</span>
        </div>
        <div class="card-progress"><span style="width:${progress}%"></span></div>
        <button class="course-open" data-open-course="${course.id}">
          ${progress === 100 ? "Kursni takrorlash" : "Kursni davom ettirish"} <span>></span>
        </button>
      </article>
    `;
  }).join("");

  grid.querySelectorAll("[data-open-course]").forEach(button => {
    button.addEventListener("click", () => openCourse(button.dataset.openCourse));
  });
}

function renderDashboard() {
  const done = completedCount();
  const overall = Math.round(done / TOTAL_LESSONS * 100);
  const best = bestOverallScore();
  const average = averageScore();

  document.getElementById("statCourses").textContent = courses.length;
  document.getElementById("statLessons").textContent = TOTAL_LESSONS;
  document.getElementById("statCompleted").textContent = done;
  document.getElementById("statAverage").textContent = average + "%";
  document.getElementById("overallPercent").textContent = overall + "%";
  document.getElementById("overallBar").style.width = overall + "%";
  document.getElementById("completedSummary").textContent = `${done} / ${TOTAL_LESSONS} dars`;
  document.getElementById("bestScore").textContent = best + "%";
  document.getElementById("scoreMessage").textContent =
    best === 0 ? "Birinchi testingizni yeching!" :
    best === 100 ? "Ajoyib! Mukammal natija!" : "Yaxshi natija ' yana mashq qiling!";

  const achievements = [
  { icon: "🌱", title: "Birinchi qadam", desc: "Birinchi darsni tugatish", earned: done >= 1 },
{ icon: "🔎", title: "Bilim izlоvchi", desc: "5 ta darsni tugatish", earned: done >= 5 },
{ icon: "🎓", title: "Faol o'quvchi", desc: "Barcha darslarni tugatish", earned: done >= TOTAL_LESSONS },
{ icon: "🏆", title: "Yuqori natija", desc: "Testdan 80% yoki ko'proq olish", earned: Object.values(state.scores).some(score => score >= 80) },
{ icon: "💎", title: "Mukammal test", desc: "Testdan 100% olish", earned: Object.values(state.scores).some(score => score === 100) }

  document.getElementById("achievementList").innerHTML = achievements.map(item => `
    <div class="achievement ${item.earned ? "earned" : ""}">
      <span class="achievement-icon">${item.icon}</span>
      <span><strong>${escapeHTML(item.title)}</strong><br>${escapeHTML(item.desc)}</span>
      <span>${item.earned ? "✅" : "🔒"}</span>
    </div>
  `).join("");

  document.getElementById("progressList").innerHTML = courses.map(course => {
    const progress = courseProgress(course);
    return `
      <div class="progress-row">
        <span>${course.icon} ${escapeHTML(course.title)}</span>
        <div class="progress-track"><span style="width:${progress}%"></span></div>
        <span class="percentage">${progress}%</span>
      </div>
    `;
  }).join("");
}

function refreshPage() {
  renderCourses();
  renderDashboard();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function openWorkspace(title) {
  document.getElementById("workspaceTitle").textContent = title;
  document.getElementById("workspace").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeWorkspace() {
  document.getElementById("workspace").classList.add("hidden");
  document.body.style.overflow = "";
  currentCourseId = null;
  quizState = null;
}

function openCourse(id) {
  const course = getCourse(id);
  if (!course) return;
  currentCourseId = id;
  currentLessonIndex = course.lessons.findIndex((_, index) =>
    !state.completed[course.id + ":" + index]
  );
  if (currentLessonIndex < 0) currentLessonIndex = 0;
  renderCourseView();
  openWorkspace(course.title);
}

function renderCourseView() {
  const course = getCourse(currentCourseId);
  if (!course) return;
  const done = courseCompleted(course);
  const progress = courseProgress(course);

  document.getElementById("workspaceContent").innerHTML = `
    <p class="course-detail-intro">${escapeHTML(course.description)} Har bir darsni o'qing, kerakli bilimlarni o'zlashtiring va test bilan bilimingizni tekshiring.</p>
    <div class="quiz-progress">
      <span>${done}/${course.lessons.length} dars</span>
      <div class="progress-track"><span style="width:${progress}%"></span></div>
      <span>${progress}%</span>
    </div>
    <div class="lesson-nav">
      ${course.lessons.map((lesson, index) => `
        <button class="lesson-tab ${index === currentLessonIndex ? "active" : ""}" data-lesson="${index}">
         ${state.completed[course.id + ":" + index] ? "✅ " : ""}${index + 1}. ${escapeHTML(lesson.title)}
      `).join("")}
      <button class="lesson-tab" data-start-quiz="true">📝 Test</button>
    </div>
    <div id="lessonBody"></div>
  `;

  document.querySelectorAll("[data-lesson]").forEach(button => {
    button.addEventListener("click", () => {
      currentLessonIndex = Number(button.dataset.lesson);
      renderCourseView();
    });
  });
  document.querySelector("[data-start-quiz]").addEventListener("click", openQuiz);

  renderLesson();
}

function renderLesson() {
  const course = getCourse(currentCourseId);
  if (!course) return;
  const lesson = course.lessons[currentLessonIndex];
  const key = course.id + ":" + currentLessonIndex;
  const isDone = Boolean(state.completed[key]);
  const body = document.getElementById("lessonBody");

  body.innerHTML = `
    <article class="lesson-content">
      <div class="course-category">DARS ${currentLessonIndex + 1} / ${course.lessons.length}</div>
      <h3>${escapeHTML(lesson.title)}</h3>
      <p>${escapeHTML(lesson.text)}</p>
      <div class="tip-box">?? <strong>Foydali maslahat:</strong> ${escapeHTML(lesson.tip)}</div>
    </article>
    <div class="lesson-actions">
      <span class="lesson-done-label">${isDone ? "? Bu dars tugatilgan" : "Darsni o'qib bo'lgach, tugatilgan deb belgilang."}</span>
      <button class="btn btn-primary" id="completeLesson" ${isDone ? "disabled" : ""}>
        ${isDone ? "? Tugatilgan" : "Darsni tugatdim ?"}
      </button>
    </div>
    <div class="lesson-actions">
      <button class="btn btn-secondary" id="previousLesson" ${currentLessonIndex === 0 ? "disabled" : ""}>< Oldingi dars</button>
      <button class="btn btn-secondary" id="nextLesson" ${currentLessonIndex === course.lessons.length - 1 ? "disabled" : ""}>Keyingi dars ></button>
    </div>
    <div class="tip-box">Darslarni tugatganingizdan so'ng <strong>Test</strong> bo'limiga o'tib, bilimingizni tekshiring.</div>
  `;

  document.getElementById("completeLesson").addEventListener("click", () => {
    state.completed[key] = true;
    saveState();
    refreshPage();
    renderCourseView();
    showToast("Barakalla! Dars tugatilgan deb belgilandi.");
  });

  document.getElementById("previousLesson").addEventListener("click", () => {
    if (currentLessonIndex > 0) {
      currentLessonIndex--;
      renderCourseView();
    }
  });

  document.getElementById("nextLesson").addEventListener("click", () => {
    if (currentLessonIndex < course.lessons.length - 1) {
      currentLessonIndex++;
      renderCourseView();
    }
  });
}

function openQuiz() {
  const course = getCourse(currentCourseId);
  if (!course) return;

  quizState = {
    index: 0,
    answers: Array(course.questions.length).fill(null),
    submitted: false,
    correct: 0
  };

  renderQuestion();
}

function renderQuestion() {
  const course = getCourse(currentCourseId);
  if (!course || !quizState) return;

  const index = quizState.index;
  const question = course.questions[index];
  const selected = quizState.answers[index];
  const submitted = quizState.submitted;
  const body = document.getElementById("workspaceContent");

  body.innerHTML = `
    <p class="course-detail-intro">${escapeHTML(course.title)} kursi bo'yicha bilimlaringizni tekshiring. Har bir to'g'ri javob uchun ${Math.round(100 / course.questions.length)} ball atrofida ball beriladi.</p>
    <div class="quiz-progress">
      <span>Savol ${index + 1}/${course.questions.length}</span>
      <div class="progress-track"><span style="width:${(index + 1) / course.questions.length * 100}%"></span></div>
      <span>${Math.round((index + 1) / course.questions.length * 100)}%</span>
    </div>
    <div class="question-text">${index + 1}. ${escapeHTML(question.q)}</div>
    <div class="answer-list">
      ${question.options.map((option, optionIndex) => {
        let classes = "answer-option";
        if (submitted && optionIndex === question.answer) classes += " correct";
        else if (submitted && selected === optionIndex && optionIndex !== question.answer) classes += " wrong";
        return `<button class="${classes}" data-answer="${optionIndex}" ${submitted ? "disabled" : ""}>
          <strong>${String.fromCharCode(65 + optionIndex)}.</strong> ${escapeHTML(option)}
        </button>`;
      }).join("")}
    </div>
    ${submitted ? `
      <div class="answer-feedback ${selected === question.answer ? "correct" : "wrong"}">
        <strong>${selected === question.answer ? "? To'g'ri javob!" : "? Bu javob noto'g'ri."}</strong><br>
        ${escapeHTML(question.explanation)}
      </div>
    ` : ""}
    <div class="quiz-controls">
      ${submitted
        ? `<button class="btn btn-primary" id="nextQuestion">${index === course.questions.length - 1 ? "Natijani ko'rish >" : "Keyingi savol >"}</button>`
        : `<button class="btn btn-primary" id="checkAnswer" ${selected === null ? "disabled" : ""}>Javobni tekshirish ?</button>`
      }
    </div>
    <div class="lesson-actions">
      <button class="btn btn-secondary" id="backToLessons">< Darslarga qaytish</button>
    </div>
  `;

  body.querySelectorAll("[data-answer]").forEach(button => {
    button.addEventListener("click", () => {
      if (quizState.submitted) return;
      quizState.answers[index] = Number(button.dataset.answer);
      renderQuestion();
    });
  });

  const checkButton = document.getElementById("checkAnswer");
  if (checkButton) {
    checkButton.addEventListener("click", () => {
      if (quizState.answers[index] === null) return;
      quizState.submitted = true;
      renderQuestion();
    });
  }

  const nextButton = document.getElementById("nextQuestion");
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (quizState.index < course.questions.length - 1) {
        quizState.index++;
        quizState.submitted = false;
        renderQuestion();
      } else {
        finishQuiz();
      }
    });
  }

  document.getElementById("backToLessons").addEventListener("click", renderCourseView);
}

function finishQuiz() {
  const course = getCourse(currentCourseId);
  if (!course || !quizState) return;

  const correct = quizState.answers.reduce((sum, answer, index) =>
    sum + (answer === course.questions[index].answer ? 1 : 0), 0
  );
  const score = Math.round(correct / course.questions.length * 100);
  const previousBest = Number(state.scores[course.id] || 0);

  state.scores[course.id] = Math.max(previousBest, score);
  state.attempts[course.id] = Number(state.attempts[course.id] || 0) + 1;
  saveState();
  refreshPage();

  const medal = score === 100 ? "??" : score >= 80 ? "??" : score >= 60 ? "??" : "??";
  const message = score === 100 ? "Ajoyib! Barcha savollarga to'g'ri javob berdingiz!" :
    score >= 80 ? "Juda yaxshi! Bilimingiz mustahkam." :
    score >= 60 ? "Yaxshi urinish! Darslarni takrorlab ko'ring." :
    "Mashq qilishda davom eting. Darslarni qayta o'qib, yana urinib ko'ring.";

  document.getElementById("workspaceContent").innerHTML = `
    <div class="result-box">
      <div class="result-medal">${medal}</div>
      <div class="eyebrow">TEST YAKUNLANDI</div>
      <h3>${escapeHTML(course.title)}</h3>
      <div class="result-score">${score}%</div>
      <p>${correct} ta to'g'ri javob / ${course.questions.length} ta savol</p>
      <p>${escapeHTML(message)}</p>
      <p>Eng yaxshi natijangiz: <strong>${state.scores[course.id]}%</strong></p>
      <div class="result-actions">
        <button class="btn btn-primary" id="retryQuiz">Testni qayta ishlash ?</button>
        <button class="btn btn-secondary" id="resultLessons">Darslarga qaytish</button>
        <button class="btn btn-secondary" id="resultClose">Yopish</button>
      </div>
    </div>
  `;

  document.getElementById("retryQuiz").addEventListener("click", openQuiz);
  document.getElementById("resultLessons").addEventListener("click", renderCourseView);
  document.getElementById("resultClose").addEventListener("click", closeWorkspace);
  showToast(`Test natijasi: ${score}%. Natija saqlandi.`);
}

function resetProgress() {
  const confirmed = window.confirm(
    "Barcha tugatilgan darslar va test natijalarini o'chirmoqchimisiz? Bu amalni ortga qaytarib bo'lmaydi."
  );
  if (!confirmed) return;

 state = freshState();
saveState();
clearCloudProgress();
refreshPage();
  showToast("O'quv natijalari tozalandi.");
}

function setupEvents() {
  document.getElementById("courseSearch").addEventListener("input", renderCourses);

  document.getElementById("filterRow").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    currentFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach(item =>
      item.classList.toggle("active", item === button)
    );
    renderCourses();
  });

  document.getElementById("closeWorkspace").addEventListener("click", closeWorkspace);
  document.getElementById("workspaceBackdrop").addEventListener("click", closeWorkspace);
  document.getElementById("resetProgress").addEventListener("click", resetProgress);

  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
  });

  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("navLinks").classList.remove("open");
    });
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !document.getElementById("workspace").classList.contains("hidden")) {
      closeWorkspace();
    }
  });
}

function init() {
  document.getElementById("year").textContent = new Date().getFullYear();
  setupEvents();
  refreshPage();
}

init();
initializeCloudSync();
