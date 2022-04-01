console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 1920;
canvas.height = 1080;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Constantes de los ladrillos
const LADRILLO = {
  F: 5,  // Filas
  C: 10,  // Columnas
  w: 140,
  h: 35,
  origen_x: 250,
  origen_y: 300,
  padding: 4,
  visible: true
};

//-- Estructura de los ladrillos
const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++) {
    ladrillos[i] = [];
    for (let j = 0; j < LADRILLO.C; j++) {
      ladrillos[i][j] = {
          x: LADRILLO.origen_x + (LADRILLO.w + LADRILLO.padding) * j,
          y: LADRILLO.origen_y + (LADRILLO.h + LADRILLO.padding) * i,
          w: LADRILLO.w,
          h: LADRILLO.h,
          padding: LADRILLO.padding,
          visible: LADRILLO.visible
        };
    }
}

//-- Posición del elemento a animar
let x = 960;
let y = 950;

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
let vely = 5;



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

  if (y65 < 190 || y65 >= (canvas.height) ) {
    vely = -vely;
  }

  //-- Actualizar la posición
  x65 = x65 + velx;
  y65 = y65 + vely;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < LADRILLO.F; i++) {
    for (let j = 0; j < LADRILLO.C; j++) {

      //-- Si el ladrillo es visible se pinta
      if (ladrillos[i][j].visible) {
        ctx.beginPath();
        ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
      }
    }
}

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