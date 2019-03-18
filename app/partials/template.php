<?php 
	session_start();
 ?>

<!DOCTYPE html>
<html lang="en">
<head>

	  <meta charset="utf-8">
	  <title>Jeffrey Palanas | Web Developer</title>
	  <!-- <meta name="description" content="particles.js is a lightweight JavaScript library for creating particles."> -->


<!-- 	  <meta name="author" content="Vincent Garreau" /> -->
	  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	 
	   <!-- font awesome -->
	  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">


	<link rel="icon" type="image" href="app/assets/images/fav.jpg">
	<!-- 	googlefonts -->
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="./app/assets/css/style.css">
	<link rel="stylesheet" href="./app/assets/css/animate.css">
	<!-- Bootstrap -->
	
	<!-- Custom CSS -->

	<!-- Bootstrap JS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<!-- Jquery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	<!-- Popper -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
</head>
<body >
	
	<?php 
		require_once 'header.php';

     get_page_content();
   

    require_once 'footer.php';
	?>
	

	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>