if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {

	var module = {  greeting: str1, 
		sayIt: function sayIt() { return (this.greeting + ', ' + this.name); },
		name: str2};
	return module;
    }
  };
});

