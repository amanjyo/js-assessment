if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
	
	var ts;
	var num = start - 1;
	var obj = {"cancel" : function cancel() {this.ts; clearTimeout(ts);} };

	function cnt(num, end) {
		if (num >= end)  return;
		num++;
		ts = setTimeout(function() { console.log(num); cnt(num, end); }, 90);
	}

	cnt(num, end);
	return obj;
	
    }
  };
});
