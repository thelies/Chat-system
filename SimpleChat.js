//Add child node (input tag) inside div tag and change button name
function Func_Edit(messageID){
	var ID=messageID;

	var divTextID="divText_"+messageID;
	var divText=document.getElementById(divTextID);
	var message=divText.innerHTML;

	var newText=prompt("Please enter your new message", message);
	if (newText!=null){
		var param="ID="+ID+"&Text="+newText;
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

	xmlhttp.open("POST","Update.php",true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(param);
	}
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
}

//reload content of page after a period time 
function reload(){
	setInterval(function(){myTimer()}, 1000);
	//myTimer();
}
function myTimer()
{
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
			
			document.getElementById("wrapper").innerHTML="";
			var receivedText=xmlhttp.responseText;
			var message=eval("(" + receivedText + ")");			

			for(var i=0; i<message.text.length;i++)
			{
				//console.log(message.text[i]);
				var ID=message.text[i].ID;
				console.log(ID);
				var divMess=document.createElement('div');
				divMess.id="divMess_"+message.text[i].ID;
				divMess.className="divMess";

				var divText=document.createElement('div');
				divText.id="divText_"+message.text[i].ID;
				divText.className='divText';
				divText.innerHTML=message.text[i].Message;

				var divButton=document.createElement('div');
				divButton.className="divButton";
				divButton.innerHTML="<button onclick=Func_Edit("+ID+") >Edit</button>"
									+"<button onclick=Func_Delete("+ID+") >Delete</button>";

				divMess.appendChild(divText);
				divMess.appendChild(divButton);

				document.getElementById("wrapper").appendChild(divMess);

			}
			
		}
	}

	xmlhttp.open("POST","GetData.php",true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send();
	
}



//Submit messages
function Func_Submit(){
	var message=document.getElementById('message').value;
	document.getElementById('message').value="";
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
	//return false;
}


//detect enter in textbox
function DetectEnter()
{
	var x;
	if(window.event) // IE8 and earlier
		{
			x=event.keyCode;
		}
	else if(event.which) // IE9/Firefox/Chrome/Opera/Safari
		{
			x=event.which;
		}
	keychar=String.fromCharCode(x);
	if(x==13)
		Func_Submit();
}
