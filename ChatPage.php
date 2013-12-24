<?php
	//echo 'cong hoa xa hoi';
	include "OpenConnection.php";
	$statement = $db->query ('SELECT ID, Username, Text FROM Messages');
	$statement->execute();
	$statement->setFetchMode (PDO::FETCH_ASSOC);
	//echo 'So hang lay duoc'.$statement->rowCount();
?>
<html>
	<head>
		<title>Simple chat system</title>
		<script type="text/javascript" src="SimpleChat.js"></script>
	</head>

	<body>
		<h1>Simple chat system</h1>
		<!--<form action='ChatPage.php' method='post'>-->
			<div>
				<?php
					while ($row = $statement->fetch()){
						echo '<div id="divMess_'.$row['ID'].'">';
							echo $row['Username'];
							echo '<div id="divText_'.$row['ID'].'">'.$row['Text'].'</div>';
							//echo $row['Text'].'<br>';
							echo '<button id="edit_'.$row['ID'].'" onclick="Func_Edit('.$row['ID'].')">Edit</button>';
							echo '<button id="delete_'.$row['ID'].'" onclick="Func_Delete('.$row['ID'].')">Delete</button><br>';
						echo '</div>';
					}
				?>
			</div><br>
			Messages: <input type='text' name='messageBox' id='message'>
			<input type='submit' value='send' onclick="Func_Submit()">
		<!--</form>-->
	</body>
</html>
<?php 
//Thieu dong connect voi mysql
	include "CloseConnection.php";
?>
