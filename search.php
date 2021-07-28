<?php
include 'dbConnect.php';
     function getAll(){

	$conn = connect();
	$stmt = $conn->prepare("SELECT * FROM users");
	
	$stmt->execute();
	$record = $stmt->get_result();
	return $record->fetch_all(MYSQLI_ASSOC);
}
function getUser($userName){

	$conn = connect();
	$stmt = $conn->prepare("SELECT * FROM users WHERE userName=?");
	$stmt->bind_param("s",$userName);
	$stmt->execute();
	$record = $stmt->get_result();
	return $record->fetch_all(MYSQLI_ASSOC);
}
if(!empty($_GET['search'])or empty($_GET['userName']))
	{
       $userList = getUser($_GET['userName']);
	}
echo"<table cellspacing='0' border='1'>";
     echo"<tr>";
    echo" <th>ID</th>";
	 echo"<th>First Name</th>";
	 echo"<th>Last Number</th>";
	echo" <th>User Name</th>";
	
     echo"</tr>";
     for ($i=0; $i <count($userList) ; $i++) { 
     	echo"<tr>";
    echo" <th>" .$userList[$i]["id"] ."</th>";
	 echo"<th>" .$userList[$i]["fname"] . "</th>";
	 echo"<th>".$userList[$i]["lname"] ."</th>";
	echo" <th>".$userList[$i]["userName"] ."</th>";
     echo"</tr>";

     }
     echo"</table>";

	?>