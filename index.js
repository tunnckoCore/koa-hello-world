/*!
 * koa-hello-world <https://github.com/tunnckoCore/koa-hello-world>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

module.exports = function koaHelloWorld () {
  return function * (next) {
    this.body = 'Hello World'
    yield * next
  }
}
