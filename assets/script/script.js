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
        document.getElementById("result").style.display = "none";
    }
}

function resultado(){
    document.getElementById("result").style.display = "block"
    var option = document.getElementById("option").value;

    var num1 = document.getElementById("field1").value;
    var num2 = document.getElementById("field2").value;
    var resultado = 0;
    var result = document.getElementById('result_text')
    
    if (option == "1") {
        labe1.innerHTML  = "Lado b";
        labe2.innerHTML  = "Lado c";


    } else if (option == "2") {
        labe1.innerHTML  = "Lado a";
        labe2.innerHTML  = "Lado c";


    } else if (option == "3") {

        resultado = Math.hypot(num1, num2);
        result.innerHTML = resultado;

}
}


