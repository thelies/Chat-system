<?php
	include "OpenConnection.php";
	$ID=$_POST['ID'];
	echo $ID;
	$db->exec('DELETE FROM Messages WHERE ID="'.$ID.'"');
	include "CloseConnection.php";	
?>