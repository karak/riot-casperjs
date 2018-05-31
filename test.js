'use strict'

var riot = require('riot/riot.min.js');
require('tags/greeting');

casper.test.begin('Greeting test', function (test) {
  var el = document.createElement('greeting');
  riot.mount(el, 'greeting')

  test.assert(el.textContent === 'Hello!');

  test.done();
});
