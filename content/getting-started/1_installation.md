---
title: "Installation"
metaTitle: "Installation"
metaDescription: ""
---

# Prerequisites

#### 1. Please install locally:
- [Node with NPM](https://nodejs.org/en/) - we recommend you have the latest LTS version installed
- [Grunt](https://gruntjs.com/) to make Alfred UI changes
- [Composer](https://getcomposer.org/) - for PHP dependency management

#### 2. To install and run Alfred project, you need also:
- Nginx or Apache
- PHP 7.4
- MySQL 8.0 database (can be MariaDB)

If you want to use Docker to install those 3 components - please read the next section. If you use MacOS or Windows system and you do not want to use Docker (ya, it is so slow!), you should install them manually (for example using Homebrew on your Mac). If you are on Windows, you can install the oldschool [XAMPP package](https://www.apachefriends.org/pl/download.html) - it is fine to use it and contains PHP, Apache and MySQL (just make sure you choose the right version). You will have a lot of other useful tools too such as PHPMyAdmin where you can create and manage databases.

### Docker
In the Alfred repository (see the link to it in the section below) there is the `docker-compose.yml` file and entire Nginx/PHP/MySQL configuration. You can just run `docker-compose up` and follow the installation steps below.

# Installation
**Plain Alfred code repository** you can find here: https://bitbucket.org/snowflakers/alfred-v1/src/master/. Please follow the installation steps below.

### Installation & running project without Docker

1. **Download all the code from repository** (inc. `.gitignore` file, Docker configuration and so on) and paste it into root of your project.
2. Create a database (you can use PHPMyAdmin if you prefer) and import the `database.sql` file.
3. In the `cms-backend/` folder create the `.env` file and paste the contents of `.env.example`. Enter the credentials, at least for the database connection.
4. Install the PHP dependencies, running `composer install` and then `php artisan key:generate` in the terminal, from the `cms-backend/` location.
5. Run `php artisan serve` and you should be able to see the project and start developing.

### Installation & running project on Docker

1. **Download all the code from repository** (inc. `.gitignore` file, Docker configuration and so on) and paste it into root of your project.
2. Create `.env` file in the root folder with the contents of `/.env.example` and set the `PROJECT_NAME` and database settings (`MYSQL_*`).
3. In the `cms-backend/` folder create the `.env` file and paste the contents of `cms-backend/.env.example`. Enter the credentials, at least for the database connection.
4. Run `docker-compose up` from the root folder (you will see errors but do not worry about it for now - see next points).
5. Copy the database file (`database.sql`) into database container* (`docker cp database.sql DATABASE_CONTAINER_NAME:/`)
6. Connect to the database container* (`docker exec -it DATABASE_CONTAINER_NAME bash`); connect to MySQL service using `mysql -u MYSQL_USER -p` and import the database file into selected database (`source /database.sql`).
7. Connect to backend container* (`docker exec -it BACKEND_CONTAINER_NAME bash`) and install the PHP dependencies, running `composer install` + `php artisan key:generate`.
8. Once the dependencies are installed, you should be able to open the project at `http://0.0.0.0:8000` and start developing.

&#42; if you do not know the container names, just run `docker ps` to find them out.

# Other Code Repositories
Please see the list of available ready-to-use modules on Bitbucket. Copy the code of some needed module and paste into your project following the README files.

- [Blog module](https://bitbucket.org/snowflakers/alfred-v1-blog/src/master/)
- more modules soon...

Extremely helpful repository you can also find here: https://bitbucket.org/snowflakers/alfred-microcomponents/src/master/. You can find there ready custom microcomponents that you can re-use and adjust to meet your project requirements.

# Production deployment requirements
- Nginx (preferrable) or Apache
- PHP 7.4
- MySQL 8.0 database (can be MariaDB)

**Website document root should be set to `cms-backend/public` folder.**

Useful information about setting up a production server to run Alfred project you can find here: https://bitbucket.org/snowflakers/server-nginx-configuration/src/master/. It is oriented to deployment to [DigitalOcean](https://www.digitalocean.com/) but lots of configuration instructions can be helpful for you even if you decide to launch your project with totally different hosting provider.