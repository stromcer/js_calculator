export function CientificKeyboard(){
    document.getElementById("advancedCalcKeyboard").innerHTML = `
    <div class="row">
      <button class="col" id="RAD">RAD</button>
      <button class="col" id="DEG">DEG</button>
      <button class="col" id="vec" value=" vec( ">x!</button>
    </div>
    <div class="row">
      <button class="col" id="Inv">Inv</button>
      <button class="col" id="sin" value=" sin( ">sin</button>
      <button class="col" id="ln" value=" ln( ">In</button>
    </div>
    <div class="row">
      <button class="col" id="PI" value=" π() ">π</button>
      <button class="col" id="cos" value=" cos( ">cos</button>
      <button class="col" id="log" value=" log( ">log</button>
    </div>
    <div class="row">
      <button class="col" id="e" value=" e() ">e</button>
      <button class="col" id="tan"  value=" tan( ">tan</button>
      <button class="col" id="raiz" value=" rootOf( ">RAIZ</button>
    </div>
    <div class="row">
      <button class="col" id="Ans">Ans</button>
      <button class="col" id="EXP" value=" exp( ">EXP</button>
      <button class="col" id="Potencia" value=" powerOf( ">Potencia</button>
    </div>
    `;
}