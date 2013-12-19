<?php
	//echo 'cong hoa xa hoi';
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
	
		if(isset($_POST['messageBox'])){
			//echo 'Trong khi nhan $_POST';
			$message=$_POST['messageBox'];
			//echo $message;
			$st = $db->prepare ('INSERT INTO Messages (Username, Text) VALUES (?,?)');
			$data = array ('DefaultUser', $message );
			$st->execute($data);
		}

	$statement = $db->query ('SELECT Username, Text FROM Messages');
	$statement->execute();
	$statement->setFetchMode (PDO::FETCH_ASSOC);
	//echo 'So hang lay duoc'.$statement->rowCount();
?>
<html>
	<title>Simple chat system</title>
	<body>
		<h1>Simple chat system</h1>
		<form action='ChatPage.php' method='post'>
			<div rows='10' cols='30'>
				<?php
					while ($row = $statement->fetch()){
						echo $row['Username'].'=>';
						echo $row['Text'].'<br>';
					}
				?>
			</div><br>
			Messages: <input type='text' name='messageBox'>
			<input type='submit' value='send'>
		</form>
	</body>
</html>