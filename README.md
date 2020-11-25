# Archived

It was fun while it lasted, but we have to stop maintaining these repositories. We haven't used these projects for quite some time and maintaining them is becoming harder to do.

You deserve better, and for that reason we've decided to archive some repositories, which includes this one.

Feel free to fork and alter the repositories, and go forth making awesome stuff.

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
