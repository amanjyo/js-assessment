if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
	return /[0-9]/.test(str);
    },

    containsRepeatingLetter : function(str) {
	return /([a-zA-Z])\1+/.test(str);
    },

    endsWithVowel : function(str) {
	return /[aeiouAEIOU]$/.test(str);
    },

    captureThreeNumbers : function(str) {
	var out = /[0-9]{3}/.exec(str);
	if (out != null)
		return out[0];
	else
		return false;
	
    },

    matchesPattern : function(str) {
	return /^\d{3}\-\d{3}\-\d{4}$/.test(str);
	
    },
    isUSD : function(str) {

	//return /^\$\d+(?:[,]|\d{3}){0,2}[\.]\d{2}$/.test(str);
	return   /^\$\d+(,\d{3})*(\.\d{2})?$/.test(str);

    }
  };
});
