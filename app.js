import { NormalKeyboard } from "./assets/modules/hmtlModules/normalKeyboard.js";
import { CientificKeyboard } from "./assets/modules/hmtlModules/cientificKeyboard.js";

let calculateFunctionDepth = 0;
let $ = element => document.querySelector(element)



window.onload = render

function render(){
  NormalKeyboard()
  CientificKeyboard()







  $("#normalCalcKeyboard").addEventListener("click",(event)=>{
    let targetButton = $(`#${event.target.id}`)
    if(event.target.id == "float"  && Boolean(calculateFunctionDepth)){
      $("#screenInput").value += " , ";
      return
    }
    if(event.target.id == "closeParenthesis" && Boolean(calculateFunctionDepth)){
      calculateFunctionDepth--;
    }

    if(event.target.id == "percent"){
      calculateFunctionDepth++
      $("#screenInput").value += " percent( ";
      return
    }
    if(event.target.id == "equal"){
      computeScreen();
      return
    }
    if(event.target.id == "clean"){
      resetScreen();
      return
    }
    pressedValue(targetButton.innerHTML)
  })






  $("#advancedCalcKeyboard").addEventListener("click",(event)=>{
    let targetButton = $(`#${event.target.id}`)
    if(targetButton.innerHTML == "RAD" || targetButton.innerHTML == "DEG" ||  targetButton.innerHTML == "Ans" ){
      return
    }
    
    if(targetButton.innerHTML == "π" ||  targetButton.innerHTML == "e"){
      pressedValue(targetButton.value)
      return
    }

    calculateFunctionDepth++;
    pressedValue(targetButton.value)




  })


}

function pressedValue(word){
  $("#screenInput").value += word;
}

function resetScreen(){
  $("#screenInput").value = ""
}

function computeScreen(){

  let screenRawValue = $("#screenInput").value;
  try{
    $("#screenInput").value = eval(screenRawValue);
    return eval(screenRawValue);
  }
  catch{
    $("#screenInput").value = "NaN"
  } 
}





function percent(a,b){
  return (a*100)/b;
}

function rootOf(a,b){
  return Math.pow(a, 1 / b);
}

function powerOf(a,b){
  return Math.pow(a,b);
}

function cos(a){
  return Math.cos(a);
}

function exp(a){
  return Math.exp(a);
}

function tan(a){
  return Math.tan(a);
}

function ln(a){
  return Math.log(a)
}

function log(a){
  return Math.log10(a)
}

function vec(a){
  for(let i=a ; i>=1 ; i-- ){
    if(a != i){
      a = a * i
    }  
  }
  return a
}

function sin(a){
  return Math.sin(a)
}

function π(){
  return Math.PI;
}

function e(){
  return Math.E;
}