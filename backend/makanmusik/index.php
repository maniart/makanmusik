<!doctype html>
<html>
	<?php
		$themePath = 'wp-content/themes/makanmusik/';
	?>
	<head>
		<link rel="stylesheet" type="text/css" href="<?php echo $themePath."style.css"?>">
		<title>
			makanmusik 
		</title>
	</head>
	<body>
		<h3>
			<?php
				echo 'makanmusik';
			?>
		</h3>		
		<a href="#" class="load-content">Load</a>
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>
		<script type="text/javascript" src="<?php echo $themePath."js/main.js"?>"></script>
	</body>
	
</html>