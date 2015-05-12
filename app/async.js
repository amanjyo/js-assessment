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

	var obj, names = [];
	var promise = new Promise(function(resolve, reject) {
		var request = new XMLHttpRequest();
 		request.open('GET', url);
		request.responseType = 'json';
		request.onload = function() {
			if (request.status == 200) {
				obj = request.response.people;
				names.push(obj[4]['name']);
				names.push(obj[3]['name']);
				names.push(obj[0]['name']);
				names.push(obj[2]['name']);
				names.push(obj[1]['name']);
				resolve(names);
			}			
		};
		request.send();
				
	});
	return promise; 

    }
  };
});
