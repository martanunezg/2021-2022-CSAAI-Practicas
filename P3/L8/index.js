console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 1920;
canvas.height = 1080;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Posición del elemento a animar
let x = 960;
let y = 950;

let x1 = 250;
let y1 = 300;

let x2 = 394;
let y2 = 300;

let x3 = 538;
let y3 = 300;

let x4 = 682;
let y4 = 300;

let x5 = 826;
let y5 = 300;

let x6 = 970;
let y6 = 300;

let x7 = 1114;
let y7 = 300;

let x8 = 1258;
let y8 = 300;

let x9 = 1402;
let y9 = 300;

let x10 = 1546;
let y10 = 300;

let x11 = 250;
let y11 = 339;

let x12 = 250;
let y12 = 378;

let x13 = 250;
let y13 = 417;

let x14 = 250;
let y14 = 456;

let x15 = 250;
let y15 = 495;

let x16 = 394;
let y16 = 339;

let x17 = 394;
let y17 = 378;

let x18 = 394;
let y18 = 417;

let x19 = 394;
let y19 = 456;

let x20 = 394;
let y20 = 495;

let x21 = 538;
let y21 = 339;

let x22 = 538;
let y22 = 378;

let x23 = 538;
let y23 = 417;

let x24 = 538;
let y24 = 456;

let x25 = 538;
let y25 = 495;

let x26 = 682;
let y26 = 339;

let x27 = 682;
let y27 = 378;

let x28 = 682;
let y28 = 417;

let x29 = 682;
let y29 = 456;

let x30 = 682;
let y30 = 495;

let x31 = 826;
let y31 = 339;

let x32 = 826;
let y32 = 378;

let x33 = 826;
let y33 = 417;

let x34 = 826;
let y34 = 456;

let x35 = 826;
let y35 = 495;

let x36 = 970;
let y36 = 339;

let x37 = 970;
let y37 = 378;

let x38 = 970;
let y38 = 417;

let x39 = 970;
let y39 = 456;

let x40 = 970;
let y40 = 495;

let x41 = 1114;
let y41 = 339;

let x42 = 1114;
let y42 = 378;

let x43 = 1114;
let y43 = 417;

let x44 = 1114;
let y44 = 456;

let x45 = 1114;
let y45 = 495;

let x46 = 1258;
let y46 = 339;

let x47 = 1258;
let y47 = 378;

let x48 = 1258;
let y48 = 417;

let x49 = 1258;
let y49 = 456;

let x50 = 1258;
let y50 = 495;

let x51 = 1402;
let y51 = 339;

let x52 = 1402;
let y52 = 378;

let x53 = 1402;
let y53 = 417;

let x54 = 1402;
let y54 = 456;

let x55 = 1402;
let y55 = 495;

let x56 = 1546;
let y56 = 339;

let x57 = 1546;
let y57 = 378;

let x58 = 1546;
let y58 = 417;

let x59 = 1546;
let y59 = 456;

let x60 = 1546;
let y60 = 495;

let x61 = 80;
let y61 = 140;

let x62 = 80;
let y62 = 0;

let x63 = 1800;
let y63 = 0;

let x64 = 10;
let y64 = 10;

let x65 = 1025;
let y65 = 940;

let velx = 20;






//-- Función principal de animación
function update() 
{
  console.log("test");
  //-- Algoritmo de animación:
  //-- 1) Actualizar posiciones de los elementos
  //-- Por hacer

  //-- Condicion de rebote en extremos del canvas
  if (x65 < 130 || x65 >= (canvas.width - 140) ) {
    velx = -velx;
  }

  //-- Actualizar la posición
  x65 = x65 + velx;


  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    
    //-- Texto puntos
    ctx.strokeStyle = 'lightblue';
    ctx.font = "70px Arial";
    ctx.strokeText("0", 400, 80);

    //-- Texto vidas
    ctx.strokeStyle = 'red';
    ctx.font = "70px Arial";
    ctx.strokeText("3", 1500, 80);
 
    
    //-- Bola
    ctx.arc(x65, y65, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 2;

    //-- Pala
    ctx.rect(x, y, 130, 25);

    //-- Ladrillos
    ctx.rect(x1, y1, 140, 35)
    ctx.rect(x2, y2, 140, 35)
    ctx.rect(x3, y3, 140, 35)
    ctx.rect(x4, y4, 140, 35)
    ctx.rect(x5, y5, 140, 35)
    ctx.rect(x6, y6, 140, 35)
    ctx.rect(x7, y7, 140, 35)
    ctx.rect(x8, y8, 140, 35)
    ctx.rect(x9, y9, 140, 35)
    ctx.rect(x10, y10, 140, 35)
    ctx.rect(x11, y11, 140, 35)
    ctx.rect(x12, y12, 140, 35)
    ctx.rect(x13, y13, 140, 35)
    ctx.rect(x14, y14, 140, 35)
    ctx.rect(x15, y15, 140, 35)
    ctx.rect(x16, y16, 140, 35)
    ctx.rect(x17, y17, 140, 35)
    ctx.rect(x18, y18, 140, 35)
    ctx.rect(x19, y19, 140, 35)
    ctx.rect(x20, y20, 140, 35)
    ctx.rect(x21, y21, 140, 35)
    ctx.rect(x22, y22, 140, 35)
    ctx.rect(x23, y23, 140, 35)
    ctx.rect(x24, y24, 140, 35)
    ctx.rect(x25, y25, 140, 35)
    ctx.rect(x26, y26, 140, 35)
    ctx.rect(x27, y27, 140, 35)
    ctx.rect(x28, y28, 140, 35)
    ctx.rect(x29, y29, 140, 35)
    ctx.rect(x30, y30, 140, 35)
    ctx.rect(x31, y31, 140, 35)
    ctx.rect(x32, y32, 140, 35)
    ctx.rect(x33, y33, 140, 35)
    ctx.rect(x34, y34, 140, 35)
    ctx.rect(x35, y35, 140, 35)
    ctx.rect(x36, y36, 140, 35)
    ctx.rect(x37, y37, 140, 35)
    ctx.rect(x38, y38, 140, 35)
    ctx.rect(x39, y39, 140, 35)
    ctx.rect(x40, y40, 140, 35)
    ctx.rect(x41, y41, 140, 35)
    ctx.rect(x42, y42, 140, 35)
    ctx.rect(x43, y43, 140, 35)
    ctx.rect(x44, y44, 140, 35)
    ctx.rect(x45, y45, 140, 35)
    ctx.rect(x46, y46, 140, 35)
    ctx.rect(x47, y47, 140, 35)
    ctx.rect(x48, y48, 140, 35)
    ctx.rect(x49, y49, 140, 35)
    ctx.rect(x50, y50, 140, 35)
    ctx.rect(x51, y51, 140, 35)
    ctx.rect(x52, y52, 140, 35)
    ctx.rect(x53, y53, 140, 35)
    ctx.rect(x54, y54, 140, 35)
    ctx.rect(x55, y55, 140, 35)
    ctx.rect(x56, y56, 140, 35)
    ctx.rect(x57, y57, 140, 35)
    ctx.rect(x58, y58, 140, 35)
    ctx.rect(x59, y59, 140, 35)
    ctx.rect(x60, y60, 140, 35)

    //-- Borde superior
    ctx.rect(x61, y61, 1750, 40)

    //-- Borde extremo izquierdo
    ctx.rect(x62, y62, 30, 1080)

    //-- Borde extremo derecho
    ctx.rect(x63, y63, 30, 1080)


    //-- Dibujar
    ctx.fillStyle = 'white';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();