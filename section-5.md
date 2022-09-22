---
layout: intro-image
image: /images/sorting-soraya-irving.jpg
---

<div class="hidden">
# ===== Issue in CJK: Sorting =====
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
Now we know how to type in CJK.
The last part of this presentation, let's dig further in the language.
I promise this is not language class.

In english we sometimes sort with the alphabet for title of articles, taxonomy tags, or site names for example.

How does CJK do in the similar way?

Next slide >>>>>
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

<!-- 
In Japanese the order of the Gojuon is the main ordering system. 
It is based on the phenentical elements.

Next slide >>>>>
-->
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

<!--
And there are Hiragana for main Japanese language, and Katagana often used for translate the foreign language or new invented terms.

Next slide >>>>>
-->

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

<!--
And also Chinese Character which is called Kanji in Japanese.

Next slide >>>>>
-->

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


<!--
Any title, term, sentence can start with the above three characters.
Latin and Numbers, Hiragana, Katagana and Kanji.
How do we sort them correctly?

Next slide >>>>>
-->
---

<div class="hidden">
# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="flex flex-col justify-end">

```ts
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

```ts {all|4-6|7-8|9-11|12-18|all}
// Result
Array
(
    [0] => OKEON
    [1] => SHIMA
    [2] => Ülf
    [3] => あまガミ
    [4] => ういーん
    [5] => ウィーン
    [6] => マーティン
    [7] => レアード
    [8] => 中村
    [9] => 井上
    [10] => 佐藤
    [11] => 岩下
    [12] => 荻野
    [13] => 藤岡
    [14] => 角中
)
```
  </div>
</div>

<!--
The ideal order looks like this.
Starting with Symbols, Numbers, Alphabets like in English.

And than Hiragana, Katagana, the last part will be the Kanji.
Hiragana and Katagana is actually follow the order of the matrix starting from rows and than columns.

How about the Kanji?

1. 記号
2. 数字
3. アルファベット（全角含む）
4. ひらがな
5. カタカナ
6. 漢字

Next slide >>>>>
-->
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
Use sort() function directly, it is sorting by the index number the character is in the Unicode table. How ever it doesn't help to find the character in the Japanese speaker's mind.

With localeCompare() in JS.
The Kanji sorting started with the pronouciation of the first character and then the next character if first character is the same.
If I write down the number of its row and number of the character, you can see the it is in the incremental order.
But, why is there a 1-2 in the middle?

It is because the Kanji could have more than one pronounciation.
Let's hold this thought and jumps to Chinese for now.

Next slide >>>>>

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
        <li>Bopomofo (Phonetic characters)</li>
        <li>Pinyin</li>
      </ul>
    </div>
  </div>
</div>

<!--
I call Czech Republica "捷克" in Chinese which consists of two characters, the first character 捷, has all the attributes that could be used for sorting.
That's correct, more than one way.

We can count its total strokes, radical stokes, spell it with phonetical elements that only uses in Taiwan, or Pinyin with roman characters which is the main input method in China.

Usually we order with one of the attributes and sometimes let the user change the sorting method, for instance the book search system in a library.
When there is symbol or roman alphabets, they also come first like in Japanese.

Next slide >>>>>


Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan. 

-->

---

<div class="hidden">
# Sorting - Chinese pronunciation
</div>

# Chinese
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

<!--
Like in Japanese, it is also common that a traditional Chinese can have mutiple pronounciation.

This is the character means stands for 樂 Music, or 樂 for Happy or Happiness or 樂 for verb "To appreciate".

Next slide >>>>>
-->

---
layout: image-right
image: /images/raku-japanese-character.png
---

<div class="hidden">
# Sorting - Japanese pronunciation
</div>

# Japanese Kanji
Multiple pronunciation

![](/images/raku-japanese-pronounce.png)

1. ❶ Music
2. <span class="text-gray-500">❶ To play (music)</span>
3. ❷ Happy
4. ❸ To appreciate

<!--
Japanese has the same character with their own variation.
It has more pronounciation due to different cultural context.

Four of them or inherited from ancient Chinese in various eras, and another four represent things in the original Japanese language 

Next slides >>>>>
-->

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

<!--
So how many characters has more than one pronounciation?
In the official definition from the Ministry of Education of Taiwan, there are 580 out of 5,000 common used traditional Chinese characters.
It was over 1200 before the officials reviewed and merged a lot of them in 2012.

Next slide >>>>>
-->
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

<!--
Japanese Kanji also has more than 600 out of 2,000 common characters which has more than one pronounciations.
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

<!--
With localCompare() in JavaScript, we can specify a language code, it provides better sorting that taking care of the variation of characters.

Next slide >>>>>
-->
---

# Sorting
Sort Ukrainian or Persian language 🇺🇦

```ts
const items = ['Албанія','Єгипет','Індія','Перу'];
items.sort();
console.log(items);
// ['Єгипет', 'Індія', 'Албанія', 'Перу']

items.sort((a, b) => a.localeCompare(b, 'uk', { ignorePunctuation: true }));
console.log(items);
// ['Албанія', 'Єгипет', 'Індія', 'Перу']
```
<hr />

```ts
const items = ['گیلان', 'سمنان', 'چهار محال بختیاری', 'مشهد', 'قم'];
items.sort();
console.log(items);
// ['سمنان', 'قم', 'مشهد', "چهار محال بختیاری", 'گیلان']

items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);
// ['چهار محال بختیاری", 'سمنان', 'قم', 'گیلان', 'مشهد"] 
```

<!--
It also works well with Ukrain, or arabic or farsi languages.

Next slide >>>>>
-->

---

# Sorting

Sort in Japanese

```ts
const items = [
  'あまガミ', 'ウィーン', '荻野', 'ういーん', '中村', 'レアード', '角中', 'OKEON', '井上', '藤岡', '佐藤', 'SHIMA', '岩下',
];

items.sort((a, b) => a.localeCompare(b, 'ja-JP', { ignorePunctuation: true }));
console.log(items);
// ["OKEON", "SHIMA", "あまガミ", "ウィーン", "ういーん", "レアード", 
// "井上", "荻野", "角中", "岩下", "佐藤", "中村", "藤岡"]
// "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]
```

// PHP
```php
function sortWithLocale($arr) {
  Collator::create('ja_JP.utf8')->sort($arr, SORT_LOCALE_STRING);
  return $arr;
}

// ["OKEON", "SHIMA", "あまガミ", "ういーん", "ウィーン", "レアード", 
// "中村", "井上", "佐藤", "岩下", "荻野", "藤岡", "角中"]
```


<!--
For Japanese, it is also order by the phonetic order, including the Kanji.
PHP does have similar feature, but I would recommand sorting in database query to get a better sorting result.

Next slide >>>>>

岩下 Iwashita 被判斷成 Gan shita
フリガナ
Keiko kono
河野　かわの　こうの

-->

---

# Sorting

Sort in Chinese

```ts
const items = [
  '基隆', '台北', '桃園', '新竹', '苗栗', '台中', '彰化', '雲林', '嘉義', '高雄', '屏東', '花蓮', '宜蘭',
];
items.sort();
           
console.log(items);
// ['台中', '台北', '嘉義', '基隆', '宜蘭', '屏東', '彰化', '新竹', '桃園', '花蓮', '苗栗', '雲林', '高雄']
```

```ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-stroke', {ignorePunctuation: true }));
// ['台中', '台北', '宜蘭', '花蓮', '屏東', '苗栗', '桃園', '高雄', '基隆', '雲林', '新竹', '嘉義', '彰化']
```

```ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-zhuyin', {ignorePunctuation: true }));
// ['屏東', '苗栗', '台北', '台中', '桃園', '高雄', '花蓮', '基隆', '嘉義', '新竹', '彰化', '宜蘭', '雲林']
```

<!--
In Traditional Chinese, localeCompare() also works with various attributes that I mentioned before.
By strokes, by the Phonetic zhuyin.

Or use pinyin for Simplified Chinese.

Next slides >>>>>
-->

---

<div class="hidden">
# Sorting - Chinese pronunciation
</div>

# Chinese
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

<!--
Lastly for multiple pronouciation characters, what do we do?

The answer is we do Nothing in general.

Next slide >>>>>
-->
---

# Sorting
What happens to the Character that has multiple pronunciation?

<div class="grid grid-cols-2 gap-4 pt-8">
<div>

## This affects

- Japanese Kanji
- Chinese characters sorting in 
  - Pinyin (zh-CN)
  - Bopomofo (Library, material for Children)

</div>
<div>

## Solution
- Leave it as-is
- Customize it and make a explicit order in a array
</div>
</div>

<!--
This issue only affects Japanese Kanji, or when sorting with Chinese character with phonetic element using Zhuyin or Pinyin.

Native speakers know the common variations of the pronouciation, when we process in head, it is processed together.

Sometimes if the client request to make it in the explicit order, the better way it to map the words into a pre-defined table or array.
In the end it will be a fully customized array.

Next slide >>>>>
-->