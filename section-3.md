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
Date, it was the first challenge in the design.

When talking about the date, we know there are translations for month, for weekdays, but they are just translations.

What else could affects the localization? 

Next slide >>>>>
-->

---

# Gregorian Calendar

<div class="flex flex-row flex-wrap justify-center">
  <img src="/images/2022-09-08-15-49-06.png" class="h-110 w-auto" />
</div>

<!--
Oh, there is actually a name of the most common calendar system. Gregorian Calendar.

The calendar used in most of the world. It was introduced in October 1582 by Pope Grgory XIII (the 8th)

12 months of 28-31 days each, 365 days a year with a leap day being added to February in the leap year.

However, do we all interpret the date of Gregorian calendar in the same way?

Next slide >>>>>
-->

---
layout: fact
---

# 9/12/2022

<span class="text-blue-400">Sep. 12</span> vs. <span class="text-teal-400">Dec. 9</span>

<!--
If you see September, please raise your hand.

OK I'm sure I'm in Europe, because it is the way to format it with the order from day to month and than year.
But is is rare in states of America.

In our institute, we have diverse members including telented researcher, staff from the world, we have to find a common way to make sure our understanding of information are on the same page.

Next slide >>>>>
-->
---
layout: fact
---

# YYYY-mm-dd


ISO 8601 Formats

<!-- 
Therefore, unless we write the Month in text, otherwise we use ISO 8601 format because it is also the same order of format for Japanese UI.

Next slide >>>>>
-->


---
layout: fact
---

<div class="hidden">
# JP/TW Date format using Gregorian Calendar
</div>

<h1 class="!text-7xl">
YYYY<span class="text-blue-400">年</span>mm<span class="text-blue-400">月</span>dd<span class="text-blue-400">日</span>
</h1>

🇯🇵 Japan 🇹🇼 Taiwan

<!--
Is this all for date, of course not.

There are different calendar in the world.

Next slide >>>>>
-->

---
layout: image
image: /images/2022-08-29-23-18-14.png
---

<div class="hidden">
# Calendar Year - Thailand
</div>

<!--
What do you see in this calendar?

Year 2563

Thai language

Still see English date on Month and Weekday

Small date number in Chinese character

Next slide >>>>>
-->

---
layout: image
image: /images/2022-08-29-23-26-19.png
---

<div class="hidden">
# Calendar Year - Taiwan
</div>

<!--
How about this?

This is just for one day. What do you see?

English date

Traditional Chinese translation of weekday (Mon).

Date in Lunar calendar

What is the Year? 2023 ? 112? Year of the rabit?

There are even fortune telling to let you know which direction is your lucky direction?...etc

The quote which doesn't make sense :)

What's the common difference between this calendar?

The year! Because there are other calendar systems in the world and they are official.

Next slide >>>>>
-->

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
--
Year of 2022 is based on Gregorian calendar.
In Thailand, the use both Gregorian calendar and the Buddhist Era "พ.ศ." as the official date.
In Taiwan, it is calculated from the Birth year of the country since 1911. Taiwan no longer use imperial year and instead use the abbreviation of the name of the country 民國
In Japan, it still use Imperial Era, the current one started since 2019.

Next slide >>>>>
-->

---

# Calendar Year

| Calendar            | Year | Calculation      |
| --------            | ---- | ---------        |
| AD                  | 2022 | getYear()        |
| พุทธศักราช (พ.ศ.) B.E | 2565 | getYear() <span class="text-green-500">+ 543</span>  |
| 民國　(míng gúo)  　　| 111  | getYear() <span class="text-orange-400">- 1911</span> |
| <span class="text-red-400">令和　(rei wa)</span>  　　　| 4    | getYear() <span class="text-orange-400">- 2018</span> |

<!--
Because they are official, many government document or applications still requires the date formated in the way.

So we have to calculated when we display them.
But, it could be more complex in Japan.

Next slide >>>>>
-->
---

# Imperial Era in Japan

<div class="grid grid-cols-2 gap-4">
  <div class="flex flex-col justify-center text-gray-500 dark:text-gray-400">
    <h2 class="text-gray-900 dark:text-gray-100">R. Weinstein</h2>
    <small class="text-lg">Doctor</small>
    <p class="text-xl">A pass issued to leave the Shanghai ghetto in 1945. <br />
      <span class="text-sm">JMP, Oral History Collection, No. 549 (copy)</span>
    </p>
    <h2 class="text-gray-900 dark:text-gray-100">Initially valid from <br />昭和 18 年 2 月 29 日</h2>
  </div>
  <div>
    <img src="/images/permission_spanish_synagoge.jpg" class="h-96 w-auto" />
  </div>
</div>

<!--
Last week, I traveled in the Jewish district in the old town. In the Spanish synagoge, I notice this history document.
A simple document provides lots of information with history context and sadness.

The document was initially valid from a major Chinese city 上海，and the validate date started from 昭和 18 
So what's the year? It was 1943. 

昭和 is a second previous Imperiall Era, which is still used in the official document for instance the date of birth. Like I'm.

Next year >>>>>
-->
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


<!--
It makes the calculation conditional, isn't it?
How do we manage to caculate the date? write switch case in the code?
There is a smarter way thanks to a Unicode project call, CLDR

Next slide >>>>>
-->
---

# Use CLDR to convert the date

The Unicode Common Locale Data Repository (CLDR)

<div class="pt-8">

```ts
new Date().toLocaleDateString('ja-JP-u-ca-japanese', { dateStyle: 'long' })
// '令和4年9月9日'
new Date().toLocaleDateString('zh-hant-u-ca-roc', { dateStyle: 'long' })
// '民國111年9月9日'
new Date().toLocaleDateString('th-u-ca-BE', { dateStyle: 'full' })
// 'วันศุกร์ที่ 9 กันยายน พ.ศ. 2565'

```
</div>

<!--
The Unicode Common Locale Data Repository help us calculate the date into a localized calendar.
Which is fantastic.

In PHP, it is also available with the intl class.

Next slide >>>>>
-->