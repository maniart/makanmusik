var app = (function(w, d, $){
	'use strict';
		
				
	var $DOM = {};
	$DOM.body = $('body');
	$DOM.container = $('.container');
	$DOM.ajaxLoader = $('.ajax-loader');
	
	var template,
	compiledTemplate,
	
	pathTo = function(pathFromThemeRoot) {
		var basePath = 'http://makanmusik.com/wp-content/themes/makanmusik/';
		return 	basePath + pathFromThemeRoot;
	},
	
	router = function() {
		var hash = w.location.hash.slice(1);
		switch(hash) {
			case 'music':
				// route to music section
				console.log('loading music');
			break;
			case 'video':
				// route to video section
				console.log('loading video');
			break;
			case 'news':
				// route to news
				console.log('loading news');
			break;
			case 'contact':
				// route to contact
				console.log('loading contact');
			break;
			case 'about':
				// route to about
				console.log('loading about');
			break;
			default:
				// route to home
				console.log('default to home');
			break;	
		} 		
	},
	
	fetchTemplate = function() {
		$.ajax({
			url: pathTo('templates/tracks.handlebars'),
			type: 'POST',
			dataType: 'text'	
		})
		.done(function(loadedTemplate) {
			template = loadedTemplate;
			compiledTemplate = Handlebars.compile(template);
			console.log('template loaded');
			$(d).trigger('templateLoaded');			
		})
		.fail(function(jqxhr, textStatus, error) {
			var err = textSTatus + ', ' + error;
			console.log('Request for template Failed: ' + err);
		});	
	},
	
	render = function() {		
		console.log('render');
		$.ajax({
			url: 'api/get_posts/?post_type=tracks',
			type: 'POST',
			dataType: 'json'	
		})
		.done(function(data) {
			console.log(data);
			var context = data;
			$DOM.ajaxLoader.fadeOut(200);
			$DOM.container.html(compiledTemplate({ posts : context.posts }));
		})
		.fail(function(jqxhr, textStatus, error) {
			var err = textSTatus + ', ' + error;
			console.log('Request for API Failed: ' + err);
		});
		
	},
	
	attachEvents = function() {
		w.addEventListener('hashchange', function() {
			console.log('hash just changed');	
			router();
		});
	},
	
	init = function() {
		attachEvents();
		router();
		fetchTemplate();
		$(d).on('templateLoaded', function() {
			render();
		});	
	};
		
	return {
		init: init
	};
	
})(window, document, jQuery);

window.onload = app.init();