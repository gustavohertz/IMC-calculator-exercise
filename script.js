function IMC(){
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let imc = parseFloat(peso) / parseFloat(altura) **2;
  alert(imc.toFixed(2));
  if(imc<18.5){
    alert("magreza");
  }
  else if(imc>=18.5 && imc<=24.9){
    alert("normal");
  }
  else if(imc>=25 && imc<=29.9){
    alert("sobrepeso");
  }
  else if(imc>=30 && imc<=39.9){
    alert("obesidade");
  }
  else if(imc>=40){
    alert("obesidade morbida")
  }
  else{
    alert("dado invalido")
  }
}
IMC();
