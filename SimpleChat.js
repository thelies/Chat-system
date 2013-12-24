//Add child node (input tag) inside div tag and change button name
function Func_Edit(messageID){
	var divTextID="divText_"+messageID;
	var divText=document.getElementById(divTextID);
	var message=divText.innerHTML;
	
	document.getElementById('message').value=message;
	var editID="edit_"+messageID;
	document.getElementById(editID).innerHTML="Editing";
}

//Delete message
function Func_Delete(messageID){

	var param="ID="+messageID;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  	xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			//alert(xmlhttp.responseText);
		}
	}

	xmlhttp.open("POST","Delete.php",true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(param);
	//alert(param);
}


//Submit messages
function Func_Submit(){
	var message=document.getElementById('message').value;
	var param="Username=DefaultUser&Message="+message;
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  	xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }

	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			//alert(xmlhttp.responseText);
		}
	}

	xmlhttp.open("POST","Submit.php",true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(param);
	return false;
}
