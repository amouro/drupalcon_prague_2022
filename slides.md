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
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# Intro
Chris


---

# Intro
OIST

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
layout: center
class: text-center
---

# Learn More

[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html)
