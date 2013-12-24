<?php
	include "OpenConnection.php";
	$username=$_POST['Username'];
	$message=$_POST['Message'];
	$st = $db->prepare ('INSERT INTO Messages (Username, Text) VALUES (?,?)');
	$data = array ($username, $message );
	$st->execute($data);
	include "CloseConnection.php";	
?>