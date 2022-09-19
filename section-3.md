---
layout: intro-image
image: /images/calendar-sept-estee-janssens.jpg
---

<div class="hidden">
# ===== Calendar & Date =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>Calendar</h1>
  <p>translation and design</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->

<!--
-->

---

# Gregorian Calendar

<div class="flex flex-row flex-wrap justify-center">
  <img src="/images/2022-09-08-15-49-06.png" class="h-110 w-auto" />
</div>

<!--
    <p>The calendar used in most of the world. It was introduced in October 1582 by Pope Grgory XIII</p>
    <p>12 months of 28-31 days each, 365 days a year with a leap day being added to February in the leap year.</p>
-->

---
layout: fact
---

# 9/12/2022

<span class="text-blue-400">Sep. 12</span> vs. <span class="text-teal-400">Dec. 9</span>


---
layout: fact
---

# YYYY-mm-dd


ISO 8601 Formats

<!-- Configuration -->


---
layout: fact
---

<div class="hidden">
# JP/TW Date format using Gregorian Calendar
</div>

<h1 class="!text-7xl">
YYYY<span class="text-blue-400">年</span>mm<span class="text-blue-400">年</span>dd<span class="text-blue-400">日</span>
</h1>

🇯🇵 Japan 🇹🇼 Taiwan


---
layout: image
image: /images/2022-08-29-23-18-14.png
---

<div class="hidden">
# Calendar Year - Thailand
</div>

---
layout: image
image: /images/2022-08-29-23-26-19.png
---

<div class="hidden">
# Calendar Year - Taiwan
</div>


---

# Calendar Year

| Calendar            | Year | Type                    |
| --------            | ---- | ---------               |
| AD                  | 2022 | Gregorian               |
| พุทธศักราช (พ.ศ.) B.E | 2565 | Buddhist Era            |
| 民國　(míng gúo)　   | 111  | Label of the Birth Year |
| 令和　(rei wa)　     | 4    | Imperial Era            |

<!--
Thai: พุทธศักราช (phút-thá-sàk-gà-ràat) + year
Abbreviation: พ.ศ. (phaaw-sǎaw)
B.E. Buddist Era
-->

---

# Calendar Year

| Calendar            | Year | Calculation      |
| --------            | ---- | ---------        |
| AD                  | 2022 | getYear()        |
| พุทธศักราช (พ.ศ.) B.E | 2565 | getYear() <span class="text-green-500">+ 543</span>  |
| 民國　(míng gúo)  　　| 111  | getYear() <span class="text-orange-400">- 1911</span> |
| <span class="text-red-400">令和　(rei wa)</span>  　　　| 4    | getYear() <span class="text-orange-400">- 2018</span> |


---

# Imperial Era in Japan

<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center text-gray-500 dark:text-gray-400">
    <h2 class="text-gray-900 dark:text-gray-100">R. Weinstein</h2>
    <small class="text-lg">Doctor</small>
    <p class="text-xl">A pass issued to leave the Shanghai ghetto in 1945. <br />
    <span class="text-sm">JMP, Oral History Collection, No. 549 (copy)</span></p>
    <h2 class="text-gray-900 dark:text-gray-100">Initially valid from <br />昭和 18 年 2 月 29 日</h2>
  </div>
  <div>
      <img src="/images/permission_spanish_synagoge.jpg" class="h-96 w-auto" />
  </div>
</div>

---

# Imperial Era in Japan

<div class="flex flex-row">
  <div class="flex flex-col flex-grow justify-center">

| Imperial Era | Year range  |
| ------------ | ----------  |
| 昭和 Shōwa    | 1926 - 1989 |
| 平成 Heisei   | 1989 - 2019 |
| 令和 Reiwa    | 2019 - Now  |

  </div>
  <div class="flex-1">
    <!-- <img src="/images/2022-09-08-15-43-41.png" class="h-110 w-auto" /> -->
    <img src="/images/imperial-year-jp.png" class="h-110 w-auto" />
  </div>
</div>

---

# Use CLDR to convert the date

```ts
new Date().toLocaleDateString('ja-JP-u-ca-japanese', { dateStyle: 'long' })
// '令和4年9月9日'
new Date().toLocaleDateString('zh-hant-u-ca-roc', { dateStyle: 'long' })
// '民國111年9月9日'
new Date().toLocaleDateString('th-u-ca-BE', { dateStyle: 'full' })
// 'วันศุกร์ที่ 9 กันยายน พ.ศ. 2565'

```