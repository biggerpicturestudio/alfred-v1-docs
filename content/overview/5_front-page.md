---
title: "Front Page"
metaTitle: "Front Page"
metaDescription: ""
---

The brain of the whole system is the `Website/RouteController.php`. It is the main controller that during the page loading the system has to go through it. Please go to Website routes section to understand it. The Alfred brain takes the page that needs to be displayed and based on the settings saved in the **pages** table, decides which PHP service should be called. In the service you have the total freedom - anything you need to create (like custom PHP methods to make some custom operations) you can create over there. From the service you also return the view (blade file) that is responsible for displaying front page.

**BaseService** —> every module service extends the Base Service that contains a lot of useful ready methods.

Important part or rendering the page is also LayoutBuilder. It passes variables needed on each page. LayoutBuilderService has an array of required properties and in assigning variables method it goes through each value and calls method `get<PropertyNameInCamelCase>()` of `LayoutParameters` class. After that in `$layout` variable we have all data that were present in required properties array.
