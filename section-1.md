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
-->

---

# Translate with i18n

Content translation / Field translation

<img class="w-2/3" src="/images/2022-08-22-23-02-48.png" />

User Interface translation in Drupal
<!-- Configuration -->

![](/images/2022-08-22-22-58-40.png)

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

---

# Translate with i18n

Translate a sentence with t() function and variables that allow us to place the var in alternative position

```php{all|2-5|7-10}
  $sentence_translation = 
  t(
    'No crop types available. <a href="@link">Add crop type</a>.', // Sentence
    [ '@link' => $this->urlGenerator->generateFromRoute('crop.type_add'),] // Dynamic value
  );

  $labels = [
    'contact_action' => $this->t('Contact', [], ['context' => 'As an action']),
    'contact_section' => $this->t('Contact', [], ['context' => 'As a section label']),
  ];
```


```json
//ja.po

msgctxt "As an action"
msgid "Contact"
msgstr "コンタクト"

msgctxt "As a section label"
msgid "Contact"
msgstr "連絡先"
```



<!-- We know how do we make multi-lang web site on Drupal -->
