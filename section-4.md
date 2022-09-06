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

