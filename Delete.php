<?php
	include "OpenConnection.php";
	$ID=$_POST['ID'];
	//var_dump($_POST);
	echo $ID;
	$db->exec('DELETE FROM Messages WHERE ID="'.$ID.'"');
	include "CloseConnection.php";	
?>