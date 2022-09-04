---
layout: intro-image
image: /images/cjk-cover-left.png
#layout: 3-images
#imageLeft: /images/cjk-cover-left.png

imageTopRight: /images/cjk-cover-right-top.png
imageBottomRight: /images/cjk-cover-right-bottom.png
---

<div class="hidden">
# ===== Issue in CJK =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>CJK</h1>
  <p>Exclusive issue in CJK</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->

<!--
-->

---

# Autocomplete search suggestion

1. Input Chinese or Japanese Kanji consists of one to four phonetic elements
2. Same pronouciation could have more than one words

<video controls>
  <source src="https://d.pr/v/vjS5Xr+" type="video/mp4" />
</video>
<!-- Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
-->

---

# Autocomplete search suggestion

Bad example

<video controls>
  <source src="https://d.pr/v/SyI343+" type="video/mp4" />
</video>

<!-- Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
-->

---

# Input method

| Keyword      | Segments      | Segments |
| ------------ | ------------- | -------- |
| Mobile Phone | | 12 |
| 携帯 (keitai) | け い た い (ke i ta i) | 6 |
| 手機 (shǒujī) | ㄕㄡˇ ㄐㄧ⎵ | 6 |
| 移動電話 (yídòngdiànhuà)| (yi2 dong4 dian4 hua4) | 17 |

---

# CompositionEvent 

Implement `CompositionEvent` to avoid trigger search too early.

[MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)

```javascript { }
  inputElement.on('input, compositinoend', function (event) {
    if (event.type == 'compositionend') {
        compositionActive = false;
    }
    if (compositionActive) {
        return;
    }

    //...do autocomplete AJAX call

  }).on('compositionstart', function () {
    compositionActive = true;
  }).on('compositionupdate', function() {
    compositionActive = true;
  })
```

[Core: Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
<!-- 
  // TODO find the trace of autocomplete js in Drupal 8 or even 7
  how did Drupal handle the composition events before.
  Japaense user gets angry when the form is submitting while confirming the kanji words.

  [Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
  

-->
<!--
(function ($) {
  'use strict';
  const autocompleteDropdownSelector = '.oist-search-form ul';
  Drupal.behaviors.searchAutocomplete = {
    attach: function (context, settings) {
      $('.oist-search-form input').once('autocomplete').on('input', function () {
        const keyword = $(this).val();
        $(autocompleteDropdownSelector).remove();
        if (keyword.length < 2) {
          return;
        }
        $.ajax({
          url: settings.searchBaseUrl + encodeURIComponent(keyword) + '?sort=relevancy&order=desc&number=5&language=' + settings.language + '&startdate=&enddate=&preview=5',
          crossDomain: true,
          success: function (data) {
            // $(autocompleteDropdownSelector).remove();
            var results = '<div class="search-result-list bg-white px-4">';
            results += '<ul class="border-t border-gray-400 w-full pt-2">';
            for (var i in data) {
              if (data[i].site === 'www' || data[i].site === 'main') {
                results += '<li class="pb-3"><a class="text-gray-700 underline js-search-autocomplete ' + data[i].site + '" href="' + data[i].link + '">' + data[i].title + '</a></li>';
              }
              else {
                results += '<li class="pb-3"><a class="flex items-center gap-x-2 text-gray-700 js-search-autocomplete ' + data[i].site + '" href="' + data[i].link + '"><i class="fa fa-external-link" aria-hidden="true"></i><span class="underline">' + data[i].title + '</span></a></li>';
              }
            }
            results += '</ul></div>';
            if ($('.oist-mobile-search').hasClass('active')) {
              $('.oist-mobile-search .oist-search-results-attach').after(results);
            }
            else {
              $('.oist-desktop-search').after(results);
            }
          },
        });
      }).focusout(function () {
        // Generally when we lose focus from the search box,
        // we would like to hide the suggestions.
        // However, if the user clicks on a result, if we remove the markup
        // the click would fail. That's why we make this exception for the link
        // clicks.
        var selected = $('.js-search-autocomplete:hover');
        if (selected.length) {
          return;
        }
        // $(autocompleteDropdownSelector).remove();
      });
    }
  };
})(jQuery);
-->

<!--
    // When entering Japanese text, we would like to wait until the word
    // is entered. This can be done using a set of special Javascript
    // events.
    // @see https://caniuse.com/?search=compositionstart
-->

---

# Sorting

Sort Latin character

```ts
const items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort();
console.log(items);
// ["Adieu", "Cliché", "Premier", "café", "communiqué", "réservé"]

items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

---

# Sorting
Sort Russian or Persian language

localeCompare()



---

# Sorting

Sort in Japanese

```ts
const items = [
  'あまガミ', 'ウィーン', '荻野', 'ういーん', '中村', 'レアード', '角中', 'OKEON', '井上', '藤岡', '佐藤', 'SHIMA', '岩下',
];
items.sort();
           
console.log(items);
// ["OKEON", "SHIMA", "あまガミ", "ういーん", "ウィーン", "レアード", 
// "中村", "井上", "佐藤", "岩下", "荻野", "藤岡", "角中"]

// "Nakamura", "Inoue", "Sato", "Iwashita", "Ogino", "Fujioka", "Kakunaka"

```

```ts

items.sort((a, b) => a.localeCompare(b, 'ja-JP', { ignorePunctuation: true }));

console.log(items);
// ["OKEON", "SHIMA", "あまガミ", "ウィーン", "ういーん", "レアード", 
// "井上", "荻野", "角中", "岩下", "佐藤", "中村", "藤岡"]

// "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]
```

フリガナ
Keiko kono
河野　かわの　こうの

整


<!--
岩下 Iwashita 被判斷成 Gan shita
-->

---

<div class="hidden">
# Sorting - 五十音 (Gojūon)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>五十音 (Gojūon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="h-124 w-auto" />
  </div>
</div>

---

<div class="hidden">
# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8">
  <div class="flex flex-col justify-center">
    
```ts {1-3|5-7|5,6,8}
// UTF-8
["中村", "井上", "佐藤", "岩下", "荻野", "藤岡", "角中"]
[U+4E2D, U+4E95, U+4F50, U+5CA9, U+837B, U+85E4, U+89D2]

// localeCompare()
["井上",  "荻野",    "角中",    "岩下",      "佐藤",    "中村",    "藤岡"]
[い(1-2), おぎ(1-5), かく(2-1), いわ(1-2),   さ(3-1), なか(5-1), ふじ(6-3)]
[い(1-2), おぎ(1-5), かく(2-1), がん(2-1.1), さ(3-1), なか(5-1), ふじ(6-3)]
```

  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>



<!-- 
日本漢字的音讀最為明顯，日本漢字的讀法一般有二個以上，是因不同時期、不同地方傳入的結果。 在普通話中亦間有取自遊牧民族等其他民族語言、梵語、其他漢語語言或方言的發音屬於此類。

-->

---

<div class="hidden">
# Sorting - Chinese characters
</div>

<div class="grid grid-rows-2">
  <div class="">
    <h1>Chinese characters</h1>
    <h3>4 attributes</h3>
    <img src="/images/2022-09-01-22-41-43.png" class="mt-6" />
  </div>
  <div class="">
    <div class="grid grid-cols-2 text-2xl">
      <ul>
        <li>Radical Strokes</li>
        <li>Total Strokes</li>
      </ul>
      <ul>
        <li>Pinyin</li>
        <li>Bopomofo (Phonetic characters)</li>
      </ul>
    </div>
  </div>
</div>

<!--

Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan. 

-->

---


# Sorting
Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>

---
layout: fact
---

# 1200+
Same Chinese character different pronounciation

1263 from 5266 common used Chinese characters.

---
layout: image-right
image: /images/raku-japanese-character.png
---

# Sorting
Multiple pronunciation

![](/images/raku-japanese-pronounce.png)

1. ❶ Music
2. <span class="text-gray-500">❶ To play (music)</span>
3. ❷ Happy
4. ❸ To appreciate

---

# Sorting
Multiple pronunciation

## What happens to the Character that has multiple pronunciation?

This only affects

- Japanese Kanji
- Chinese characters sorting in 
  - Pinyin (zh-CN)
  - Bopomofo (Library, material for Children)

## Solution
- Leave it as-is
- Customize it and make a explicit order in a array