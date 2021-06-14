---
title: "Database"
metaTitle: "Database"
metaDescription: ""
---

Alfred uses MySQL relational database.

The main database table that the whole website and its pages is based on, is the **pages** table. There are records that represent each and every page. Every content module such as Pages, Blog, Resources and so on also have their own „0-records” in that database table - their parent_id is 0. So if you add some page into module like Pages, you create a record in **pages** table with `parent_id` equal the module id in the pages table.

It is possible to create a tree of pages or page categories - it is all based on `parent_id` value in the **pages** table.

Alfred CMS allows to create multi-language websites (in the languages database table there are specified available languages; you can manage them via Alfred CMS panel in the Settings --> Languages section). Every page created in CMS is assigned to one language (`language_id` column in the pages database table).

In Alfred’s database you can see tables such as:
- **component_*** responsible for the Components, users, users_groups and their authentication;
users, users_groups, groups, activations, persistences, throttle, throttle_sentinel, password_resets tables responsible for users, their privileges and security features such as throttling. Please see Sentinel documentation mentioned in the Authentication & Authorisation section;
- **pages**, **pages_history**, **pages_categories**, **pages_categories_history**, **sections**: these tables are the most important tables in Alfred because are responsible for all the front pages;
- **menus**, **menu_items**: tables responsible for website menu(s);
- **settings**: every record is responsible for single setting - it can be some phone number, email address, some universal texts that you can see across all pages etc.; In that table there are settings saved within Partials and Settings Alfred modules;
- **redirects**: responsible for the Redirects module;
other tables that depend on project requirements.
