# aurelia-gravatar-component

[![Build Status](https://travis-ci.org/SpoonX/aurelia-gravatar-component.svg?branch=master)](https://travis-ci.org/SpoonX/aurelia-gravatar-component)
[![Known Vulnerabilities](https://snyk.io/test/npm/name/badge.svg)](https://snyk.io/test/npm/aurelia-gravatar-component)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://gitter.im/SpoonX/Dev)

> This library is a plugin for the [Aurelia](http://www.aurelia.io/) platform.

Simple gravatar component for Aurelia. Based on these specs:
https://secure.gravatar.com/site/implement/images/

## Usage

It globalizes a custom element. A very simple example which should get you
going.

```html
<gravatar
  email.bind="vm.email"
  size.bind="200"
  rating="x"
  secure.bind="true">
</gravatar>

```

## Bindable properties

### email
[string='']
Used to determine what gravatar to fetch from gravatar's api.

### size
> [number=200]
The size of a side in pixels of the square gravatar image.

### rating
> [string='g']
`g`   suitable for display on all websites with any audience type.
`pg`  may contain rude gestures, provocatively dressed individuals, the lesser swear words, or mild violence.
`r`   may contain such things as harsh profanity, intense violence, nudity, or hard drug use.
`x`   may contain hardcore sexual imagery or extremely disturbing violence.

### forceDefault
> [boolean=false]
When true always loads the default image instead of the user uploaded one.

### defaultTo
> [string="monsterid"]
The image to fetch when user has not been found. These can be the following
options.  `404` `mm` `identicon` `monsterid` `wavatar` `retro` `blank`.

### secure
> [boolean=false]

Whether to perform request over https

## Installation

### Aureli-Cli

Run `npm i aurelia-gravatar-component --save` from your project root.

aurelia-gravatar-component makes use of `md5`. So, add following to the `build.bundles.dependencies` section of `aurelia-project/aurelia.json`.

```js
"dependencies": [
  // ...
  "md5",
  {
    "name": "aurelia-gravatar-component",
    "path": "../node_modules/aurelia-gravatar-component/dist/amd",
    "main": "aurelia-gravatar-component",
    "resources": [
      "gravatar.html"
    ]
  },
  // ...
],
```

### Jspm

Run `jspm i aurelia-gravatar-component` from your project root.

aurelia-gravatar-component makes use of `md5`. So, add following to the desired `includes` section of `build/bundles.js`, eg:

```js
"aurelia": {
  "includes": [
    //...
    "md5",
    "aurelia-gravatar-component",
    "[aurelia-gravatar-component/**/*.js]",
    "aurelia-gravatar-component/**/*.html!text",
    //...
  ]
}
```

If the installation results in having forks, try resolving them by running:

```sh
jspm inspect --forks
jspm resolve --only registry:package-name@version
```

### Webpack

Run `npm i aurelia-gravatar-component --save` from your project root.

And add `aurelia-gravatar-component` in the `coreBundles.aurelia` section of your `webpack.config.js`.

### Typescript

Npm-based installations pick up the typings automatically. For Jspm-based installations, run `typings i github:spoonx/aurelia-gravatar-component` or add `"aurelia-gravatar-component": "github:spoonx/aurelia-gravatar-component",` to your `typings.json` and run `typings i`.
