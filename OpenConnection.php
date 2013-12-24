<?php 
	try{
		$host='localhost';
		$dbname='ex1';
		$user='hoanle';
		$pass='123456';

		//Connect DB
		$db = new PDO ('mysql:host='.$host.';dbname='.$dbname, $user, $pass);

		//Report ERROR
		//$db->setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch (Exception $exc){
		echo 'Error happened!';
		file_put_contents('log.txt', $exc->getMessage(). '\r\n', FILE_APPEND);
	}
?>