function myClick(){
    var text="";
    for(var i=0;i<5;i++){
        text += "The number is "+i+"<br>";
    }
     document.getElementById("test").innerHTML=text;
}