'use strict';
var cleaner    = require('../lib/objCleaner');
var expect = require('chai').expect;
var inspect = require('util').inspect;

describe('objCleaner', function() {

var test = {
    array: {
        one: [{
            property1: '',
            property2: ''
        }],
        two:[ 'property1', 'property2' ]
    },
    object: {
        one:{
            0:{
                property1: '',
                property2: ''
            }
        },
        two:{
            property1: {
                subproperty1: '',
                subproperty2: ''
            },
            property2: ''
        }
    },
};

        var startObj = JSON.parse(JSON.stringify(test));
        var result = cleaner(test);

       console.log('Start object (dirty)...');
        console.log(inspect(startObj, null, 3));

        console.log('Result object (cleaned)...');
        console.log(inspect(result, null, 3));


        it('Should remove array with length 1', function() {
            expect(result.array.one).to.deep.equal(startObj.array.one[0]);
        });

        it('Should not touch array two', function() {
            expect(result.array.two).to.have.length(2);
        });

        it('Should not touch objects of the test', function() {
            expect(result.object).to.deep.equal(startObj.object);
        });
});
