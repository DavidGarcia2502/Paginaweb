function plegardesplegar(identificacion){
var elemento = document.getElementById(identificacion);
if(elemento.className == "visible"){
elemento.className = "invisible";
}
else{
elemento.className = "visible";
}
}
