<?php
	include "OpenConnection.php";
	$ID=$_POST['ID'];
	$newText=$_POST['Text'];
	$st=$db->prepare('UPDATE Messages SET Text=? WHERE ID=?');
	$data=array($newText, $ID);
	$st->execute($data);
	echo $newText;
	include "CloseConnection.php";	
?>