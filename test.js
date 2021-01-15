'use strict';

require('mocha');
var assert = require('assert');

var isCurrentMonth = require("./");

describe('isCurrentMonth', function() {
    it('should return true if date is current month', function() {
        assert(isCurrentMonth(new Date()));
    });

    it('should return false if date is not current month', function() {
        var wrongMonth = new Date();
        wrongMonth = wrongMonth.setMonth(wrongMonth.getMonth()+1);
        assert(!isCurrentMonth(new Date(wrongMonth)));
    });

    it('should throw an error when an invalid value is passed', function() {
        assert.throws(() => isCurrentMonth(), /expected a date/);
        assert.throws(() => isCurrentMonth('not a date'), /expected a date/);
      });
});
