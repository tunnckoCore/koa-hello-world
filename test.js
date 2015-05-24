/*!
 * koa-hello-world <https://github.com/tunnckoCore/koa-hello-world>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var koa = require('koa')
var test = require('assertit')
var request = require('supertest')
var helloWorld = require('./index')

var app = koa()

test('koa-hello-world:', function () {
  test('should say "Hello World"', function (done) {
    app.use(helloWorld())

    request(app.callback())
      .get('/')
      .expect(200, 'Hello World')
      .end(done)
  })
  test('should yield next middleware', function (done) {
    var ok = false

    app
      .use(function * (next) {
        this.helloworld = true
        yield * next
      })
      .use(helloWorld())
      .use(function * (next) {
        test.equal(this.helloworld, true)
        ok = true
      })

    request(app.callback())
      .get('/')
      .expect(200, 'Hello World')
      .end(function (err) {
        test.ifError(err)
        test.equal(ok, true)
        done()
      })
  })
})
