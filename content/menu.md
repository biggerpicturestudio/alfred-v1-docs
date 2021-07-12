---
title: "Menu"
metaTitle: "Menu"
metaDescription: ""
---

**Menu** module is needed to create and manage navigations on the front page website.

Every created menu in Alfred, in order to display its items on front page, needs to be set up in the code. By default, only top and footer menus are set up, however sometimes design requires adding more menus. To make the items from menus accessible in blade templates, you need to go to `App/Website/Services/Menus/MenusGlobalService.php` file and add new menu. Remember that the order of menus visible on the list in Alfred is important. Of course you need to go to Alfred --> Menu and add the menu(s) and their items in order to start displaying them on front page.

## Submenus
If on the design there is a menu element that after clicking reveals another submenu, in the Menu Settings you need to check the **Multi-level menuBB tickbox (this way it is possible to add submenu items per each main menu item). Please also use the non_clickable option (plain repo of Alfred shows an example in the code how to use it) if some main menu item’s purpose is only to reveal the submenu and does not have any URL specified.

## CSS classes
Sometimes in the menu design, you can see that menu items have different colour, some dedicated look - take a look at the example below on the screenshot (there is a green link):

<img src="/menu-extra-css-class.png" alt="Website menu and dedicate links - example." />

If the menu element from the HTML perspective differs to other menu items only with just CSS class, Alfred gives an ability to specify a list of available CSS classes in the Menu Settings that Alfred User can select per each menu item (feel free to edit it):

<img src="/menu-edit.png" alt="Ability to set CSS class per menu item." />

As soon as menu is saved, in single menu item, you can see that CSS class on the list:

<img src="/menu-edit-css.png" alt="Ability to set CSS class in a menu item." />

This way you can display the CSS class on front page if admin has selected the menu in Alfred for some specific menu item.

**Attention please:** on front page please remember to take care of all the possible to choose/set options in each menu items - 
for example if menu item has an option to set opening link in new tab - bring a support for it on front page!

## Menu implementation
The blade templates responsible for all the menus are located in: `cms-backend/resources/views/Menus`. Please manage the code of the menu over there!

## Example of menu implementation (no submenu)
```
@if (!empty($topMenu))
    <ul>
        @foreach ($topMenu as $menuItem)
            <li>
                <a
                    href="{{ $menuItem->url }}"
                    title="{{ $menuItem->name }}"
                    @if (!empty($menuItem->new_tab))
                        target="_blank"
                        rel="noopener noreferrer"
                    @endif>
                    {{ $menuItem->name }}
                </a>
            </li>
        @endforeach
    </ul>
@endif
```