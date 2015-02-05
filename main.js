/*
 * objCleaner
 * https://github.com/danibram/object-cleaner
 *
 * Copyright (c) 2014 Daniel Biedma Ramos
 * Licensed under the MIT license.
 */

'use strict';

var cleaner = function(obj) {
    var cleanObject = function (obj){
        var field2;
        if (Object.keys(obj).length === 1){
            for (field2 in obj){
                obj = cleanArray(obj[field2]);
            }
        } else {
            for (field2 in obj){
                obj[field2] = cleanArray(obj[field2]);
            }
        }
        return obj;

    };

    var cleanArray = function (array){
        if (array.length === 1){
            if (Object.prototype.toString.call(array[0]) === '[object Object]'){
                array = cleanObject(array[0]);
            } else {
                array = array[0];
            }
        } else {
            for (var i = 0; i < array.length; i++) {
                if (Object.prototype.toString.call(array[i]) === '[object Object]'){
                    array[i] = cleanObject(array[i]);
                } else {
                    array[i] = array[i];
                }
            }
        }
        return array;
    };

    if (obj){
        var arrKeys = Object.keys(obj);
        for (var i = 0; i < arrKeys.length; i++) {
            var field = arrKeys[i];
            if (Object.prototype.toString.call(obj[field]) === '[object Object]'){
                obj[field] = cleanObject(obj[field]);
            } else if (Object.prototype.toString.call(obj[field]) === '[object Array]'){
                obj[field] = cleanObject(obj[field]);
            } else {
                obj[field] = obj[field];
            }
        }
    }


    return obj;
};

module.exports = cleaner;
