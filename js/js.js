'use strict';

var page = {
	'u': 'welcome',
	'b': 'bold',
	'h3': 'hello, this is a title'
};

function createDomTree(){
	for (var key in page){  //go though object to get key and value 
		var tag = document.createElement(key);
	    var text = document.createTextNode(page[key]);
	    tag.appendChild(text);
	    document.getElementById('page').appendChild(tag);
	}

}