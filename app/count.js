if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
	
	var ts;
	var counter = start - 1;
	return (function cnt(counter, end) {
		if (counter >= end)  return (clearTimeout(ts));			
		
		counter++;
		ts = setTimeout(function() { console.log(counter); cnt(counter, end); }, 100);
					
	})();
	
    }
  };
});
