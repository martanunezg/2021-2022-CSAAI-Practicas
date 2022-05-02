console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

 //-- Activar y desactivar filtros
 const filtro_colores = true;
 const filtro_grises = false;

 //--Acceso a los botones
 var boton_colores = document.getElementById('boton_colores');
 var boton_grises = document.getElementById('boton_grises');

 var rojo = document.getElementById('rojo');
 var verde = document.getElementById('verde');
 var azul = document.getElementById('azul');



//-- Acceso al deslizador
const deslizadorrojo = document.getElementById('deslizadorrojo');
const deslizadorverde = document.getElementById('deslizadorverde');
const deslizadorazul = document.getElementById('deslizadorazul');


//-- Valor del deslizador
const range_value_rojo = document.getElementById('range_value_rojo');
const range_value_verde = document.getElementById('range_value_verde');
const range_value_azul= document.getElementById('range_value_azul');

range_value_rojo.innerHTML = deslizadorrojo.value;
range_value_verde.innerHTML = deslizadorverde.value;
range_value_azul.innerHTML = deslizadorazul.value;


//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

    //-- Se establece como tamaño del canvas el mismo
    //-- que el de la imagen original
    canvas.width = img.width;
    canvas.height = img.height;
  
    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavía
    ctx.drawImage(img, 0,0);
  
    console.log("Imagen lista...");
};


//-- Mostrar botones
function mostrarbotones () {
    deslizadorrojo.style.canvas= '';
    range_value_rojo.innerHTML = deslizadorrojo.value;
    rojo.innerHTML = "Establece el umbral de rojo:";
    deslizadorverde.style.canvas = '';
    range_value_verde.innerHTML = deslizadorverde.value;
    verde.innerHTML = "Establece el umbral de verde:";
    deslizadorazul.style.canvas = '';
    range_value_azul.innerHTML = deslizadorazul.value;
    azul.innerHTML = "Establece el umbral de azul:";
}


  //-- Ocultar botones
function ocultarbotones() {
    deslizadorrojo.style.canvas = 'none';
    range_value_rojo.innerHTML = '';
    rojo.innerHTML = '';
    deslizadorverde.style.canvas = 'none';
    range_value_verde.innerHTML = '';
    verde.innerHTML = '';
    deslizadorazul.style.canvas = 'none';
    range_value_azul.innerHTML = '';
    azul.innerHTML = '';
}


  //-- Botón color
boton_colores.onclick = () => {
  if (filtro_colores){
    boton_colores.innerHTML = "Filtro de colores: OFF";
    filtro_colores= false;
    ctx.drawImage(img, 0,0);
    ocultarbotones();
  } 
  else {
    boton_colores.innerHTML = "Filtro de colores: ON";
    filtro_colores= true;
    filtro_grises= false;
    boton_grises.innerHTML = "Filtro de grises: OFF";
    mostrarbotones();
   }
}


//-- Botón grises
boton_grises.onclick = () => {
  if (filtro_grises){
    ctx.drawImage(img, 0,0);
    filtro_grises = false;
    boton_grises.innerHTML = "Filtro de grises: OFF";
  } 
  else {
    filtro_grises = true;
    boton_grises.innerHTML = "Filtro de grises: ON";
    boton_colores.innerHTML = "Filtro de colores: OFF";
    filtro_colores= false;
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    for (var i = 0; i < data.length; i+=4) {
      brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
      data[i] = brillo;
      data[i+1] = brillo;
      data[i+2] = brillo;
    }
    ctx.putImageData(imgData, 0, 0);
    ocultarbotones();
  }
}


//-- Función de retrollamada del deslizador
deslizadorrojo.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_rojo.innerHTML = deslizadorrojo.value;
  
    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavía
    ctx.drawImage(img, 0,0);
  
    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
    //-- Obtener el array con todos los píxeles
    let data = imgData.data
  
    //-- Obtener el umbral de rojo del deslizador
    umbral = deslizadorrojo.value
  
    //-- Filtrar la imagen según el nuevo umbral
    for (let i = 0; i < data.length; i+=4) {
      if (data[i] > umbral) {
        data[i] = umbral;
      }
      if (data[i+1] > deslizadorverde.value) {
        data[i+1] = deslizadorverde.value;
      }
      if (data[i+2] > deslizadorazul.value) {
        data[i+2] = deslizadorazul.value;
      }
    }
  
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }


  deslizadorverde.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_verde.innerHTML = deslizadorverde.value

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbral = deslizadorverde.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i+1] > umbral){
        data[i+1] = umbral;
      }
      if (data[i] > deslizadorrojo.value) {
        data[i] = deslizadorrojo.value;
      }
      if (data[i+2] > deslizadorazul.value) {
        data[i+2] = deslizadorazul.value;
      }
    }
    //img=imgData;
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
  

  deslizadorazul.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_azul.innerHTML = deslizadorazul.value

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbral = deslizadorazul.value

    //-- Filtrar la imagen según el nuevo umbral
    for (var i = 0; i < data.length; i+=4) {
      if (data[i+2] > umbral){
        data[i+2] = umbral;
      }
      if (data[i] > deslizadorrojo.value){
        data[i] = deslizadorrojo.value;
      }
      if (data[i+1] > deslizadorverde.value) {
        data[i+1] = deslizadorverde.value;
      }

    }
    //img=imgData;
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
  }
