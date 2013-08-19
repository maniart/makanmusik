var app = (function(w, d, $){
	'use strict';
	
	// private 
	var prvt = {},
		pub = {},
		that = this;
		
				
	prvt.$dom = {};
	prvt.$dom.body = $('body');
	prvt.$dom.container = $('.container');
	prvt.template = $('<div class="post"><h3 class="title"></h3><div class="content"></div></div>');
	
	pub.init = function() {		
		$.getJSON('http://makanmusik.com/?json=1')
		.done(function(data) {
			var $posts = $(data.posts);
			console.log($posts);
			$posts.each(function(index, item) {
				var template = prvt.template.clone(true),
					title = template.find('.title'),
					content = template.find('.content'); 
				title.text(item['title']);
				content.html(item['excerpt']);
				prvt.$dom.container.append(template);				
			});
		})
		.fail(function(jqxhr, textStatus, error) {
			var err = textSTatus + ', ' + error;
			console.log('Request Failed: ' + err);
		});
		
	};
		
	return pub;
	
})(window, document, jQuery);

window.onload = app.init();