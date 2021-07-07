---
title: "Page content"
metaTitle: "Page content"
metaDescription: ""
---

# JSON-based content
Page content can be created using Headers and Sections. Every header or section is built with micro-components that represent data type. The micro-components are the Angular-based templates that are responsible for displaying fields in the User Interface of Alfred and define the data type that user can put through the UI. Every section can contain as many fields as needed, defined in the settings in JSON format. It is possible to create totally new, custom micro-components, totally new - all depends on project needs. All of them are located in the `resources/cmsassets/_ng/templates/templates.tpl.html` and some of them got dedicated code located in `resources/cmsassets/_ng/directives/` folder.

# Content Structure
Content is section-based, so every content area is an array of sections. We assumed that the first section is always a header and the other ones are sections. This way the section template settings contain the „type” index that defines if it is a header or section and in which module. Example: we can create a new section template with `"type": "page-header"` and in the Pages module we can define that the chooseable headers can only come from `type = page-header`. This way in the dropdown of available headers in Pages module you can select only the proper headers.

# Lead
It is an additional field for content (saved as JSON) that normally you display on front page in places like news listing, blog listing, some single article description (like a lead). You can store any additional settings/info of single page really. Feel free to use it as you want.

# Preview and Live modes of content
Every page can be edited in Alfred first without immediate publishing required. As long as you edit some page and submit the changes via the ‚Save draft’ button, the data is being saved only into the ‚dev’ columns in the ‚pages’ table. If you click the „Publish” button, all the values (data) from „dev” columns are being copied to the non-dev columns, for example: `dev_title` to `title`, `dev_content` to `content`, `dev_meta_robots` to `meta_robots` and so on.

# Page Edit History / History Revision
Every time when you publish some page, there is also created a new record in the `pages_history` table that keeps the version of content. Every page has maximum 5 history revisions. This way, Alfred User is able to revert some page changes from the history (see the History Revision tab of some page in Alfred).

