var j = document.createElement('script');
j.src = "https://code.jquery.com/jquery-3.2.1.min.js";
j.onload = function() {
    var s = document.createElement('script');
	s.src = chrome.extension.getURL('better-marmoset.js');
	s.onload = function() {
		this.remove();
	};
	(document.head || document.documentElement).appendChild(s);
	this.remove();	
};
(document.head || document.documentElement).appendChild(j);


