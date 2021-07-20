---
title: "Website Theme"
metaTitle: "Website Theme"
metaDescription: ""
---

Website Theme is a library of designed & front-end coded elements that have to be reflected in Alfred CMS in order to allow Alfred Users to use them for example in Headers or Sections. **Re-usable front-end bits have to be connected to Alfred.**

# Website Theme elements 
The Website Theme elements that always have to be prepared by front-end developers before implementation in Alfred are:
- buttons
- section padding sizes
- container sizes
- colours and background colours
- headlines
- text/paragraph sizes
- ordered/unordered lists (&lt;ul&gt;, &lt;ol&gt;)
- forms and their fields

# Examples of design that shows the website theme elements:
- **Headlines and paragraph sizes**: https://xd.adobe.com/view/9ced43b3-7be0-4224-b872-d8f57f717d4d-c9be/
- **Colours and background colours**: https://xd.adobe.com/view/9ced43b3-7be0-4224-b872-d8f57f717d4d-c9be/screen/9cf7927b-56a0-4551-9779-975981d16532/
- **Buttons**: https://xd.adobe.com/view/9ced43b3-7be0-4224-b872-d8f57f717d4d-c9be/screen/b2ccd204-edd5-4eff-b06c-927911aaf100/
- **Forms**: https://xd.adobe.com/view/9ced43b3-7be0-4224-b872-d8f57f717d4d-c9be/screen/720132c0-c863-49d0-8dc4-94eecaf9f7ad/
- **Container sizes, section padding sizes** https://xd.adobe.com/view/9ced43b3-7be0-4224-b872-d8f57f717d4d-c9be/screen/6ff52ff2-fa5c-4899-9002-6a1970d7bdcd/

Front-end developer should code all the elements and an example of the coded elements you can find here: https://haiken.bigpic.dev/theme.html. This kind of theme library should be prepared by front-end developer before any Alfred implementation.

# How to get started with Website Theme implementation
Please follow the below steps in order to get the Website Theme implementation done in Alfred.

# 1. Buttons
Edit the `config/theme.php` file and find `buttons` array where there should be a list of all available button styles.

```
    'buttons' => [
        'btnStyles' => [
            0 => 'btn btn--css-class-1',
            1 => 'btn btn--css-class-2',
            2 => 'btn btn--css-class-3',
        ],
    ]
```

**Go to the provided HTML code of your project's theme and find the button styles. All the button variants (and their CSS classes) have to have their reflection in this array.**

### Example
In this example of theme buttons (https://haiken.bigpic.dev/theme.html), there are button variants as below:
<img src="/theme-buttons.png" alt="Theme buttons" />

In order to get them implemented, add the button variants' CSS classes in the `config/theme.php`, looking at the front-end HTML code of them. 

**See the example below:**
```
    'buttons' => [
        'btnStyles' => [
            0 => 'btn btn--primary',
            1 => 'btn btn--primary btn--black',
            2 => 'btn btn--secondary',
            3 => 'btn btn--secondary btn--white',
        ],
    ]
```

Next step is to make them visible in the **Buttons microcomponent**.

Go to `cmsassets/_ng/directives/templates/buttons.tpl.html` and edit the code responsible for displaying the button style list, following the options you have just set up in the config file. 

**See the example below:**

```
    <label>Appearance:</label>
    <select class="form-control" ng-model="row.css">
        <option value="">Primary, light brown</option>
        <option value="1">Primary, black</option>
        <option value="2">Secondary, black</option>
        <option value="3">Secondary, white</option>
    </select>
```

**The default button style on this list should always have an empty value** (and in `theme.php` that default button style should be under the **0** array index)! All the other button variants and their values in this &lt;select&gt; should be exactly the same as the index numbers in the `config/theme.php`.

If you are not sure about the button styles that should be presented in Alfred, consult it with designer and/or front-end developer.

Once this is all done, in Alfred, if you create a header or section that uses the Buttons microcomponent, the button variants should be visible as below:

<img src="/theme-buttons-alfred-example.png" alt="Example of buttons microcomponent after editing" />

**Please always add some button(s) and test them on the front page in terms of the selected appearance style. Make sure it matches the original design/front-end code on the website.**

Sometimes the button's HTML code (because of custom design) requires special HTML changes. If this is the case in your project, just go to button template - `resources/views/Website/Templates/button.blade.php` - (used on front page of the website) and adjust the code it as you wish.

# 2. Section padding sizes
Section padding sizes (top and bottom) should be created in the front-end code, using a CSS class naming convention as below:
- `.section--p-extra-small-top`
- `.section--p-large-bottom`
- `.section--p-none-bottom`
- and so on...

If we have a design that requires section padding sizes as below...

<img src="/theme-section-padding-sizes.png" alt="Section padding sizes" />

... those options have to exist in **Section Settings** microcomponent, see an example below:

<img src="/theme-section-padding-sizes-in-alfred.png" alt="Section Settings and the padding sizes" />

&nbsp;

In order to get them implemented, start from editing the `config/theme.php` and find the array of padding size list under the `paddings` array index.

**See the example below:**

```
    'paddings' => [
        1 => 'section--p-extra-small-',
        2 => 'section--p-small-',
        3 => 'section--p-large-',
        4 => 'section--p-extra-large-',
        5 => 'section--p-none-',
    ],
```

Again, the padding sizes should be selectable in Alfred, in the **Section Settings**, so please go to `cmsassets/_ng/Pages/pages-section-settings-modal.tpl.html` and find the **Padding top** and **Padding bottom**. Edit the &lt;select&gt; lists and include the correct names from your project's theme and assign the values that come from array index numbers from the config file.

**See the example below:**

```
    <select 
        class="form-control" 
        ng-model="sectionModal.section.components[sectionModal.sectionKey].padding_top"
        name="padding_top">
        <option value="5">No padding</option>
        <option value="1">Extra small</option>
        <option value="2">Small</option>
        <option value="">Medium (default)</option>
        <option value="3">Large</option>
        <option value="4">Extra large</option>
    </select>
```

**Remember: the default padding size should get an empty value!** This way, on front page, none CSS class will be returned in the section class attribute and the correct front-end sizing should be just properly done by front-end developer in the front-end code. `.section` should get the default top/bottom padding as per design and it is front-end developer's responsibility to get it done correctly.

**Please always select some padding sizes and test them on the front page in terms of the selected option. Make sure it matches the original design/front-end code on the website.**