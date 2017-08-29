function reloj() {
        var hoy=new Date();
        var h=hoy.getHours();
        var m=hoy.getMinutes();
        var s=hoy.getSeconds();
            
        m = actualizarHora(m);
        s = actualizarHora(s);
            
        document.getElementById('displayReloj').innerHTML = h+":"+m+":"+s;
        var t = setTimeout(function(){reloj();},500);
}

function actualizarHora(i) {
    
    if (i<10)
        {
            i = "0" + i;
        } // Añadir el cero en números menores de 10

    return i;
}


/* Texto animado */
var velocidad=150;



function animar(){
 letras=new Array();
 var texto="for(i=0;i<texto.length;i++)\n   {\n    letras[i]=texto.charAt(i);	//asigna a letras uno a uno los caracteres de texto\n   }\n mueveLetras();\n}       ©Carlos Ulises Ocampo Silva    ";
 for(i=0;i<texto.length;i++)
   {
    letras[i]=texto.charAt(i);	//asigna a letras uno a uno los caracteres de texto
   }
 mueveLetras();
}




function animar2(){
 letras=new Array();
 var texto="HTML5 provee básicamente tres características: estructura, estilo y funcionalidad. Nunca "+
"fue declarado oficialmente pero, incluso cuando algunas APIs (Interface de Programación "+
"de Aplicaciones) y la especificación de CSS3 por completo no son parte del mismo, HTML5 "+
"es considerado el producto de la combinación de HTML, CSS y Javascript. Estas tecnologías "+
"son altamente dependientes y actúan como una sola unidad organizada bajo la "+
"especificación de HTML5. HTML está a cargo de la estructura, CSS presenta esa estructura "+
"y su contenido en la pantalla y Javascript   ©Carlos Ulises Ocampo Silva    ";
 for(i=0;i<texto.length;i++)
   {
    letras[i]=texto.charAt(i);	//asigna a letras uno a uno los caracteres de texto
   }
 mueveLetras();
}

function animar3(){
 letras=new Array();
 var texto="JavaScript (abreviado comúnmente JS) es un lenguaje de programación "+ 
           "interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,"+
           "basado en prototipos, imperativo, débilmente tipado y dinámico.\n"+
           "Se utiliza principalmente en su forma del lado del cliente (client-side),"+ 
           "implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas "+
           "web dinámicas aunque existe una forma de JavaScript del lado del servidor (Server-side JavaScript o SSJS).\n"+ 
           "Su uso en aplicaciones externas a la web, por ejemplo en documentos PDF, aplicaciones de escritorio "+ 
           "(mayoritariamente widgets) es también significativo.   ©Carlos Ulises Ocampo Silva    ";
 for(i=0;i<texto.length;i++)
   {
    letras[i]=texto.charAt(i);	//asigna a letras uno a uno los caracteres de texto
   }
 mueveLetras();
}


//Función para explicar funcionamiento de condicionales dentro de javaScript
function animarCondicion(){
 letras=new Array();
 var texto="if(condicion <= 100){\n"+
           "alert(El numero que digitaste es menor o igual a 100);\n"+
           " } else {\n"+
           " alert(El numero que digitaste es mayor a 100);\n"+
           "}\n"+
           "©Carlos Ulises Ocampo Silva........ xD....";
 for(i=0;i<texto.length;i++)
   {
    letras[i]=texto.charAt(i);	//asigna a letras uno a uno los caracteres de texto
   }
 mueveLetras();
}

//Función para explicar funcionamiento de condicionales dentro de javaScript
function animarCondicionNot(){
 letras=new Array();
 var texto="if(!condicion1 >= 100) {\n"+ 
           "alert('Es menor a 100');\n"+
           "}else{\n"+
           "alert('Es mayor o igual a 100');\n"+
           "}\n"+
           "©Carlos Ulises Ocampo Silva.......... xD ....";
 for(i=0;i<texto.length;i++)
   {
    letras[i]=texto.charAt(i);	//asigna a letras uno a uno los caracteres de texto
   }
 mueveLetras();
}


var TextoAct="";
var n=-1;

function mueveLetras(){
 n++;
 TextoAct += letras[n];
 document.forms[0].OtroTexto.value=TextoAct;
 if(n==letras.length-1)
   {
    n=-1;
    TextoAct="";
   }
 setTimeout("mueveLetras()",velocidad);
}
