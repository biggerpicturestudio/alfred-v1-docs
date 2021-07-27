---
title: "Imgix"
metaTitle: "Imgix"
metaDescription: ""

---

# What is Imgix?
[Imgix](https://imgix.com/) is a 3rd party image processing provider that transforms, optimizes and intelligently caches images, using simple and robust URL parameters. Images are being served under dedicated Imgix subdomain, over CDN. 

Images can be hosted on your server or on special external static assets hosting (for example AWS S3). Imgix will download them (in specified variations based on the URL parameters) and will serve them under chosen by yourself subdomain. Please go to [Imgix website](https://imgix.com/) to learn more.

# Concept
Alfred has been engineered with the front-end performance in mind. Optimised images are the key to performant, fast website. **All the content images (in sections, blog posts, news etc.) have to be always embedded with Imgix on Alfred-based websites.** That's why this integration has been added to code repository by default.

# What does the Imgix integration contain?
- ability to set up responsive image sets (their sizes between specific viewport breakpoints)
- ability to return in HTML responsive picture-images `<picture>`
- ability to return in HTML responsive background images
- ability to lazy load them
- automatic, global adding image URL parameters

## Setting up image sets
In the `cms-backend/config/srcset-settings.php` (**section_settings**) you can specify image sets. Feel free to create as many of them as you and your project needs.

**Example of image set config:**
```
    'full-width-image' => [
        [567, 567, null],
        [767, 767, null],
        [1023, 1023, null],
        [1365, 1365, null],
        [1599, 1599, null],
        [1919, 1919, null],
        [2550, 2550, null],
        [null, 2550, null],
    ],
```

You may ask now what all those 3 elements of single array mean:
```
[567, 567, null]
```

- **First value** is the max-width breakpoint value (example: `media="(max-width: 567px)"`)
- **Second & third one** is the image size - width and height - that should be loaded in the breakpoints range (it adds `w=` and `h=` parameters to the image URL; if width or height is not specified - param is not being added).

This example of picture set configuration above will return in HTML following code:
```
<picture class="aspect" style="--width: 5031; --height: 2598">
    <source srcset="https://example.imgix.net/storage/uploads/image.jpg?w=567&amp;fit=crop&amp;crop=faces,edges&amp;auto=format&amp;q=90&amp;fm=png" media="(max-width: 567px)">
    <source srcset="https://example.imgix.net/storage/uploads/image.jpg?w=767&amp;fit=crop&amp;crop=faces,edges&amp;auto=format&amp;q=90&amp;fm=png" media="(max-width: 767px)">
    <source srcset="https://example.imgix.net/storage/uploads/image.jpg?w=1023&amp;fit=crop&amp;crop=faces,edges&amp;auto=format&amp;q=90&amp;fm=png" media="(max-width: 1023px)">
    <source srcset="https://example.imgix.net/storage/uploads/image.jpg?w=1365&amp;fit=crop&amp;crop=faces,edges&amp;auto=format&amp;q=90&amp;fm=png" media="(max-width: 1365px)">
    <source srcset="https://example.imgix.net/storage/uploads/image.jpg?w=1599&amp;fit=crop&amp;crop=faces,edges&amp;auto=format&amp;q=90&amp;fm=png" media="(max-width: 1599px)">
    <source srcset="https://example.imgix.net/storage/uploads/image.jpg?w=1919&amp;fit=crop&amp;crop=faces,edges&amp;auto=format&amp;q=90&amp;fm=png" media="(max-width: 1919px)">
    <source srcset="https://example.imgix.net/storage/uploads/image.jpg?w=2550&amp;fit=crop&amp;crop=faces,edges&amp;auto=format&amp;q=90&amp;fm=png" media="(max-width: 2550px)">
    <img width="5031" height="2598" src="https://example.imgix.net/storage/uploads/image.jpg?w=2550&amp;fit=crop&amp;crop=faces,edges&amp;auto=format&amp;q=90&amp;fm=png" alt="Some alt text">
</picture>
```

Please analyse the configuration and HTML code that has been returned using that.

# Image vs background image
On the [Code Snippets](/code-snippets) page (or in the **Code Snippets** section below), you can find several useful, ready-to-copy-and-paste code examples of Imgix responsive image or background images implementation for your headers/sections/pages. It is incredibly essential to recognise when to use which way of image/background loading.

If you have to embed background or simple image in the Above The Fold area on website (for example in the header), please always use the code snippet that **does not lazy load them.**

All the sections that are placed Below The Fold **should always be lazy loaded.**

# Code snippets (implementation examples)
### Example of a responsive image (without lazy loading) - for example for headers!
Please remember to embed images in every header without lazy loading!

```
@if (!empty($components->image))
    {!! Imgix::imageCustom
        (
            $components, 
            'image', /* key of $components object under which there is path to image saved */
            'image_alt', /* alt text (can be any other key from $components) */
            'full-width-image', /* key from config/srcset-settings.php -> section_settings */
            '', /* specify CSS class added to <img> if needed */
            'image-no-lazy', 
            [
                'preloadImageOfIndex' => [0] /* image's index (from image sourceset within config/srcset-settings.php) that should be preloaded */
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
            'image', /* key of $components object under which there is path to image saved */
            'image_alt', /* alt text (can be any other key from $components) */
            'full-width-image', /* key from config/srcset-settings.php -> section_settings */
            '', /* specify CSS class added to <img> if needed */
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
            'image', /* key of $components object under which there is path to image saved */
            'image_alt', /* alt text (can be any other key from $components) */
            'full-width-image', /* key from config/srcset-settings.php -> section_settings */
            '', /* specify CSS class added to <img> if needed */
            'image-aspect'
        ) 
    !!}
@endif
```

### Example of a responsive background image (without lazy loading) - for example for headers!

```
@if (!empty($components->bg_image))
    @php
        $sectionID = 'header-' . (!empty($sectionIndex) ? $sectionIndex : '0') . '-' . time(); /* feel free to amend this section ID as you want */
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
        $sectionID = 'section-' . (!empty($sectionIndex) ? $sectionIndex : '0' ) . '-' . time(); /* feel free to amend this section ID as you want */
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

### Example of returning a single image (out of responsive image set) through Imgix domain
```
{!! Imgix::getSingleURL($components->some_path_to_file) !!}
```


# How to get started with Imgix to implement images/background images in sections?
1. Read the HTML code prepared by front-end developer that should contain the picture set, specific width/height of them between particular breakpoints. Example how it may look like:
```
<picture>
    <source data-srcset="/images/tmp/triangle-commodities-desktop-right.png?w=450" media="(max-width: 500px)" >
    <source data-srcset="/images/tmp/triangle-commodities-desktop-right.png?w=1000" media="(max-width: 1200px)">
    <img class="media-frame__media lazy" data-src="/images/tmp/triangle-commodities-desktop-right.png?w=2000" width="462" height="445" alt="">
</picture>
```
2. Prepare image set configuration in `cms-backend/config/srcset-settings.php`. Create a new index name (ideally if the name describes this image type per section type) and take the breakpoint, width/height values from HTML code and copy over into the config set. Example:
```
    'section-50-50-image' => [
        [500, 450, null],
        [1200, 1000, null],
        [null, 2000, null],
    ],
```
3. Identify what it is - is it an image (`<picture>`) or background image? Based on the answer, find the right [code snippet](/code-snippets).
4. Make sure that all the specific CSS classes added to `<picture>` are reflected in your implementation. Example:
```
@if (!empty($components->image))
    {!! Imgix::imageCustom
        (
            $components, 
            'image', /* key of $components object under which there is path to image saved */
            'image_alt', /* alt text (can be any other key from $components) */
            'section-50-50-image', /* key from config/srcset-settings.php -> section_settings */
            'media-frame__media', /* specify CSS class added to <img> if needed */
            'image'
        ) 
    !!}
@endif
```

Please analyse the example above with the configuration set from the point 2.

# Global Imgix URL parameters settings
In Alfred, in the **Settings -> Website Settings -> IMGIX Default Settings**, you can find settings that will be reflected in automatically added image URL parameters each time when you use the Imgix facade in your blade templates.

**Recommended settings:**
- **Fit:** Crop
- **Output Quality:** 90
- **Auto:** Format (with **Force png extension** option enabled)
- **Crop mode:** Faces, Edges

**Example:**
```
https://example.imgix.net/storage/uploads/image.jpg?w=1919&fit=crop&crop=faces,edges&auto=format&q=90&fm=png
```

Please go to [Imgix website](https://imgix.com/) to learn more what those parameters and the values mean. Of course feel free to adjust them if you want.