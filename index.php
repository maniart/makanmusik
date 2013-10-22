
<!doctype html>
<html>
	<head>
		<?php $themePath = 'http://makanmusik.com/wp-content/themes/makanmusik/'; ?>
		<script type="text/x-handlebars-template" src="<?php echo $themePath."js/templates/tracks.js"?>"></script>
		<script type="text/javascript" src="<?php echo $themePath."js/vendor/handlebars.js"?>"></script>
		<link rel="stylesheet" type="text/css" href="<?php echo $themePath."style.css"?>">
		<title>Makan Ashgvari : Musician</title>
	</head>
	<body>	
		<ul>
			<li><a href="/#music">music</a></li>
			<li><a href="/#video">videos</a></li>
			<li><a href="/#news">news</a></li>
			<li><a href="/#about">about</a></li>
		</ul>
		<div class="ajax-loader">
		</div>
		<div class="container">
		</div><!-- .ctonainer -->
		
		<!-- The sound of silence. -->
		
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
		<script type="text/javascript" src="<?php echo $themePath."js/vendor/jquery.jplayer.js"?>"></script>
		<script type="text/javascript" src="<?php echo $themePath."js/main.js"?>"></script>
	</body>
	
</html>