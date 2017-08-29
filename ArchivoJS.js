alert('B I E N V E N I D O   A   E S T A   P A G I N A');
var ingresar=prompt("I N G R E S E   S U   N O M B R E ");
alert("  . E m p e c e m o s   e s t e  T U T O R I A L  " + ingresar);


////  "EFECTO MAQUINA"
//  Este nos ayudara a presentar texttto con la aparriencia que
//  el texto lo esta escribiendo una maquina.
var velocidad=200;
function animar(){
 letras=new Array();
 var texto="                                                  ¿Sabes que es una clase String?  \n\n\
 En javascript las variables de tipo texto son objetos de la clase String. \n\
Esto quiere decir que cada una de las variables que creamos de tipo texto tienen\n\
 una serie de propiedades y métodos. \n\ ";
 for(i=0;i<texto.length;i++){
    letras[i]=texto.charAt(i);}	//asigna a letras uno a uno los caracteres de texto
     mueveLetras();
 }
var TextoAct="";
var n=-1;
function mueveLetras(){
 n++;
 TextoAct += letras[n];
 document.forms[0].Texto.value=TextoAct;
 if(n==letras.length-1){
    n=-1;
    TextoAct="";}
 setTimeout("mueveLetras()",velocidad);
}

//Anuncio con parpadeo
window.setInterval (BlinkIt, 500);
var color = "red";

function BlinkIt () {
var blink = document.getElementById ("blink");
color = (color == "#ffffff")? "red" : "#ffffff"; 
blink.style.color = color;
blink.style.fontSize='120px';}

// Dice que numero de visitante eres        
var ran
ran = Math.round(Math.random()*200)
document.write(" --------------- >  Usted es el visitante "  + ran +  " de esta pagina.-------------" );
document.write("");
document.write(new Date());//Fecha               


