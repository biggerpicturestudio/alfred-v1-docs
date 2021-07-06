---
title: "Microcomponents"
metaTitle: "Microcomponents"
metaDescription: ""
---

In the ***cmsassets/_ng/templates/templates.tpl.html*** there are all microcomponents that can be used across section type JSON settings. Every field in any section has a `type` property and has its reflection of some microcomponent ID. 

Example: if you want to add an input field in a section, the type should be *input* and it is an `input` microcomponent from ***cmsassets/_ng/templates/templates.tpl.html***. 

# Default microcomponents

## input
It is a text-only field, perfect to be used for headlines or other **one-line text** areas on website.

#### Preview:
<img src="/microcomponent-input.png" alt="Microcomponent: input" />

#### JSON configuration example
```
"some_field": {
    "order": 1,
    "type": "input",
    "label": "Some field's label here"
}
```

#### Example of implementation in a section
```
@if (!empty($components->some_field))
    <h1>{{ $components->some_field }}</h1>
@endif
```

<hr />