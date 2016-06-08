
let should = require('chai').should();
let mydate1 = "1/1/2013";
let mydate2 = "";
let mydate3 = "1/1/20f3";
let jsdom = require('jsdom');
let dc = require('../js/app');

describe('tests', function(){
    describe('formatDate', function(){
        it('should be a string', function(){
            mydate1.should.be.a('string');
        })

        it('should return an initial date if date format is not correct', function(){
            dc.formatDate(mydate2).should.equal("19700101");
        })

        it('should be converted properly', function(){
            dc.formatDate(mydate1).should.equal("20130101");
        })
    })
    describe('convertDate', function(){
        it('should be a string', function(){
            mydate1.should.be.a('string');
        })

        it('should add zeros when they are not given by the user', function(){
            dc.convertDate(mydate1.split("/")).should.equal("20130101");
        })

    })
    describe('dateIsRight', function(){
        it('should return true with a proper date', function(){
            dc.dateIsRight(mydate1.split("/")).should.equal(true);
        })
        it('should return false with an empty date', function(){
            dc.dateIsRight(mydate2.split("/")).should.equal(false);
        })
        it('should return false with a date with letters / NaN in it', function(){
            dc.dateIsRight(mydate3.split("/")).should.equal(false);
        })

    })
})