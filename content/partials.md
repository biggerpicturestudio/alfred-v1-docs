---
title: "Partials"
metaTitle: "Partials"
metaDescription: ""
---

The Partials module is based on the `settings` table in the database. Whichever fields you create in that module, it will automatically be created in the settings table. 

**Example: you need to create a textarea field that will be used for the copyright text in the footer.** So the only one thing you need to do is to create the field with some unique field name (such as „copyright_text”) in the Partials module in the HTML and then just save some data through that field. Then on front page you should just display the text using the `$settings` dataset variable using that index (for example `$settings['copyright_text']`).