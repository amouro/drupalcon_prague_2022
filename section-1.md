# Translate with i18n


1. User Interface translation in Drupal
<!-- Configuration -->

![](/images/2022-08-22-22-58-40.png)

---

# Translate with i18n

2. Content translation / Field translation
<img class="w-2/3" src="/images/2022-08-22-23-02-48.png" />

3. Translation in Twig

```twig
{# Test trans filter. #}
{{ 'Hello Earth.'|trans }}

{# Test trans tag with text content. #}
{% set body_text %}
  {% trans %}Read more at: {{ url }}{% endtrans %}
{% endset %}
```

---

# Translate with i18n

4. Translate a sentence with t() function and variables that allow us to place the var in alternative position
```php
  public function render() {
    $build = parent::render();
    $build['table']['#empty'] = t('No crop types available. <a href="@link">Add crop type</a>.', [
      '@link' => $this->urlGenerator->generateFromRoute('crop.type_add'),
    ]);
    return $build;
  }
```

<!-- We know how do we make multi-lang web site on Drupal -->
