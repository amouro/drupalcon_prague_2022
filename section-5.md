---
layout: intro-image
image: /images/sorting-soraya-irving.jpg
---

<div class="hidden">
# ===== Issue in Sorting =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1 class="text-blue-800">Sorting</h1>
  <p class="text-blue-500">Color, Shape, Size?</p>
</div>

<!--
Photo by Soraya Irving on Unsplash
https://unsplash.com/photos/AGtksbL8z2c
-->

<!--
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
# Sorting - 五十音 (Gojūon)
</div>


<div class="grid grid-cols-[1fr,3fr]">
  <div class="flex flex-col justify-center">
    <h1>五十音 (Gojūon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 flex flex-row space-x-4">
    <div>
        <img src="/images/2022-09-04-17-28-34.png" class="h-118 w-auto" />
        <h4 class="mt-2">Hiragana</h4>
    </div>
    <div>
        <img src="/images/2022-09-06-17-51-19.png" class="h-118 w-auto" />
        <h4 class="mt-2">Katagana</h4>
    </div>
  </div>
</div>

---

<div class="hidden">
# Sorting - 漢字 (Kanji)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>漢字 (Kanji)</h1>
    <h3>Characters in Japanese</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/raku-japanese-character.png" class="h-124 w-auto" />
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

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-8">
  <div class="flex flex-col justify-center">

```ts {all|8,11,15|2,6|3,5,9|4,7,10,12-14,16}
$array = [
  'あまガミ', // Hiragana
  'ウィーン', // Katagana
  '荻野', // Kanji
  'マーティン',
  'ういーん',
  '中村',
  'Ülf', // Latin & Number
  'レアード',
  '角中',
  'OKEON',
  '井上',
  '藤岡',
  '佐藤',
  'SHIMA',
  '岩下',
];
```
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
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
layout: fact
---

# 580
Same Chinese character different pronounciation

580 from 5266 common used Chinese characters (traditional).

<div class="text-xs mt-20 text-gray-500">

There were 1263 characters have more than one pronounciation.<br />
In 2012, 683 was reviewed and combined into single pronounciation.

1. 教育部國語一字多音審訂表 2012 [PDF](https://language.moe.gov.tw/files/people_files/%E5%88%9D%E7%A8%BF.pdf)
</div>
---
layout: fact
---

# 600+
Same Japanese character different pronounciation

609 from 2136 common used Japanese kanji characters.

<div class="text-xs mt-20 text-gray-500">

1. 文科省常用漢字表 20101130： [PDF](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf)
1. 常用漢字表 - 音訓表: [Website](http://jgrammar.life.coocan.jp/ja/data/onkun.htm)
1. Explaination about Kanji (EN): [Website](https://www.tofugu.com/japanese/onyomi-kunyomi/)
</div>

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