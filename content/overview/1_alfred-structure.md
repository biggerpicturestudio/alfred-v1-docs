---
title: "Alfred Structure"
metaTitle: "Alfred Structure"
metaDescription: ""
---

Alfred is based on **Modules** (content and non-content ones), **Headers / Sections**, **Microcomponents**, **Components**, **Menus**, **Partials**, **Settings**, **User Authentication & Authorisation**. 

**Non-content modules** are those ones that are not responsible for content creation. Perfect example of a non-content module could be the Forms module that just stores the form submissions from a website and gives Alfred Users an ability to manage them.

**Content modules’** goal is content creation in Alfred and displaying on front page.

Content is created using **Headers, Sections** and **special microcomponents** within them that give Alfred Users an easy interface to edit the content. Content is being saved as **JSON**.

**Components** are smaller units of content that can be repeated across multiple sections (they have their own database tables). 
Partials are universal layout settings or data (such as phone number, email, map coordinates, company address etc.) that can be displayed wherever you want. 

**System Settings** is a module where you can set up new Alfred Users, user groups and the user privileges, sections, redirects, languages etc. - „just” general system/website settings.
Business logic of project based on Alfred is split into 2 main folders within app/ directory: **Cms** and **Website**. If you want to make some changes on front page - add/edit files in the Website folder. If you want to modify something in the Alfred (admin area) - go to Cms folder. **Cms** folder is also responsible mainly for *write* operations and **Website** for the *read* ones.

You can also find folder like InternalModules. The idea behind it is to have a global place which is used by both cms and website side (it is a common thing that the same model could be used both on website/front page and in the cms). 
For projects such as e-commerce websites these are usually:
- Shop functionality module 
- Cart 
- My Account

There could be placed also module like Currencies, which would need to be accessible throughout the website. In general words we could say that it’s a place for project specific modules available throughout the entire website, both cms and front page.
It is highly recommended to look “under the hood” of some Alfred project from the very beginning and good start where to start looking from is the `app/Http/routes.php` file. There are all available routes that call specific controllers and their methods. Jump to the Routing section to find out more details about the dynamic and static routes.

**PHP code is and should be written with Repository Pattern in mind.**

PHP Templates (blade templates) - they exist in the resources/views directory. Layout.default.php is the master layout template. All the other templates are separated to module directories such as News, Blog, Pages, Homepage etc.

Alfred (as an admin panel) is written with AngularJS as mentioned previously. Every action which takes place in the panel (such as admin creation, editing, removing and so on) calls Alfred internal API (open DevTools on your browser and start clicking through panel to see what happens). That way, in Angular we send or consume the data and present them as an action in panel.

Angular stuff is editable through `cms-backend/resources/cmsassets/_ng` folder. The HTML views can be edited „as is” and the changes are visible immediately in Alfred (no code compilation needed). More advanced changes in the JS files require the code compilation. Then running the grunt commands is needed to compile the code:
- If you edit some JS files and you want to see the changes while editing them: run command from cms-backend folder:
`grunt dev:cms`
- If you have finished editing the JS files and you want to recompile the AngularJS things, run command:
`grunt prod:cms`