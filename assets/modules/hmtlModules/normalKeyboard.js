
export function NormalKeyboard(){
    document.getElementById("normalCalcKeyboard").innerHTML = `
    <div class="row">
              <button id="openParenthesis" class="col" value="("> ( </button>
              <button id="closeParenthesis" class="col" value=")"> ) </button>
              <button id="percent" class="col" value="percent">%</button>
              <button id="clean" class="col">CE</button>
            </div>
            <div class="row">
              <button id="seven" class="col" value="7">7</button>
              <button id="eight" class="col" value="8">8</button>
              <button id="nine" class="col" value="9">9</button>
              <button id="divide" class="col" value="divide"> / </button>
            </div>
            <div class="row">
              <button id="four" class="col" value="4">4</button>
              <button id="five" class="col" value="5">5</button>
              <button id="six" class="col" value="6">6</button>
              <button id="multiply" class="col" value="multiply"> * </button>
            </div>
            <div class="row">
              <button id="one" class="col" value="1">1</button>
              <button id="two" class="col" value="2">2</button>
              <button id="three" class="col" value="3">3</button>
              <button id="subtract" class="col" value="subtract"> - </button>
            </div>
            <div class="row">
              <button id="zero" class="col"  value="0">0</button>
              <button id="float" class="col"  value="float">.</button>
              <button id="equal" class="col" value="=">=</button>
              <button id="plus" class="col"  value="add"> + </button>
            </div>
    `;
}