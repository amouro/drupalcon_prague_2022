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
So, Drupal provides many the solutions.
We know how do we make multi-lang web site on Drupal.
Is it already enough, the answer is "no" clearly.

Next slide >>>>>
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
Yen Fu (simplified Chinese: 严复; traditional Chinese: 嚴復; pinyin: Yán Fù; 8 January 1854 — 27 October 1921) 
-->

<!--
There was a Chinese newspaper editor, translator, and writer. Yen Fu, He was most famous for introducing western ideas, including Darwin's "natural selection", to China in the late 19th century. 

He address the three difficulties in translation "信，達，雅"
The three difficulties became the model of a ideal in translation and influence the translation a lot in publication.

An ideal translation to Chinese or Japanese that follows the three principle could make the length of translation very different from English or to English.

Next slide >>>>>
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
3 things to keep in mind when designing UI to be translated in different languages
https://blog.prototypr.io/3-things-to-keep-in-mind-when-designing-ui-to-be-translated-in-different-languages-e1d02accf21c
-->

<!--
websites and apps
Most of the latest CMS platforms are now translation friendly and built to handle the expansion and contraction that comes with translations. Developers are creating global-ready apps that are designed to accommodate localization for other countries, languages, and cultures.

Despite the capabilities of web and app development to accommodate multiple languages, it is worth considering a final round of post-localization review. Linguists will review your site and/or app to ensure the appropriate translations were used, have been placed properly, fit the space, and function according to the developer’s specifications.

// https://eriksen.com/language/text-expansion/

-->

<!--
Take the verb "Translate" as an example, the length is different accross languages.
We can see Chinese and Japanese shares similar character here, but still different.

Next slide >>>>>
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

<!--
Let's expand it a little, take the sentence in Drupal UI as an example.
It is a help text for the password field for login.

How much different in the nuance and length now?
Although "fill" is not in the origin English sentence, we see it shows in Deutsch and Chinese and Japanese at least.

Next slide >>>>>
-->
---

# Expansion / Contraction

https://www.linkedin.com/pulse/text-expansion-contraction-translation-jennifer-murphy
<div>
  <img src="/images/translation-ratio.png" class="w-4/5"/>
</div>

<!--
As previously mentioned, German will be considerably longer than, for example, English copy. Or Koreans may not use spaces to separate words, and Japanese could be longer or shorter than English coopy in the mean time. This expansion or contraction will mess up a non-adaptive layout. 

The best way to accommodate the situation, if the translated page is really crucial to your website, it is better to mocking up the design with actual text as soon as possible.

Next slide >>>>>
-->
---

# Design with translation in mind

<div class="flex flex-col overflow-y-scroll mb-4">
  <div class="grid grid-cols-2 gap-2 h-100">
    <img src="/images/hp-variation-en.png" />
    <img src="/images/hp-variation-ja.png" />
  </div>
</div>
<div class="text-center margin-auto text-gray-500/80">
    Scroll ⭥
</div>

<!--
In the homepage of our new website design, we want to keep the rhythm and portion of each section.

Our designer checks the balance of the design, decide where the text should be break into next line, how many rows should we use for different language.
Our translator also help reducing the translation when necessary.

The longer the original text it is, the more it needs to be taken care of.

Next slide >>>>>
-->

---

# Natural Language Forms

![](/images/2022-08-28-23-29-07.png)

<!--
During my research of localize the user experience, I found a interesting UI design which is called Natural Lanugage Form.

It tries to make the form into a dialog, blend the fields into a sentence, to communicate to the user naturally.
However, this is not very suitable for tranlation.

Next slide >>>>>
-->
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

<!-- 
Because a good translation of a full sentence or paragraph need to be natural to the speaker.

In this example, the fields could be the same order in English or French.

Next slide >>>>>

-->

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

<!--
But in Deutsch or Japanese, the position of time or date is more strict in the sentence. 
The mix of translation and fields position cannot be easy resolved by using the t() function.

So, I started to think in my experience, what localization issues that are beyond the text translation.
What efforts do we do in our institue who treat two languages equally important.

Next Slide >>>>>
-->
