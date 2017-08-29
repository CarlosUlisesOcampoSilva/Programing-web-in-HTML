function union(){
    var palabra = document.getElementById('palabra').value;
    var palabra2 = document.getElementById('palabra2').value;
    var palabra4 = document.getElementById('palabra4');
    
    
    var palabra3 = palabra + "" + palabra2
    document.getElementById("pal").value= palabra3;
   
  var texto = " Y aquí hay un ejemplo de como sería el metodo\n"+
           " var   cadena  = " + palabra  +  "\n" +
           " var   cadena2 = " + palabra2 +  ")\n"+
          " { \n "+
          "document.write (' palabra  + palabra2 ' )\n ";
  
  palabra4.value = texto; 
    
}
