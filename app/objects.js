if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
	var temp = function fn(greeting, name) {	
		return greeting + ', ' + name + '!';
	}
	
	return temp(obj.greeting, obj.name);
	
			
    },

    alterObjects : function(constructor, greeting) {

	return ((constructor.prototype.greeting = greeting))
    },

    iterate : function(obj) {

	var temp = Object.getOwnPropertyNames(obj);
	var temp2 = [];
	for (var i=0; i< temp.length; i++) {
		temp2.push(temp[i] + ': ' + obj[ temp[i] ] );
	}
	return temp2;

    }
  };
});
