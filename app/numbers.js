if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
	
	var binNum = (num.toString(2).split('')).reverse();
	return parseInt(binNum[bit-1], 2);
    },

    base10: function(str) {
	
	
	return parseInt(str, 2);
    },

    convertToBinary: function(num) {

	return ("000000000"+ num.toString(2)).substr(-8);
	
   },

    multiply: function(a, b) {

	var bf = Math.pow(10, String(b).length - String(b).indexOf('.') -1);
	return (a*(b*bf))/bf;
    }
  };
});

