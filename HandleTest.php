<?php 
	for($i=0;$i<10;$i++)
	{
		$data[$i]['ID']=$i;
		$data[$i]['Username']='User'.$i;
		$data[$i]['Message']='Message'.$i;
	}
	$response['text']=$data;
	$jsonString=json_encode($response);
	echo $jsonString;
?>