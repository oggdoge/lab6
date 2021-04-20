function books(){
	document.getElementById("book").style.visibility='visible';
	document.getElementById("movie").style.visibility='hidden';
	document.getElementById("music").style.visibility='hidden';
	document.getElementById("game").style.visibility='hidden';
}
function movies(){
	document.getElementById("movie").style.visibility='visible';
	document.getElementById("book").style.visibility='hidden';
	document.getElementById("music").style.visibility='hidden';
	document.getElementById("game").style.visibility='hidden';
}
function musics(){
	document.getElementById("music").style.visibility='visible';
	document.getElementById("movie").style.visibility='hidden';
	document.getElementById("book").style.visibility='hidden';
	document.getElementById("game").style.visibility='hidden';
}
function games(){
	document.getElementById("game").style.visibility='visible';
	document.getElementById("movie").style.visibility='hidden';
	document.getElementById("music").style.visibility='hidden';
	document.getElementById("book").style.visibility='hidden';
}