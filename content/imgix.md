---
title: "Imgix"
metaTitle: "Imgix"
metaDescription: "s"
---

# Requirements in your developer’s environment
Alfred is built on top of Laravel framework (v. 6.0 LTS) and AngularJS.
For Laravel you need to have Nginx/Apache, PHP 7.4, MySQL database (can be MariaDB).

To start integrating Alfred in a project, you need to have knowledge about [Laravel](https://laravel.com) and only a little bit about HTML / Javascript. You should install [Composer](https://getcomposer.org/) for PHP dependency management, [NPM](https://nodejs.org/en/) with [Grunt](https://gruntjs.com/) to make Alfred UI changes (it is recommended but not required to make the easy Angular things - there is a magic!).

# Docker
In the Alfred repository (see the section below) there is the docker-compose.yml file and entire Nginx/PHP/MySQL/Redis configuration. You can just run `docker-compose up` and start developing!

# Code Repositories
Plain Alfred repo you can find here: link soon. Copy the code into cms-backend/ folder of your project.

Please see list of available ready-to-use modules in the Bitbucket. Copy code of some needed module and paste into your project following the README files.

Extremely helpful repository you can also find here: https://bitbucket.org/snowflakers/alfred-microcomponents/src/master/
You can find there ready custom micro components that you can re-use and adjust to meet the project requirements.
