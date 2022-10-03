var button = document.getElementById('button');


function habilita(){

    var option = document.getElementById("option").value;
 
    if(option !="0" ){ 
        document.getElementById("field1").disabled = false;
        document.getElementById("field2").disabled = false;
        document.getElementById("button").disabled = false;
    }else{
        document.getElementById("field1").disabled = true;
        document.getElementById("field2").disabled = true;
        document.getElementById("button").disabled = true;
    }

}
