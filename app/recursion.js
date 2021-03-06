if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
	
	var files_obj = out_files = [];
	
	files_obj = data['files'];

	function findDir(obj) {
		var obj_temp= {};
		for (val in obj) {
			if (val == 'dir' && obj[val] == dirName) 
				files_obj = obj['files'];
			else if (obj['files']) {
				obj_temp = obj['files'];
				for (var i = 0; i< obj_temp.length; i++) {
					if (typeof obj_temp[i] == 'object') 
						findDir(obj_temp[i]);
				}
			}
		}
	}

	if (dirName) 	
		findDir(data);
	
		
	function listFiles(arr) {
		for(var n=0; n< arr.length; n++) {
			if (typeof arr[n] == 'object') {
				listFiles(arr[n]['files']);
			} else { 
				out_files.push(arr[n]);
			}
			
		}
	}
	
	listFiles(files_obj);
	return out_files;
    },

    permute: function(inputArr) {

	var results = [];

	function permute(arr, memo) {
		var cur, memo = memo || [];

		for (var i = 0; i < arr.length; i++) {
			cur = arr.splice(i, 1);
			if (arr.length === 0) {
				results.push(memo.concat(cur));
			}
			permute(arr.slice(), memo.concat(cur));
			arr.splice(i, 0, cur[0]);
		}

		return results;
	}

	return permute(inputArr);

    },

    fibonacci: function(n) {
	
	var ret_arr= [1, 1];
	if (n <= ret_arr.length)
		return ret_arr[n-1];

	for (var i=2; i < n; i++) {
		ret_arr.push(ret_arr[i-1] + ret_arr[i-2]);
	}
	return ret_arr[n-1];

    },

    validParentheses: function(n) {
	
	var output = ret_arr = [];
	var open = close = 0;
	function combinations(output, open, close, pairs)
	{
		if((open==pairs)&&(close==pairs))
		{
			ret_arr.push(output);
		}
		else
		{
			if(open<pairs)
				combinations(output + "(", open+1, close, pairs);
			if(close<open)
				combinations(output + ")", open, close+1, pairs);
		}
	}
	combinations(output, open, close, n);
	return ret_arr;
    }
  };
});
