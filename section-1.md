---
layout: intro-image
image: /images/dictionary-pisit-heng.jpg
---

<div class="hidden">
# ===== Translate with i18n =====
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute top-10">
  <h1>Translation in Drupal</h1>
  <p>translation and design</p>
</div>

<!--
background image: Photo by Pisit Heng on Unsplash
https://unsplash.com/photos/FQvadXmA524
-->

<!--
We all know Drupal has the well developed translation system that enable us to make the website well translated.

Next slide >>>>>
-->

---

# Translate with i18n

Content translation / Field translation

<img class="w-2/3" src="/images/2022-08-22-23-02-48.png" />

User Interface translation in Drupal
<!-- Configuration -->

![](/images/2022-08-22-22-58-40.png)

<!--
We can translated the node with field translation enabled.

We can translate many strings appear in the UI.

Next slide >>>>>
-->
---

# Translate with i18n

Translation in Twig

```twig
{# Test trans filter. #}
{{ 'Hello Earth.'|trans }}

{# Test trans tag with text content. #}
{% set body_text %}
  {% trans %}Read more at: {{ url }}{% endtrans %}
{% endset %}

{% set count = comments|length %}
{% trans %}
  {{ count }} comment was deleted successfully.
{% plural count %}
  {{ count }} comments were deleted successfully.
{% endtrans %}
```

<!--
To make string translatable, we can mark text in TWIG or PHP to be translatable with t() filter and function.

Next slide >>>>>
-->
---

# Translate with i18n

Translate a sentence with t() function and variables that allow us to place the var in alternative position

```php
  $sentence_translation = 
  t(
    'No crop types available. <a href="@link">Add crop type</a>.', // Sentence
    [ '@link' => $this->urlGenerator->generateFromRoute('crop.type_add'),] // Dynamic value
  );
```

<!--
It is also possible to use dynamic variable in a sentence, so we can cover different grammars in SVO or SOV order.

There is chance that we need a translation context, because a word could be verb or noun or has more than one meaning.

Next slide >>>>>
-->
---

# Translate with i18n

And translate with context

<div class="grid grid-cols-2">
  <div>
    <div>noun. as a section label: 連絡先</div>
      <img class="h-36 mt-4" src="/images/2022-09-21-20-08-11.png" />
  </div>
  <div>
    <div>verb. as an action: コンタクト</div>
      <img class="h-36 mt-4" src="/images/2022-09-21-18-28-37.png" />  
  </div>
</div>

```php
  $labels = [
    'contact_action' => $this->t('Contact', [], ['context' => 'As an action']),
    'contact_section' => $this->t('Contact', [], ['context' => 'As a section label']),
  ];
```



<!--
```json
//ja.po

msgctxt "As an action"
msgid "Contact"
msgstr "コンタクト"

msgctxt "As a section label"
msgid "Contact"
msgstr "連絡先"
```
-->


<!-- 
For example "Contact"
It will be translated into two different words in Japanese, as an action or as a section label.

Next slide >>>>>
-->
