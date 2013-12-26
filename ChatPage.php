<html>
	<head>
		<title>Simple chat system</title>
		<script type="text/javascript" src="SimpleChat.js"></script>
		<link rel="stylesheet" type="text/css" href="SimpleChat.css">
	</head>

	<body onload= "reload()" >
		<div id="chatWindows">
			<h1>Simple chat system</h1>
			<div id="wrapper">
			</div>
			<div id="inputBox">
				Messages: <input type='text' name='messageBox' id='message' onkeypress="DetectEnter()">
				<input id= 'submit' type='submit' value='send' onclick="Func_Submit()">
			</div>
		</div>
	</body>
</html>