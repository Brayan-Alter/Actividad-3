console.log("estoy en js")
<div>
      <label for="resul"></label>
    </div>
    <input type="button" value="suma" onclick="fSumar()">
    <input type="button" value="resta" onclick="fRestar()">
    <input type="button" value="multipliacion" onclick="fMultiplicar()">
    <input type="button" value="division" onclick="fDividir()">

let resultado = document.getElementsById("resul")

function fSumar(){
  let num1 = parseInt(n1.value)
  let num2 = parseInt(n2.value)
  //console.log(typeof(num1))
  let resultado = "La suma es: " + (num1+num2)
  document
  console.log(resultado)
}

function fRestar(){
  let num1 = parseInt(n1.value)
  let num2 = parseInt(n2.value)
  console.log("La resta es: " + (num1-num2))
}
function fMultiplicar(){
  let num1 = parseInt(n1.value)
  let num2 = parseInt(n2.value)
  console.log("La multiplicacion es: " + (num1*num2))
}
function fDividir(){
  let num1 = parseInt(n1.value)
  let num2 = parseInt(n2.value)
  if(num2===0)
  {console.log("La division entre cero (0) No es posible")}
  else{console.log("La division es: "+(num1/num2))}
}