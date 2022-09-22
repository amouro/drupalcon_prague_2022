---
layout: intro-image
image: /images/cjk-cover-left.png
#layout: 3-images
#imageLeft: images/cjk-cover-left.png

imageTopRight: images/cjk-cover-right-top.png
imageBottomRight: images/cjk-cover-right-bottom.png
---

<div class="hidden">
# ===== Issue in CJK: Typing =====
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
Let's focus on CJK world closer.

It is easy to type latin alphabets on keyboard, how does words being typed in CJK?

Next slide >>>>>

-->
---

# Autocomplete search suggestion

What can you see?

<video controls>
  <source src="/images/SyI343.mp4" type="video/mp4" />
</video>

<!--  
This is a short clip shows how we can type the autocompleted search keywords in Japanese

- Input Chinese or Japanese Kanji consists of one to four phonetic elements
- Same pronouciation could have more than one words

The main issue here is the autocompletd triggers the search too early before the word has been chosen or the typing is finished.

Next slide >>>>>
-->

---

# CJK Paragraph

<hr />

<div class="grid grid-cols-3 gap-4 items-start text-sm mt-4">
<div>

## 我是 COVID-19 確診個案，應該要注意甚麼:

大部分的 COVID-19 感染者症狀輕微，休養後即可自行康復，為了將醫療資源留
給重症患者，請您先留在家中不要離開，等候公衛人員通知。

務必觀察自身症狀變化，若出現以下症狀時，請立即通知所在地政府衛生局或撥打
119 就醫，以 119 救護車為原則或指示之防疫計程車、同住親友接送或自行前往
(如步行、 自行駕/騎車)等方式為輔：喘、呼吸困難、持續胸痛、胸悶、意識不清、
皮膚或嘴唇或指甲床發青。
</div>
<div>

## 보건소에서 코로나19 양성 통보를 받았다면, 이렇게 하세요

검체채취일로부터 7일까지는 타인에게 바이러스를 전염시킬 위험이 있어 격리합니다.
오미크론 변이는 델타 변이보다 중증도가 낮으므로 증상이 없거나 경증인 경우 해열제, 감기약 복용 등 대증치료로 회복할 수 있습니다. [코로나19와 오미크론 변이] 바로가기

발열 등 증상으로 진료가 필요하면, 외래진료센터 대면진료 또는 전화 상담·처방이 가능합니다.
감염전파 방지를 위해 외출하지 말고 가급적 집에 머무르며, 화장실‧물건 등은 동거인과 따로 사용하고 자주 소독해야 합니다.[청소와소독] 바로가기

</div>
<div>

## 新型コロナウイルス感染症、症状がある方はためらわずに連絡を！

宿泊療養・自宅療養者アンケート調査によって、世代を問わず多くの方が、コロナ感染が判明する前から、
【発熱、頭痛、体のだるさ、せき、のどの痛み】といった自覚症状を訴えていたことがわかりました。

これらの症状を複数感じ、不安に思ったときは、どうぞためらわず、「かかりつけ医・身近な医療機関」や「発熱相談センター」へご連絡、ご相談ください。
</div>
</div>

<!--
These are pagragraphs in CJK about 
What to do if you receive a positive COVID-19 notification from a public health center

You can see the paragraph rarely has spaces in the sentence.
(We use kuromoji when we index the data in Elastice search to get the text indexed and split into words correctly.)

Next slide >>>>>
-->
---

# Input method

<div class="grid grid-cols-4 gap-2 items-end">
    <div>
        <img src="/images/2022-09-09-14-35-49.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-36-35.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-44-38.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-46-18.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-39-25.png" />
    </div>
    <div class="col-span-2">
        <img src="/images/2022-09-09-14-41-00.png" />
    </div>

</div>

<!--
How do we type, what's our keyboards look like?

From left to right, we see two Traditional Chinese keyboard with 倉頡 and then 注音
And there are two Korean keyboard layout and two Japanese layout on in mobile with a 3by3 grid or a comapct keyboard layout which has the 50 essential sound characters.

Next slide >>>>>
-->

---

# Input method

| Keyword      | Segments      | Segments |
| ------------ | ------------- | -------- |
| Computer | | 8 |
| コンピューター (konpyūtā)| kon pyu- ta- | 10 |
| 電腦 (diànnǎo) | ㄉ一ㄢˋ ㄋㄠˇ | 7 |
| 计算机 (jìsuànjī)| jisuanji / jsj | 8 / 3 |

<!--
When type the word for computer, the key strokes are also different.

It is also different term in Traditional Chinese use in Taiwan or Simplified Chinese in China.

When entering CJK text, we would like to wait until the word
is entered. This can be done using a set of special Javascript events.

Next slide >>>>>

-->

---

# Autocomplete search suggestion

What is <span class="bg-green-300 p-1">improved</span>?

<video controls>
  <source src="/images/vjS5Xr.mp4" type="video/mp4" />
</video>
<!-- Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
-->

<!--

The english typing works normally, and the Japanese word for Corona, only query once the word is decided.

Next slide >>>>>
-->

---

# CompositionEvent 

Implement `CompositionEvent` to avoid trigger search too early.

<div class="grid grid-row-2 grid-col-2 gap-2">
<div>

```javascript {all|7-11|2-3|2-5}
  inputElement.on('input, compositinoend', function (event) {
    if (event.type == 'compositionend') { compositionActive = false; }
    if (compositionActive) { return; }

    //...do autocomplete AJAX call
    
  }).on('compositionstart', function () {
    compositionActive = true;
  }).on('compositionupdate', function() {
    compositionActive = true;
  })
```
</div>
<div>

[MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)

[Core #2823589: Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
</div>
<iframe class="col-span-2 bg-blue-600/30 p-4 w-full" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/compositionstart_event/_sample_.live_example.html" width="960" height="480"></iframe>


</div>


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

There is CompositionEvent that we can use to detect the correct moment of the finish of the input.
(RIGHT >>>)

We treat the compositionupdate and start as typing in progress (RIGHT >>>)

And when the word is decided, there will be a compositionEnd event and we can started to (RIGHT >>>) trigger the query with AJAX

Phew...

Next slide >>>>>
-->


