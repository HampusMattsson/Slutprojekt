var antal = 0;
var fragor = 10;

var svar = ["programmeringsspråk", "modul", "python"]
var froga = ["Vad är Python för något?", "Vad är Turtle?", "Vad heter detta programmeringsspråk?"]

var forsok = 0;

function checkAnswer(){
	var answer = document.getElementById("answer").value;

	fragor=(fragor-1);

	if (answer == svar[forsok]){
		console.log("du hade rätt");
		antal++;
	} else{
		console.log("du hade FEL");
	}

	var hejsan = document.getElementById('bild');
	hejsan.classList.remove('bild'+forsok);
	forsok++;
	hejsan.classList.add('bild'+forsok);

	document.getElementById("visa").innerHTML = "Dina antal rätt: "+(antal);
	document.getElementById("kvar").innerHTML = "Antal frågor kvar: "+(fragor);
	document.getElementById("answer").innerHTML = '';

	document.getElementById("froga").innerHTML = (froga[forsok]);


	if (forsok==3){
		console.log("test")

		document.getElementById("froga").innerHTML = "Grattis du fick "+(antal)+" rätt!";
		hejsan.classList.remove('bild9');
		hejsan.classList.remove('storlek');

		var block = document.getElementById('input');
		block.classList.add('input');

		var fin = document.getElementById('froga');
		fin.classList.add('hopp');

		document.getElementById("visa").innerHTML = "";
		document.getElementById("kvar").innerHTML = "";
	}

	
	return false;
}