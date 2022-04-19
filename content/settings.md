---
title: "Settings"
metaTitle: "Settings"
metaDescription: ""
---

It is a module in Alfred CMS which is a centre of Alfred Panel-related stuff. You can add new users, manage their privileges, create user groups, manage user account’s settings. You can find logs, section templates list, management of website languages.

This module should not be edited by you if it is not absolutely needed. Of course, if there is a special need to adjust something - feel free to do it but at the same time make double sure that it does not affect any other functionalities in Alfred.

# SEO / Social Media Settings
The only file that you will most probably want to edit is the `cmsassets/_ng/Settings/settings-website.tpl.html` file, where the **SEO** section is (there is the Company Address sub-section or Social Media links). It depends on your project what social media link fields should be defined over there so feel free to edit it.

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

# Address
It is a common case to display a company address in the footer or some contact section/header. This is manageable via <b>Settings -> Website Settings -> SEO -> Address</b>. Below you can find a code snippet that will display the address on the front-end page:

```
{{ $settings['street_address'] }}, <br>
{{ !empty($settings['street_address_line2']) ? $settings['street_address_line2'] . ', ' : '' }}<br>
{{ !empty($settings['address_locality']) ? $settings['address_locality'] . ', ' : '' }}
{{ !empty($settings['address_region']) ? $settings['address_region'] . ',' : $settings['address_region'] }}<br>
{{ $settings['postal_code'] }},
{{ $settings['address_country'] }}
```

# Global phone number and email address
On many websites you can notice email address or phone number visible in a footer, top nav bar or other places across pages.

This is manageable via <b>Settings -> Website Settings -> SEO -> Contact Info</b>. Please remember about keeping the phone number in diallable format and email address encoded to prevent (at least a little) sending SPAM.

Example of returning <b>phone number</b> on front-end page:
```
<a href="tel:{{ HTML::phone($settings['phone']) }}">
    {{ $settings['phone'] }}
</a>
```

Example of returning <b>email address</b> on front-end page:
```
<a href="{!! HTML::encode('mailto:' . $settings['email']) !!}">
    {!! HTML::encode($settings['email']) !!}
</a>
```

# Add whatever you need
Remember that you are able to add any other fields across the entire <b>Settings -> Website Settings -> SEO</b> tab (in the `cmsassets/_ng/Settings/settings-website.tpl.html` file). All the new fields' values will be available in ```$settings``` object on the front-end page.