/*!
 * extend-shallow <https://github.com/jonschlinkert/extend-shallow>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var extend = require('./');

describe('extend', function () {
  it('should extend the first object with the properties of the other objects.', function () {
    extend({a: 'b'}, {c: 'd'}).should.eql({a: 'b', c: 'd'});
  });
});