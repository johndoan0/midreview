
// Note: This quiz uses a testing framework called mocha. If you want to run the tests yourself, make sure you have mocha and chai both installed in the directory you're working in. If not, just use npm install mocha (and/or chai). Takes two seconds. Then you simply use the command "mocha midreview.js" at the command line. 

// Also note: The functions must have the same names as indicated in order to pass the tests. Even the error string in #2 must be the same. 

// Oh look another note: If these are too easy for you, enjoy it while it lasts. This is a three-part review. 

var mocha = require('mocha'),
    chai = require('chai')

var assert = chai.assert;
var expect = chai.expect;



// 1. write a function called isNegative. it should take a single, numerical input. it should output true if the number is negative, and false if the number is positive.

var isNegative = function(num){
    if (num < 0) {return true}
    else return false
}

// 2. modify isNegative so that it only accepts numerical input. it should THROW an error for bad input, and that error should consist of the exact string "input must be a number."

var isNegative = function(num){
    if (typeof num === 'number'){
        if (num < 0) {return true}
        else return false
    } 
    else throw 'input must be a number'   
}

// 3. write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 

var iPutTheFunIn = function(str){
    var strtoArr = str.split('')
    var midArrPlusOne = strtoArr.length / 2
    var addFun = strtoArr.slice(0, midArrPlusOne) + 'fun' + strtoArr.slice(midArrPlusOne, strtoArr.length)
    var addFunNoComma = addFun.replace(/,/g,'')
    return addFunNoComma
    // ---more efficient code
    // var midpoint = input.length/2,
    //     firsthalf = input.slice(0,midpoint),
    //     lasthalf = input.slice(midpoint, input.length)
    // return firsthalf + 'fun' + lasthalf
    
    //.substr method on string available
}
// 4. write a function called incrementEach(). it should take as input an array of numbers and increase the value of each number by one. try it with a basic for loop, then try it the appropriate functional method (map/filter/reduce/forEach).

var incrementEach = function(arr){
    for (var i = 0; i < arr.length; i++) {
        arr[i] += 1
    };
    return arr
}

var incrementEach = function(arr){
    var arrPlusOne = arr.map(function(ele){return ele += 1})
    return arrPlusOne
}
// 5. write a function called shortiesOnly(). taking as input an array of strings, it should use the array's .filter() method to return a new array containing only those strings with fewer than four characters. 

var shortiesOnly = function(arr){
    return arr.filter(function(ele){if (ele.length < 4) return true 
                                else return false
                            })
    //in callback -- ele.length<4 gives true/false
}

// test for #1
describe("isNegative()",function(){
    it("should return true if the input number is negative",function(){
        expect(isNegative(2)).to.equal(false)
        expect(isNegative(-50)).to.equal(true)
        expect(isNegative(0)).to.equal(false)
    })
})


// test for #2
describe('isNegative()',function() {
    it('should throw an exception if the input is not a number' , function()
    {
        expect(isNegative(5))      .to.equal(false)
        expect(isNegative('five')) .to.throw('input must be a number')
        expect(isNegative([5]))    .to.throw('input must be a number')
        expect(isNegative(false))  .to.throw('input must be a number')
    })
})


// test for #3
describe('iPutTheFunIn()',function() {
    it('should put the fun in things!' , function() {
        expect(iPutTheFunIn('functional')).to.equal('functfunional')
        expect(iPutTheFunIn('funerals')).to.equal('funefunrals')
    })
})


// test for #4
describe('incrementEach()', function() {
    it('should increase the value of each number in an array' , function() {
        expect(incrementEach([3,4,5,6])).to.deep.equal([4,5,6,7])
        expect(incrementEach([-3,-4,-5,-6])).to.deep.equal([-2,-3,-4,-5])

    })
})


// test for #5
describe('shortiesOnly()', function() {
    it('should produce a new array with only <4-letter words' , function() {
        expect(shortiesOnly(["Sunbeams","do","illuminate","the","dew"])).to.deep.equal(["do","the","dew"])
    })
})

