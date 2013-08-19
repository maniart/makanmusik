var app = (function(w, d, $){
	
	Object.size = function(obj) {
	    var size = 0, key;
	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) size++;
	    }
	    return size;
    };
	
	'use strict';
	
	// private 
	var prvt = {},
		pub = {},
		that = this;
				
	prvt.$dom = {};
	prvt.$dom.body = $('body');
	prvt.$dom.loadContent = $('.load-content');
	
	prvt.processData = function processData(data) {
		$(data).each(function(index, element){
			var posts = data["posts"];
			
			for(var i=0; i<posts.length; ++i){
				
			
			$('body').append('<h1>'+posts[i].title+'</h1>')
				
			}
			console.log(index, element);
		});	
	};
	
	pub.init = function(w, d) {
			
		
		prvt.$dom.loadContent.on('click', function(e) {
			e.preventDefault();
			$.ajax({
				url: 'http://makanmusik.com/?json=1',
				context: document.body,	
			}).done(function() {
				$(this).addClass('ajax-req-complete');
			}).success(function(data, textStatus, jqXHR) {

				prvt.processData(data);
				
			});
		});
	};
		
	return pub;
	
})(window, document, jQuery);

window.onload = app.init();