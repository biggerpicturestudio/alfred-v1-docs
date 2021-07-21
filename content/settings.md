---
title: "Settings"
metaTitle: "Settings"
metaDescription: ""
---

It is a module in Alfred CMS which is a centre of Alfred Panel-related stuff. You can add new users, manage their privileges, create user groups, manage user account’s settings. You can find logs, section templates list, management of website languages.

This module should not be edited by you if it is not absolutely needed. Of course, if there is a special need to adjust something - feel free to do it but at the same time make double sure that it does not affect any other functionalities in Alfred.

# SEO / Social Media Settings
The only file that you will most probably want to edit is the `cmsassets/_ng/Settings/settings-website.tpl.html` file, where the **Social Media** section is. It depends on your project what social media link fields should be defined over there so feel free to edit it.

Then, on front page you can return some social media link as below:

```
    @if (!empty($settings['social_linkedin']))
        <a
            href="{{ $settings['social_linkedin'] }}"
            title="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
        </a>
    @endif
```