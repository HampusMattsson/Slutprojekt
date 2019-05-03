var antal = 0;
var fragor = 10;

var svar = ["playstation2", "usbc", "c++", "grafikkort", "google", "dongle", "qi", "2011", "html", "binäratalsystemet"]
var froga = ["Vad heter denna konsoll?", "Vad heter denna kontakt?", "Vad heter detta programmeringsspråk?", "Vad är detta för något?", 
"Vilka är skaparna av denna webbsida?", "Vad kallas en sån här?", "Vad heter standarden som iPhones använder för trådlös laddning?", "När dog denna herre?",
"Vad heter detta för märksspråk?", "Vad heter talsystemet som datorer använder sig av?"]

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


	if (forsok==10){
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