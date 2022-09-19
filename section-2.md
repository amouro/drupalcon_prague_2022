---
layout: intro-image
image: /images/cover-beyond-i18n-edho-pratama.png
---

<div class="hidden">
# ===== Beyond i18n =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>Beyond i18n</h1>
  <p>translation and design</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->

<!--
-->

---

<h1 class="hidden">
# 信達雅
</h1>

<div class="absolute bottom-10 text-5xl leading-normal">
  <h1 class="text-3xl leading-loose">"There three difficultites in translation:</h1>
  <div>
    <b class="text-pink-700">信 </b>Faithfulness, 
  </div>
  <div>
    <b class="text-pink-700">達 </b>Expressiveness and 
  </div>
  <div>
    <b class="text-pink-700">雅 </b>Elegance"
  </div>
  <em class="text-xl">by Yen Fu</em>
</div>



<!--
Yan Fu (simplified Chinese: 严复; traditional Chinese: 嚴復; pinyin: Yán Fù; 8 January 1854 — 27 October 1921) was a Chinese military officer, newspaper editor, translator, and writer. He was most famous for introducing western ideas, including Darwin's "natural selection", to China in the late 19th century. 

The three difficulties became the model of a ideal in translation and influence the translation a lot in publication.

An ideal translation to Chinese or Japanese that follows the three principle could make the length of translation very different from English or to English.


-->

---

# Translation ratio

| Lang     | Text       | ratio |
| -------- | ---------- | ----- |
| English  | Translate  | 100% |
| Deutsch  | Übersetzen | <span class="text-red-600">127%</span> |
| Czech    | Přeložit   | <span class="text-green-600">81%</span> |
| Chinese  | 翻譯        | <span class="text-green-600">45%</span> |
| Japanese | 翻訳する    | <span class="text-green-600">91%</span> |
| Korean   | 번역하다 　   | <span class="text-green-600">83%</span> |


<!--
websites and apps
Most of the latest CMS platforms are now translation friendly and built to handle the expansion and contraction that comes with translations. Developers are creating global-ready apps that are designed to accommodate localization for other countries, languages, and cultures.

Despite the capabilities of web and app development to accommodate multiple languages, it is worth considering a final round of post-localization review. Linguists will review your site and/or app to ensure the appropriate translations were used, have been placed properly, fit the space, and function according to the developer’s specifications.

// https://eriksen.com/language/text-expansion/
-->

---

# Translation ratio

| Lang     | Text       | width | ratio |
| -------- | ---------- | ----- | ----- |
| English  | Password field is required. | 225px | 100% |
| Deutsch  | Das Passwortfeld muss ausgefüllt werden. | 363px | <span class="text-red-600">161%</span> |
| Czech    | Heslo je vyžadováno. | 182px | <span class="text-green-600">81%</span> |
| Chinese  | 必須填寫密碼欄位。      | 160px | <span class="text-green-600">71%</span> |
| Japanese | パスワードフィールドの入力は必須です。 | 338px | <span class="text-red-600">150%</span> |
| Korean   | 비밀번호를 입력해야 합니다. 　   | 215px | <span class="text-green-600">95%</span> |

---

# Expansion / Contraction

https://www.linkedin.com/pulse/text-expansion-contraction-translation-jennifer-murphy
<div>
  <img src="/images/translation-ratio.png" class="w-4/5"/>
</div>

<!--
As previously mentioned, German will be considerably longer than, for example, English copy. Or Koreans may not use spaces to separate words. This will mess up a non-adaptive layout. In an interview, Sonia Sánchez Moreno, Director of Sylaba Translations, points out that the Spanish language expands about 30% over English. A translator can save you significant money on redesigning parts of your product where translations won’t fit.
-->
---

# Design with translation in mind

<div class="flex flex-col overflow-y-scroll mb-4">
  <div class="grid grid-cols-2 gap-2 h-100">
    <img src="/images/hp-variation-en.png" />
    <img src="/images/hp-variation-ja.png" />
  </div>
</div>
<div class="text-center margin-auto text-gray-400/40">
    Scroll ⭥
</div>
---

# Natural Language Forms

![](/images/2022-08-28-23-29-07.png)

---

# Natural Language Forms

<div class="flex flex-col text-xl mt-12 text-gray-500">
  <div class="leading-16">
    <h2 class="text-gray-700 mb-4">English</h2>
    My name is <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">❶</span></span> and 
    I'd like to depart <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">❷</span></span> city 
    on <span class="px-3 py-2 bg-gray-200 text-gray-900">Thursday <span class="n3">❸</span></span> and 
    arrive in <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">❹</span></span> city.
  </div>

  
  <div class="mt-12 leading-12">
    <h2 class="text-gray-700 mb-4">Français</h2>
    Je m'appelle <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">❶</span></span> 
    et je voudrais quitter la ville de <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">❷</span></span> 
    le <span class="px-3 py-2 bg-gray-200 text-gray-900">jeudi <span class="n3">❸</span></span><br />
    et arriver à la ville de <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">❹</span></span>
  </div>
</div>

<style>
  .n1, .n2, .n3, .n4 {
    @apply text-3xl inline-block transform translate-y-1;
  }
  .n1 {
    @apply text-red-500;
  }
  .n2 {
    @apply text-blue-500;
  }
  .n3 {
    @apply text-orange-500;
  }
  .n4 {
    @apply text-green-500;
  }
</style>

<!-- Note -->

---

# Natural Language Forms

<div class="flex flex-col text-xl mt-12 text-gray-500">
  <div class="leading-16">
    <h2 class="text-gray-700 mb-4">Deutsch</h2>
    Mein Name ist <span class="px-3 py-2 bg-gray-200 text-gray-900">Sophia <span class="n1">❶</span></span> 
    und ich möchte am <span class="px-3 py-2 bg-gray-200 text-gray-900">Donnerstag <span class="n3">❸</span></span> 
    in <span class="px-3 py-2 bg-gray-200 text-gray-900">Sydney <span class="n2">❷</span></span> abreisen 
    und in <span class="px-3 py-2 bg-gray-200 text-gray-900">Melbourne <span class="n4">❹</span></span> ankommen.
  </div>
  <div class="mt-12 leading-12">
    <h2 class="text-gray-700 mb-4">日本語</h2>
    私の名前は <span class="px-3 py-2 bg-gray-200 text-gray-900">王大明 <span class="n1">❶</span></span> です，
    <span class="px-3 py-2 bg-gray-200 text-gray-900">木曜日 <span class="n3">❸</span></span> に、 
    <span class="px-3 py-2 bg-gray-200 text-gray-900">雪梨 <span class="n2">❷</span></span> を出発して
    <span class="px-3 py-2 bg-gray-200 text-gray-900">墨爾本 <span class="n4">❹</span></span> に到着したいです。
  </div>
</div>

<style>
  .n1, .n2, .n3, .n4 {
    @apply text-3xl inline-block transform translate-y-1;
  }
  .n1 {
    @apply text-red-500;
  }
  .n2 {
    @apply text-blue-500;
  }
  .n3 {
    @apply text-orange-500;
  }
  .n4 {
    @apply text-green-500;
  }
</style>