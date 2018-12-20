document.querySelector(".calcular").addEventListener("click", function soma() {
 a = parseInt(document.getElementById("valor1").value);
 b = parseInt(document.getElementById("valor2").value);

 if (a>0 && b>0) {

    var resp = a+b;
    alert(resp);
     
 }else{
     alert("informe um valor");
 }
    
})
