---
title: "Routing"
metaTitle: "Routing"
metaDescription: ""
---

In order to understand how the routing of CMS and website works, you should open the `app/Http/routes.php` file first.

## CMS routes
All the routes within a route groups with `cms/auth` and `cms` prefix are responsible for the **/cms** (CMS) admin panel. There are routes responsible for the specific API endpoints that call controllers within modules. Every time when you want to investigate what some CMS API endpoint does, you should go to the `routes.php` file and look which controller is called and what kind of HTTP methods it uses. 

## Website routes
All the routes that are responsible for the website (front page) are created dynamically within CMS and are saved in the `pages` database table. If you see custom URLs like **/about-us**, **/en-us/meet-the-team**, **/news**, **/news/some-category** etc. it means these are created via CMS. All the routes call the `RouteController` (**runlivePage()** method) that calls a different, specific per module service, responsible for displaying a page in a template.

The route rule responsible for that is as below:

```
$router->get('{language?}{slug}', [
   'middleware' => ['alfredRedirect'],
   'as' => 'website.page',
   'uses' => 'Website\Controllers\RouteController@runLivePage'
])
    ->where('language', $languageRoutesAllowedEmpty)
    ->where('slug', '.*');
```

The first parameter `{language?}` (that might exist in the URL or not) is responsible for the language. 

The second one - `{slug}` - needs to be equal to value of the slug column in the pages database table - this way the **brain** of Alfred (routes.php / RouteController) matches the specific record of `pages` database table and based on module / action columns it calls a service’s method name (based on action value) from a module (based on module value).

### Website functionalities
In many projects, you can notice the Website Functionalities section in the `routes.php` file. Feel free to create some static routes (created out of the pages-driven database table etc.), call the needed controller and method.
