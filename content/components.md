---
title: "Components"
metaTitle: "Components"
metaDescription: ""
---

Components are elements of a website managed out of typical section edit and **their content is saved as records in database tables**. Their main goal is to make them reusable in many other places on the website (e.g. the same content (such as logos) displayed in many sections across the whole website, managed in one place, saved as the database records. 

Components can be attached to sections through a “custom-component” microcomponent (please see the micro component’s description).

They do not have Save as Draft / Publish functions - everything that is saved / changed in some component is immediately visible on the website.

Alfred CMS has several ready types of components to use. Each of them can be easily adjusted to project needs (feel free to add new table columns, new fields, options etc.).

To enable a component type, you need to edit the `config/cms.php` configuration file. There is `"components"` section where you can add / remove component types. Based on the list, in Alfred, if you go to the Components module (left hand side menu) and go to add a new component, in the “Type” list you will see the available component types.

Backend of components for the Alfred panel can be managed in the `app/Cms/Modules/Components`. There is a business logic in them and feel free to edit that.

Frontend of components for Alfred panel can be managed in the `resources/cmsassets/_ng/Components`. Every component type has “create” and “edit” forms that you can change too!

To display component’s content on front page, in the section blade template, you need to call a specific facade responsible for component type. Business logic and methods that you can call from blade template level are visible in `app/Website/Services/ComponentService.php`.

## Example how to call a component facade
```
@if (!empty($components->people->id))
    {!! \Website\Component::people(
        $components->people->id, 
        'component-blade-template-name', 
        ['someExtraVariableAvailableInTemplate' => 'test']
    ) !!}
@endif
```

The `people()` method is located in the `app/Website/Services/ComponentService.php`. Please open the file and look through the methods - the method parameters are clear and easy to use. Of course feel free to modify them if you need.