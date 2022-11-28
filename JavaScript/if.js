document.getElementById("btn1").onclick = function()
{
	
	if(document.getElementById("box1").checked)
		{
			document.getElementById("para").innerHTML="It is a VISA CARD";
		}
	else if(document.getElementById("box2").checked)
		{
			document.getElementById("para").innerHTML="It is a MASTER CARD";
		}
	else if(document.getElementById("box3").checked)
		{
			document.getElementById("para").innerHTML="It is an AMERICAN EXPRESS";
		}
	else
		{
			document.getElementById("para").innerHTML="Please select a card";
		}
}
