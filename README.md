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

## Adding your MailChimp details for the subscribe component

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
