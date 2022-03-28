function calcular(calc)
{
  calc.op2 = calc.gui.display.innerHTML
  if (calc.operacion == "suma") {
    calc.gui.display.innerHTML = Number(calc.op1) + Number(calc.op2)
  } else if (calc.operacion == "resta") {
    calc.gui.display.innerHTML = Number(calc.op1) - Number(calc.op2)
  } else if (calc.operacion == "multiplicacion") {
    calc.gui.display.innerHTML = Number(calc.op1) * Number(calc.op2)
  } else if (calc.operacion == "division") {
    calc.gui.display.innerHTML = Number(calc.op1) / Number(calc.op2)
  }
  calc.estado = "init"
  calc.operacion = "null"
}


function añadir_dig(calc,dig)
{
  if (calc.estado == "init") {
    calc.gui.display.innerHTML = dig;
    calc.estado = "OP"
  } else if (calc.estado == "OP") {
    calc.gui.display.innerHTML += dig;
    console.log(calc.op1)
    console.log(calc.operacion);
  }
}

function main () {

  var calc = {
    estado: "init",
    op1: 0,
    op2: 0,
    operacion: "null",
    gui : {
      display: document.getElementById("display"),
      botondig7: document.getElementById("boton7"),
      botondig8: document.getElementById("boton8"),
      botondig9: document.getElementById("boton9"),
      botondig4: document.getElementById("boton4"),
      botondig5: document.getElementById("boton5"),
      botondig6: document.getElementById("boton6"),
      botondig1: document.getElementById("boton1"),
      botondig2: document.getElementById("boton2"),
      botondig3: document.getElementById("boton3"),
      botondig0: document.getElementById("boton0"),
      botoncoma: document.getElementById("botoncoma"),
      botonac: document.getElementById("botonac"),
      botondel: document.getElementById("botondel"),
      operacionmas: document.getElementById("operacionmas"),
      operacionmenos: document.getElementById("operacionmenos"),
      operacionpor: document.getElementById("operacionpor"),
      operaciondivision: document.getElementById("operaciondivision"),
      operacionigual: document.getElementById("operacionigual")
    }
  }
  calc.gui.botondig7.onclick = () => {
    display = añadir_dig(calc,7)
  }
  calc.gui.botondig8.onclick = () => {
    display = añadir_dig(calc,8)
  }
  calc.gui.botondig9.onclick = () => {
    display = añadir_dig(calc,9)
  }
  calc.gui.botondig4.onclick = () => {
    display = añadir_dig(calc,4)
  }
  calc.gui.botondig5.onclick = () => {
    display = añadir_dig(calc,5)
  }
  calc.gui.botondig6.onclick = () => {
    display = añadir_dig(calc,6)
  }
  calc.gui.botondig1.onclick = () => {
    display = añadir_dig(calc,1)
  }
  calc.gui.botondig2.onclick = () => {
    display = añadir_dig(calc,2)
  }
  calc.gui.botondig3.onclick = () => {
    display = añadir_dig(calc,3)
  }
  calc.gui.botondig0.onclick = () => {
    display = añadir_dig(calc,0)
  }
  calc.gui.botoncoma.onclick = () => {
    display = añadir_dig(calc,".")
  }
  calc.gui.operacionmas.onclick = () => {
    calc.op1 = calc.gui.display.innerHTML;
    calc.gui.display.innerHTML = "+";
    calc.operacion = "suma";
    calc.estado = "init";
  }
  calc.gui.operacionmenos.onclick = () => {
    calc.op1 = calc.gui.display.innerHTML;
    calc.gui.display.innerHTML = "-";
    calc.operacion = "resta";
    calc.estado = "init";
  }
  calc.gui.operacionpor.onclick = () => {
    calc.op1 = calc.gui.display.innerHTML;
    calc.gui.display.innerHTML = "x";
    calc.operacion = "multiplicacion";
    calc.estado = "init";
  }
  calc.gui.operaciondivision.onclick = () => {
    calc.op1 = calc.gui.display.innerHTML;
    calc.gui.display.innerHTML = "/";
    calc.operacion = "division";
    calc.estado = "init";
  }
  calc.gui.botonac.onclick = () => {
    calc.estado = "init";
    calc.operacion = "null";
    calc.op1 = 0;
    calc.op2 = 0;
    calc.gui.display.innerHTML = 0;
  }
  calc.gui.operacionigual.onclick = () => {
    display = calcular(calc)
  }
}