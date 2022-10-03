function habilita(){
    var option = document.getElementById("option").value;
 
    if(option !="0" ){ 
        document.getElementById("field1").disabled = false;
        document.getElementById("field2").disabled = false;
        document.getElementById("button").disabled = false;
       
        var labe1 = document.getElementById('label1');
        var labe2 = document.getElementById('label2');

        if (option == "1") {
            labe1.innerHTML  = "Lado b";
            labe2.innerHTML  = "Lado c";
        } else if (option == "2") {
            labe1.innerHTML  = "Lado a";
            labe2.innerHTML  = "Lado c";
        } else if (option == "3") {
            labe1.innerHTML  = "Lado a";
            labe2.innerHTML  = "Lado b";
        }

    }else{
        
        document.getElementById("field1").disabled = true;
        document.getElementById("field2").disabled = true;
        document.getElementById("button").disabled = true;
    }
}

function calcula(){
    var input1 = document.querySelector("#field1");
    var input2 = document.querySelector("#field2");
    var texto = input1.value;
    console.log(texto);
}


