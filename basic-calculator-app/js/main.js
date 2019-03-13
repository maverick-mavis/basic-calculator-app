function add(){
	var num1 = document.getElementById("fNum").value;
	var num2 = document.getElementById("sNum").value;
	document.getElementById("result").innerHTML = parseFloat(num1) + parseFloat(num2);
}

function subtract(){
	var num1 = document.getElementById("fNum").value;
	var num2 = document.getElementById("sNum").value;
	document.getElementById("result").innerHTML = num1 - num2;
}

function multiply(){
	var num1 = document.getElementById("fNum").value;
	var num2 = document.getElementById("sNum").value;
	document.getElementById("result").innerHTML = num1 * num2;
}

function divide(){
	var num1 = document.getElementById("fNum").value;
	var num2 = document.getElementById("sNum").value;
	document.getElementById("result").innerHTML = num1 / num2;
}