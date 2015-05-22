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
app.use(helloWorld())

test('koa-hello-world:', function () {
  test('should say "Hello World"', function (done) {
    request(app.callback())
      .get('/')
      .expect(200, 'Hello World')
      .end(done)
  })
})
