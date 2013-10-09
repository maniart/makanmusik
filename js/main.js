var app = (function(w, d, $){
	'use strict';
		
				
	var $DOM = {};
	$DOM.body = $('body');
	$DOM.container = $('.container');
	$DOM.ajaxLoader = $('.ajax-loader');
	
	var template,
	compiledTemplate,
	
	pathTo = function(pathFromThemeRoot) {
		var basePath = 'wp-content/themes/makanmusik/';
		return 	basePath + pathFromThemeRoot;
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
	
	init = function() {
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