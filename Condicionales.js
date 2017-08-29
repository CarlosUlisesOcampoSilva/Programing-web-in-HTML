function condicionIf(){
    var numero= document.getElementById('numero').value; 
    var textoSalida = document.getElementById('textoSalida');
    var numero2= document.getElementById('numero2');
    
    console.log(textoSalida);
    
    if(numero >= 100){
        if(numero == 100){
            //alert("el numero es igual a 100");
            textoSalida.innerHTML = "<b>El numero: " + numero + " es igual a 100</b>";
        }else{
        //alert("El numero: "+numero +" es mayor a 100");
        textoSalida.innerHTML = "<b>El numero: "+ numero +" es mayor a 100</b>";
        }
    }else{
        //alert("El numero: "+ numero + " es menor a 100");
        textoSalida.innerHTML = "<b>El numero: "+ numero +" es menor a 100</b>";
    }
    var texto= "  if("+numero+" >= 100){\n"+
                 "alert('El numero:'"  +numero + "'es mayor a 100');\n"+
                 "}else{\n"+
                 "alert('El numero: '"+ numero + "' es menor a 100');\n"+
                 "}"+
                 ";";
         
    numero2.value= texto; 
}


function  condicionIfNot(){
    
       var numeroNot= document.getElementById('numeroNot').value; 
    var numeroNot2= document.getElementById('numeroNot2');
    var textoSalidaNot = document.getElementById('textoSalidaNot');
   
    if(!numeroNot >= 100){
        textoSalidaNot.innerHTML = "<b>El numero: "+ numeroNot +" es mayor a 100</b>";
       // alert("El numero: "+numeroNot +" es mayor 100");
    }else{
        textoSalidaNot.innerHTML = "<b>El numero: "+ numeroNot +" no es mayor o igual 100</b>";
       // alert("El numero: "+ numeroNot + " no es mayor o igual 100");
    }
   
    
    
     var texto= "  if(!"+numeroNot+" >= 100){\n"+
                 "alert(El numero: "+ numeroNot +" es mayor a 100);\n"+
                 "}else{\n"+
                 "alert('El numero: "+ numeroNot + " no es mayor o igual a 100);\n"+
                 "}"+
                 ";";
         
      numeroNot2.value= texto;  
    
}


function  condicionIfAND(){
    
       var numeroAND=document.getElementById('numeroAND').value; 
       var numeroAND1=document.getElementById('numeroAND1').value;
       var numeroAND2=document.getElementById('numeroAND2');
       var textoSalidaAND=document.getElementById('textoSalidaAND');
    if((numeroAND>=100) && (numeroAND1 >= 100)){
        
        textoSalidaAND.innerHTML = "Las dos condiciones se cumplen";
        //alert("Las dos condiciones se cumplen");
    }else{
        textoSalidaAND.innerHTML = " una o ambas condiciones no se cumplen";
       // alert("Una o ambas condiciones no se cumplen");
    }
   
    
    
     var texto= "  if(("+numeroAND+" >= 100) && ("+numeroAND1+ " >= 100)){\n"+
                 "alert('Las dos condiciones se cumplen');\n"+
                 "}else{\n"+
                 "alert('Una o ambas condiciones no se cumple')\n"+
                 "}"+
                 ";";
         
      numeroAND2.value= texto;  
    
}


function  condicionIfOR(){
    
       var numeroOR=document.getElementById('numeroOR').value; 
       var numeroOR1=document.getElementById('numeroOR1').value;
       var numeroOR2=document.getElementById('numeroOR2');
       var textoSalidaOR=document.getElementById('textoSalidaOR')
   
    if((numeroOR >= 100)||(numeroOR1 >= 100)){
        
        textoSalidaOR.innerHTML="una o ambas condiciones son correctas la condicion se cumple";
             
       // alert("Una condicion o ambas son correctas ");
      
    }else{
        
        textoSalidaOR.innerHTML="Ninguna de las condiciones se cumple";
    }
   
    
    
     var texto= "  if(("+numeroOR+" >= 100) || ("+numeroOR1+ " >= 100 )){\n"+
                 "alert('Una condicion o ambas son correctas') \n"+
                 "}else{\n"+
                 "alert('Ninguna de las condiciones se cumple')\n"+
                 "}"+
                 ";";
         
      numeroOR2.value= texto;  
    
}


function CondicionSwitch(){
    
    var diaSemana = document.getElementById('diaSemana').value;
    var diaSemana2=document.getElementById('diaSemana2');
    var textoSalidaSwitch=document.getElementById('textoSalidaSwitch');
    
    switch (diaSemana){ 
        case "1":
            textoSalidaSwitch.innerHTML="Lunes";
        //    alert("lunes");
            break;
        case "2":
            textoSalidaSwitch.innerHTML="Martes";
         //  alert("Martes");
           break;
        case "3":
            textoSalidaSwitch.innerHTML="Miercoles";
         //  alert("Miercoles");
           break;
        case "4":
            textoSalidaSwitch.innerHTML="Jueves";
         //  alert("Jueves");
           break;
        case "5":
            textoSalidaSwitch.innerHTML="Viernes";
         //  alert("Viernes");
        case "6":
            textoSalidaSwitch.innerHTML="Sabado";
         //  alert("sabado");
           break;
        case "7":
            textoSalidaSwitch.innerHTML="Domingo";
         //  alert("Domingo");
           break;
    
            default:
            textoSalidaSwitch.innerHTML="Una semana se compone solamente de 7 días, porfavor vuelva a intentarlo";
          //  alert("una semana se compone solamente de 7 días, porfavor vuelva a intentarlo");
            break;
    }         
            
        var texto= " var diaSemana = "+ diaSemana+";\n"+
         "switch (diaSemana){\n"+ 
        "case 1:\n"+
            "alert('lunes');\n"+
            "break;\n"+
        "case 2:\n"+
           "alert('Martes');\n"+
           "break;\n"+
        "case 3:\n"+
           "alert('Miercoles');\n"+
           "break;\n"+
        "case 4:\n"+
           "alert('Jueves');\n"+
           "break;\n"+
        "case 5:\n"+
           "alert('Viernes');\n"+
        "case 6:\n"+
           "alert('sabado');\n"+
           "break\n;"+
        "case 7:\n"+
           "alert('Domingo');\n"+
           "break;\n"+
           "default:\n"+
            "alert('una semana se compone solamente de 7 días, porfavor vuelva a intentarlo');\n"+
            "break;";
            
       diaSemana2.value=texto;
               
}
