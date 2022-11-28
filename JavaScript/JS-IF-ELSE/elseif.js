document.getElementById("btn1").onclick = function()
{
	
if(document.getElementById("in1").value >=80 && document.getElementById("in1").value < 100 )
	{
		document.getElementById("para").innerHTML="A Report";
	}
else if (document.getElementById("in1").value >70 && document.getElementById("in1").value < 80 )
	{
		document.getElementById("para").innerHTML="B Report";
	}
else if (document.getElementById("in1").value >60 && document.getElementById("in1").value < 70 )
	{
		document.getElementById("para").innerHTML="C Report";
	}
else if (document.getElementById("in1").value >50 && document.getElementById("in1").value < 60 )
	{
		document.getElementById("para").innerHTML="D Report";
	}
else if (document.getElementById("in1").value <50 )
	{
		document.getElementById("para").innerHTML="F Report";
	}
else if (document.getElementById("in1").value == "abc" || document.getElementById("in1").value == "jkl" )
	{
		document.getElementById("para").innerHTML="That's an OR Function";
	}
else
	{
		document.getElementById("para").innerHTML="Please Check! It may not be a number";
	}
}
