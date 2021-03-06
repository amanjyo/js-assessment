if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
	
	return arr.indexOf(item);
	
    },

    sum : function(arr) {
	var total = 0;
	for (var i= 0; i < arr.length; i++){
		total += arr[i];
	}
	return total;

    },

    remove : function(arr, item) {

	var arr2 = [];
	for(var i=0; i < arr.length; i++) {
		if (arr[i] != item) {
			arr2.push(arr[i]);
		}
	}	
	return arr2;
    },

    removeWithoutCopy : function(arr, item) {

	var fromIndex = 0, i = 0;
	while (fromIndex < arr.length) {
		i = arr.indexOf(item, fromIndex);
		if (i != -1) {
			arr.splice(i, 1);
			fromIndex = i;
		} else { fromIndex++;  }
		
	}
	return arr;


    },

    append : function(arr, item) {

	arr.push(item);
	return arr;

    },

    truncate : function(arr) {

	arr.pop();
	return arr;

    },

    prepend : function(arr, item) {
	
	arr.unshift(item);
	return arr;

    },

    curtail : function(arr) {

	arr.shift();
	return arr;

    },

    concat : function(arr1, arr2) {
	
	return (arr1.concat(arr2));
    },

    insert : function(arr, item, index) {

	arr.splice(index, 0, item);
	return arr;

    },

    count : function(arr, item) {
	
	var count=0;
	for(var i=0; i < arr.length; i++) {
		if (arr[i] == item) {
			count++;
		}
	}
	
	return count;		

    },

    duplicates : function(arr) {
	var arr2 = arr;
	var target = [];
	var temp= {};
	
	for (var i=0; i < arr.length; i++) {

		if (temp[arr[i]] == undefined) {
			temp[arr[i]] = 1;
		} else if (temp[arr[i]] == 1) {
			temp[arr[i]]++;
			target.push(arr[i]);
		} else {  temp[arr[i]]++;  }
	}
	return target;
		
    },

    square : function(arr) {

	for (var i=0; i<arr.length; i++) {
		arr[i] *= arr[i];
	}
	return arr;
    },

    findAllOccurrences : function(arr, target) {

	var fromIndex = 0, i = 0;
	var ret_arr = [];
	while(fromIndex < arr.length) {
		i = arr.indexOf(target, fromIndex);
		if (i != -1) {
			ret_arr.push(i);
			fromIndex= i +1;
		}
		else {
			fromIndex++;
		}
	}
	return ret_arr;
    }
  };
});
