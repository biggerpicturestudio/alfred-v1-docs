---
title: "Code Snippets"
metaTitle: "Code Snippets"
metaDescription: ""
---

Here you can find useful code snippets, ready to be pasted in Alfred-based websites. Bear in mind that custom project that required special changes might make the code snippets slightly invalid but feel free to change them to make them working in any project.

# 1. Section implementation

### Example of section configuration (JSON)
This example shows a full demo of section fields that use different, useful micro-components, helpful for Alfred Users to manage content. Feel free to copy & paste it in your project and just amend the configuration to bring the best UI in order to edit section in as easy as possible way.

```
{
    "name": "Section name here",
    "type": [
        "page"
    ],
    "group": "special",
    "components": {
        "settings": {
            "order": 1,
            "type": "section-modal",
            "modal_type": "section-settings",
            "label": "Settings"
        },
        "header": {
            "order": 2,
            "type": "section-modal",
            "modal_type": "content-insertion",
            "label": "Header"
        },
        "bg_colour": {
            "order": 3,
            "type": "bg-colours",
            "label": "Background colour"
        },
        "headline": {
            "order": 4,
            "type": "input",
            "label": "Headline"
        },
        "headline_colour": {
            "order": 5,
            "type": "custom-color",
            "label": "Headline colour"
        },
        "text": {
            "order": 6,
            "type": "tinymce",
            "label": "Text"
        },
        "btns": {
            "order": 7,
            "type": "btns",
            "label": "Buttons"
        },
        "image": {
            "order": 8,
            "type": "image",
            "label": "Image"
        },
        "is_some_setting_checked": {
            "order": 9,
            "type": "checkbox",
            "label": "Some setting"
        },
        "video": {
            "order": 10,
            "type": "video",
            "label": "Video"
        },
        "video_rwd": {
            "order": 11,
            "type": "video",
            "label": "Responsive video"
        },
        "plain_text": {
            "order": 12,
            "type": "textarea",
            "label": "Plain text"
        },
        "form": {
            "order": 13,
            "type": "form-selection",
            "label": "Form"
        },
        "footer": {
            "order": 14,
            "type": "section-modal",
            "modal_type": "content-insertion",
            "label": "Footer"
        },
        "section_anchor": {
            "order": 15,
            "label": "Section anchor",
            "type": "input"
        }
    }
}
```

### Example of section blade template implementation
```
<section 
    class="
        section 
        @include('Website.Sections.columns-sections-partials.section-settings')
    "
    @include('Website.Templates.section-anchor-id')>
    
    @include('Website.Sections.columns-sections-partials.background')

    @include('Website.Sections.columns-sections-partials.overlay')

    <div class="@include('Website.Sections.columns-sections-partials.container-settings')">

        @if (!empty($components->headline))
            <h2 class="headline-2">
                {{ $components->headline }}
            </h2>
        @endif

        @if (!empty($components->text))
            {!! $components->text !!}
        @endif

        @if (!empty($components->btns))
            @foreach($components->btns as $button)
                {!! HTML::button($button) !!}
            @endforeach
        @endif

    </div>
</section>
```

# 2. Header implementation

### Example of header configuration (JSON)

This header shows an example of configuration. It is just a demo so feel free to amend it as your project requires it!

```
{
    "name": "Header name here",
    "type" : [
        "page-header",
        "homepage-header"
    ],
    "components": {
        "bg_colour": {
            "order": 1,
            "type": "bg-colours",
            "label": "Background colour"
        },
        "headline": {
            "order": 2,
            "type": "input",
            "label": "Headline",
            "cms_width": 8
        },
        "headline_colour": {
            "order": 3,
            "type": "text-colours",
            "label": "Headline colour",
            "cms_width": 4
        },
        "text": {
            "order": 4,
            "type": "tinymce",
            "label": "Text"
        },
        "form": {
            "order": 5,
            "type": "form-selection",
            "label": "Form"
        },
        "section_anchor": {
            "order": 6,
            "label": "Section anchor",
            "type": "input"
        }
    }
}
```

### Example of header blade template implementation

```
<header 
    class="
        l-header 
        {{ HTML::backgroundColour($components, 'bg_colour') }}
    "
    @include('Website.Templates.section-anchor-id')>

    <div class="container">
        @if (!empty($components->headline))
            <h1 class="headline-1">
                {{ $components->headline }}
            </h1>
        @endif

        @if (!empty($components->text))
            {!! $components->text !!}
        @endif

        <div class="@include('Website.Form-templates.block-bg-colour')">
            @include('Website.Form-templates.section-form')
        </div>
    </div>

</header>
```

# 3. General, useful code snippets

### To return a CSS class of background colour
```
{{ HTML::backgroundColour($components, 'bg_colour') }}
```

### To return a container CSS class name
```
@include('Website.Sections.columns-sections-partials.container-settings')
```

### To return a CSS class responsible for text colour
```
{!! HTML::fontColour($components, 'headline_colour') !!}
```

### Example of a responsive video embed

```
@if (
    !empty($components->video_desktop) ||
    !empty($components->video_414) ||
    !empty($components->video_768) ||
    !empty($components->video_1024)
)
    <video 
        class="js-video-src-rwd" 
        autoplay 
        loop
        muted

        @if (!empty($components->video_desktop))
            data-desktop="{!! Imgix::getSingleURL($components->video_desktop, 'w=768') !!}"
        @endif

        @if (!empty($components->video_414))
            data-414="{!! Imgix::getSingleURL($components->video_414) !!}"
        @endif

        @if (!empty($components->video_768))
            data-768="{!! Imgix::getSingleURL($components->video_768) !!}"
        @endif

        @if (!empty($components->video_1024))
            data-1024="{!! Imgix::getSingleURL($components->video_1024) !!}"
        @endif
    >
        @if (!empty($components->video_desktop))
            <source data-src="{!! Imgix::getSingleURL($components->video_desktop) !!}" type="video/mp4">
        @endif
    </video>
@endif
```

### To return a form
```
<div class="@include('Website.Form-templates.block-bg-colour')">
    @include('Website.Form-templates.section-form')
</div>
```

### Example of a responsive image (without lazy loading) - for example for headers!
Please remember to embed images in every header without lazy loading!

```
@if (!empty($components->image))
    {!! Imgix::imageCustom
        (
            $components, 
            'image', // key of $components object under which there is path to image saved
            'image_alt', // alt text (can be any other key from $components)
            'full-width-image', // key from config/srcset-settings.php -> section_settings
            '', // specify CSS class added to <img> if needed
            'image-no-lazy', 
            [
                'preloadImageOfIndex' => [0] // image's index (from image sourceset within config/srcset-settings.php) that should be preloaded
            ]
        ) 
    !!}
@endif
```

### Example of a responsive image (with lazy loading) - for example for sections!
Please remember to embed image in every section with lazy loading!

```
@if (!empty($components->image))
    {!! Imgix::imageCustom
        (
            $components, 
            'image', // key of $components object under which there is path to image saved
            'image_alt', // alt text (can be any other key from $components)
            'full-width-image', // key from config/srcset-settings.php -> section_settings
            '', // specify CSS class added to <img> if needed
            'image'
        ) 
    !!}
@endif
```

### Example of a responsive image (with lazy loading) - for example for sections, with aspect ratio
Please remember to embed image in every section with lazy loading! This example adds additional `style="--width: xxx; --height: yyy"` attribute to `<picture>` that is responsible for reserving space for lazy loaded image.

```
@if (!empty($components->image))
    {!! Imgix::imageCustom
        (
            $components, 
            'image', // key of $components object under which there is path to image saved
            'image_alt', // alt text (can be any other key from $components)
            'full-width-image', // key from config/srcset-settings.php -> section_settings
            '', // specify CSS class added to <img> if needed
            'image-aspect'
        ) 
    !!}
@endif
```

### Example of a responsive background image (without lazy loading) - for example for headers!

```
@if (!empty($components->bg_image))
    @php
        $sectionID = 'header-' . (!empty($sectionIndex) ? $sectionIndex : '0') . '-' . time(); // feel free to amend this section ID as you want
        $imgixBackgroundStyle = Imgix::imageBackground($components, 'bg_image', 'full-width-image', ['sectionID' => $sectionID]);
    @endphp

    @include('Website.Templates.imgix.style-tag-traditional', ['noHeight' => true, 'preload' => ['preloadImageOfIndex' => [0]]])

    <div id="{{ $sectionID }}">
        <!-- the code below (imageCustom()) is an example of placing hidden image in this layer and is not obligatory to be used for responsive image backgrounds!) -->
        {!! Imgix::imageCustom($components, 'bg_image', 'bg_image_alt', 'full-width-image', 'hidden', 'image-no-lazy') !!}
    </div>
@endif
```


### Example of a responsive background image (with lazy loading) - for example for sections!

```
@if (!empty($components->bg_image))
    @php
        $sectionID = 'section-' . (!empty($sectionIndex) ? $sectionIndex : '0' ) . '-' . time(); // feel free to amend this section ID as you want
        $imgixBackgroundStyle = Imgix::imageBackground($components, 'bg_image', 'full-width-image', ['sectionID' => $sectionID]);
    @endphp

    <div
        class="lazy"
        id="{{ $sectionID }}"
        @include('Website.Templates.imgix.style-tag', ['noHeight' => true])>
        <!-- the code below (imageCustom()) is an example of placing hidden image in this layer and is not obligatory to be used for responsive image backgrounds!) -->
        {!! Imgix::imageCustom($components, 'bg_image', 'bg_image_alt', 'semi-full-width-image', 'hidden', 'image') !!}
    </div>
@endif
```

### Example of returning a single image through Imgix domain
```
{!! Imgix::getSingleURL($components->some_path_to_file) !!}
```

### Example of buttons implementation

```
@if (!empty($components->btns))
    @foreach($components->btns as $button)
        {!! HTML::button($button') !!}
    @endforeach
@endif
```

### Example of returning encoded email address
Please use this method wherever you want to display email address - it encodes it to HTML entites, making it slightly more difficult for spam bots to be grabbed!

```
{!! HTML::encode($variableWithEmail) !!}
```

### Example of returning phone number
If in Alfred there is a field to put a phone number, Alfred Users most probably add it with spaces, example: `0800 003 444`. If you put this number to HTML `<a>` tag with `href="tel:0800 003 444`, it makes the phone number dialled incorrectly. To make it valid, there cannot be any spaces and this is what the following code snippet is for. It will produce the phone number as this: `href="tel:0800003444`.

```
<a href="tel:{{ HTML::phone($variableWithPhone) }}">
    {{ $variableWithPhone }}
</a>
```
