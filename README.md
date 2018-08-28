# koa-hello-world [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url]

> Koa 'Hello World' middleware, useful for testing

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]
<a href="https://communityinviter.com/apps/koa-js/koajs" rel="KoaJs Slack Community">![KoaJs Slack](https://img.shields.io/badge/Koa.Js-Slack%20Channel-Slack.svg?longCache=true&style=for-the-badge)</a>

## Install
```
npm i koa-hello-world --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var app = require('koa')()
var helloWorld = require('koa-hello-world')

app.use(helloWorld()).listen(1234)
```


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/koa-hello-world/issues/new).
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/koa-hello-world
[npmjs-img]: https://img.shields.io/npm/v/koa-hello-world.svg?label=koa-hello-world

[license-url]: https://github.com/tunnckoCore/koa-hello-world/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/koa-hello-world
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/koa-hello-world.svg

[travis-url]: https://travis-ci.org/tunnckoCore/koa-hello-world
[travis-img]: https://img.shields.io/travis/tunnckoCore/koa-hello-world.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/koa-hello-world
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/koa-hello-world.svg

[david-url]: https://david-dm.org/tunnckoCore/koa-hello-world
[david-img]: https://img.shields.io/david/dev/tunnckoCore/koa-hello-world.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
