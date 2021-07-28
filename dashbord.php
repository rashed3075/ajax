
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Dashbord</title>
	<script src="validation.js"></script>
</head>
<body>
<?php
include 'dbConnect.php';
$fname = $lname = $userName="";
session_start();
	if(!isset($_SESSION['userName'])){
		header("location: login.php");
	}
	$fname = $_SESSION['fname'];
	$lname = $_SESSION['lname'];
	$userName = $_SESSION['userName'];

	 
	?>
<h1><?php echo "Welcome ".$fname ." " .$lname; ?></h1>
<form action="search.php" method="GET" name="search" onsubmit="search(this)return false;"> 
	<input type="text" name="userName" placeholder="Username">
	<span id="errorMsg" style="color: red;" name="errorMsg"></span>
	<input type="submit" name="search" value="search">
</form><br><br>

	<h1 id="fname"></h1><br>
	<h1 id="lname"></h1><br>
	<h1 id="userName"></h1><br>

</body>
</html>