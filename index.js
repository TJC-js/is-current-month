/*!
 * is-current-month <https://github.com/TJC-js/is-current-month>
 *
 * Copyright (c) 2021-current, Tim Cane.
 * Released under the MIT License.
 */

'use strict';

var isDate = require("is-a-date");

module.exports = function isCurrentMonth(value) {
    if(!isDate(value)){
        throw new Error('expected a date');
    }

    return value.getMonth() == new Date().getMonth();
};