---
title: "Integrations"
metaTitle: "Integrations"
metaDescription: ""
---

Alfred has several ready integrations (Imgix, Mailchimp, Pardot, Stripe, PayPal and so on). Their code is available in `App/Integrations` (**app/Integrations** folder). Basic Alfred version has got only one built-in integration with Imgix (described on the next page of this documentation). The other integrations are ready to be used in separate code repositories.

If you ever need to create your own integration, with a 3rd party API, please create a folder in the `app/Integrations` and use the `App\Integrations\<YOUR INTEGRATION>` namespace. Each integration should be independent, possible to be used in any controller or service. Do not forget to register the integration in the `config/app.php` file to create an alias that can be used to call specific integration methods (if needed).