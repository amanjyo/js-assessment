if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

	var promise = new Promise(function(resolve, reject) {
		resolve(value);
		});
	
	return promise;
    },

    manipulateRemoteData : function(url) {

	var final_url = "file:///home/jyothsna/js-assessment" + url;
	var promise = new Promise(function(resolve, reject) {
		var request = new XMLHttpRequest();
 
		request.open('GET', url);
		request.onload = function() {
			if (request.status == 200) {
				resolve(request.response); 
			} 
		};
		request.send();
	});
	return promise;

    }
  };
});
