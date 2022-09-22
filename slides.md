---
layout: intro-image
image: /images/DCE2022_title.png
# try also 'default' to start simple
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
# css: unocss
fonts:
  sans: Montserrat
  serif: Bitter
---

<div class="hidden">
# More than Words
</div>

<div class="absolute bottom-10 text-gray-400">
  <span class="font-700">
    Chris Wu @amourow Sep. 2022
  </span>
</div>

<div class="text-6xl font-700 text-gray-700 self-end mt-24 mb-8 font-serif">
  More than Words
</div>
<div class="text-4xl text-gray-700">
  Localizing the User Experience
</div>


<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
Good afternoon, I hope you all have a good DrupalCon in Prague. In this session I'm going to talk about things around how to localize user experiences. 
Especially experience in CJK languages.

We have many tool to help with translations, but understand how to localize the user experience can make the website design better.
If you don't know CJK yet, lets embrace some culture shock; If you are or may working on websites with CJK, I hope this will be helpful.

I already regret to submit the proposal for a short session when I making the slide. There are so much to talk, let's start the journey.
-->

---

# Chris Wu

<div class="grid grid-cols-[1fr,2fr] grid-rows-2 gap-4 py-8">
  <div class="image rounded-full content-center flex flex-col">
    <img src="/images/chris_potrait.png" class="rounded-full overflow-hidden" />
  </div>
  <div class="intro flex flex-row items-center">
  
  1. 🇹🇼  
  1. Senior Web Developer, OIST
  1. Designer, Developer, former DUGTW member
  1. 
  1. <a href="https://twitter.com/amourow" target="_blank" alt="GitHub"
      class="text-xl icon-btn mt-8 !border-none !hover:text-white bg-blue-600 text-white hover:bg-blue-600/80">
      <carbon-logo-twitter /> @amourow</a>

  </div>

  <div></div>
  <div class="pl-4">
    
  </div>
</div>
<!--
I'm a Taiwanese Drupal developer works in a international research institution in Japan. 
During my 14 years Drupal adventure (according to Drupal dot org), I designed and made websites in Traditional Chinese and Japanese and English.

I'm now working in a Japanese research institute which use English and Japanese as equaly important first language.
Our team always make sure the experience of both languages are well perceived. 

Next slides >>>

-->

---
layout: intro-image-right
image: /images/campus.png
---

<div class="hidden">
# Intro: OIST
</div>

<div class="absolute top-10 flex items-center">
  <div class="w-12">
    <img src="/images/2022-09-21-23-03-19.png" />
  </div>
  <div class="w-96 my-0 ml-4 leading-6">
    Okinawa Institute of <br />Science and Technology
  </div>
</div>

<blockquote class="content-end">
  <h2>Ivory Tower of Babel</h2>
  <p> Website design and development challenges for a multidisciplinary, multinational, multicultural, multilingual science and technology university in Japan</p>
  <p class="text-gray-400"> Sep. 20 by Micheal Cooper</p>
</blockquote>

<!--
OIST is public found by the Japanese Government directly from the cabinet office. 
It is a interdisciplinary research institute, if you are interested in this insititute, please do watch the presentation from Tuesday by Micheal Cooper.


-->

---
layout: intro-image
image: /images/DCE2022_quote.png
---

<div class="hidden">
# Disclaimer
</div>

<div class="text-2xl font-700 text-gray-700 self-end mb-12">
<div class="w-1/2 m-auto text-center px-8">
Views expressed here are solely my own and not those of the university. 
No part of this presentation should be considered an endorsement.
</div>
</div>
<div class="text-3xl font-700 text-gray-100 text-center self-end mb-8">
Disclaimer
</div>

<!--
Before jumping the the topic, please noted that there is no endorsement for vendors, if I mentioned any. 

Next slide >>>
-->

---
src: ./section-1.md
---
<!-- this page will be loaded from './section-1.md' -->
# 1. Translate with i18n
---
src: ./section-2.md
---
<!-- this page will be loaded from './section-2.md' -->
# 2. Issue beyond the i18n techniques

---
src: ./section-3.md
---
<!-- this page will be loaded from './section-3.md' -->
# 3. Issue about date
---
src: ./section-4.md
---
<!-- this page will be loaded from './section-4.md' -->
# 4. Issue that happens exclusively in CJK
---
src: ./section-5.md
---
<!-- this page will be loaded from './section-5.md' -->
# 5. Sorting

---
layout: intro-image
image: /images/DCE2022_content.png
---

<div class="text-gray-700 pt-12">

# Recap

* What to consider beyond i18n
* Calendar & date besides Gregorian calendar
* CJK input method
* Sorting methods regarding locales

<div class="pt-12">

Online slide: https://prague.amou.ro
</div>
</div>
---
layout: image
image: /images/DCE2022_thanks.png
---

<div class="hidden">
# Thank you
</div>
