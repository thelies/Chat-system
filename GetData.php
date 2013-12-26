<?php
	include "OpenConnection.php";
	$statement = $db->query ('SELECT ID, Username, Text FROM Messages');
	$statement->execute();
	$statement->setFetchMode (PDO::FETCH_ASSOC);
	$i=0;
	while ($row = $statement->fetch()){
		$data[$i]['ID']=$row['ID'];
		$data[$i]['Username']=$row['Username'];
		$data[$i]['Message']=$row['Text'];
		$i++;
	}
	$response['text']=$data;
	$jsonString=json_encode($response);
	echo $jsonString;
	include "CloseConnection.php";
?>