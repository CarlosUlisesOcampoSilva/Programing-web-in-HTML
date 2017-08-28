var contador;

function condicionFor(){
    var numero = document.getElementById('numero').value;
    var inicio = document.getElementById('inicio').value;
    contador = inicio; 
    var forSalida = document.getElementById('forSalida');
         
    forSalida.innerHTML = 'inicio: ' + inicio + '&nbsp;&nbsp;' + 'numero: ' + numero + '<br/>';
    setTimeout(cicloFor, 1000, forSalida, numero);
        //document.write("El número es " + inicio +"<br />");
}

function cicloFor(forSalida, numero){ 
    if (contador <= numero) {
        forSalida.innerHTML += 'El número es ' + contador + '<br/>';
        contador++;
        setTimeout(cicloFor, 1000, forSalida, numero);
    }
    
}

function cicloWhile(){
    var numerowh = document.getElementById('numerowh').value;
    var whileSalida = document.getElementById('whileSalida');
    var contador = i;
    var i=0;

    while (i<=numerowh){
     //   document.write("El número es " + i);
      //  document.write("<br />");
      
         }
             
      whileSalida.innerHTML = 'inicio: '+ i + '&nbsp;&nbsp;' + 'numero: ' + numerowh + '<br/>';
    setTimeout(bucleWhile, 1000, bucleWhile, numerowh);
      i++;  
         
         
}

function bucleWhile(whileSalida, numerowh){ 
    if (contador <= numerowh) {
        whileSalida.innerHTML += 'El número es ' + contador + '<br/>';
        contador++;
        setTimeout(bucleWhile, 1000, whileSalida, numerowh);
    }
    
}



function cicloDoWhile(){
    var numeroDowh = document.getElementById('numeroDowh').value;
    var i=0;
    
    do{
         i++;
       document.write("El número es " + i);
       document.write("<br />");
        
       

}while (i<numeroDowh);
    
}
