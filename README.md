# personal-blog

> My personal blog site

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Adding new Fonts

Fonts are self hosted using
[nuxt-webfontloader](https://github.com/Developmint/nuxt-webfontloader) to add
a new font update the configuration in `nuxt.config.js`. For example to add the
_Cookie_ font:

```javascript
{
  webfontloader: {
    google: {
      families: ['Cookie']
    }
  }
}
```

## Adding your MailChimp details for the Subscribe component

In order to correctly configure the mailchimp subscription component you will
need to add the following to the components `data` object:

```javascript
data() {
  return {
    url: 'https://domain.usX.list-manage.com/subscribe/post-json',
    userId: 'userId',
    listId: 'listId'
  }
}
```

## Adding you Disqus details for the Comments component

The Disqus component requires at a minimum the details of your Disqus shortname
This is used to identify comments related to your account and display them
correctly. While the component will provide other details automatically to
Disqus, for example article `title`, you will need to change the shortname
property to your own in the components `data` function:

```javascript
data() {
  return {
    show: false,
    shortname: `andrew-werner`,
    url: this.$route.query.page
  }
}
```

## Adding font awesome icons

To add additional font awesome icons you need to import them in the plugin. For
example if you wanted to add the `fa-address-book` update
`plugins/fontawesome.js` with the following:

```javascript
import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCheckCircle,
  faTimesCircle,
  faAddressBook
} from '@fortawesome/free-regular-svg-icons'

config.autoAddCss = false

library.add(faCheckCircle, faTimesCircle, faAddressBook)

Vue.component('font-awesome-icon', FontAwesomeIcon)
```

Then to add the icon to the component simply put:

```html
<font-awesome-icon :icon="['far', 'address-book']" />
```

## Routing

Routing is handled automatically by the nuxt framework however, if you create
a new dynamic page that is not already defined remember to update the generated
routes in the `nuxt.config.js` so that these pages are statically rendered at
build time. Otherwise, these pages will only be available through your app,
linking to them externally will return a 404.
