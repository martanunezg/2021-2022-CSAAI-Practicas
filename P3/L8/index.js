console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 1920; // Anchura del canvas
canvas.height = 1080; // Altura del canvas

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

const display = document.getElementById("display");

//-- Constantes de los ladrillos
const LADRILLO = {
  F: 5,  // Filas
  C: 10,  // Columnas
  w: 140, // Anchura
  h: 35, // Altura
  origen_x: 250, // Posición eje x
  origen_y: 350, // Posición eje y
  padding: 4, // Separación entre ladrillos
  visible: true // Visibilidad
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



//-- Posiciones de los elementos (eje x, eje y) y constantes
let x = 960;
let y = 980;

let start = 0;
let life = 3;

let x1 = 1500;
let y1 = 80;

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

let velx = 9;
let vely = 9;

let palaw = 140;
let palah = 20;


//-- Pulsar teclas (flechas y barra espaciadora)
window.onkeydown = (e) => {
  if (e.keyCode == 39) {
    x += 100;
  }
  if (e.keyCode == 37) {
    x -= 100;
  }
  if (e.keyCode == 32) {
    update();
    
  }

}



//-- Función principal de animación
function update() 
{
  console.log("test");

  //-- 1) Animaciones
  //-- Condición de rebote de la bola en los extremos del canvas y en la pala 
  if (x65 < 130 || x65 >= (canvas.width - 140) ) {
    velx = -velx;  
  }
  
  if (y65 < 190 || x65 > x && x65 < x + palaw && y65 > y && y65 < y + palah) {
   vely = -vely;
  }

  //-- Restar vidas y final del juego
  if (y65 >= canvas.height) {
    life--;
    if (!life) {
      alert("FIN DEL JUEGO");
      document.location.reload();   
    }

    else {
      x65 = 1025;
      y65 = 940;
      velx = 8;
      vely = 8;
      x = 960;
      y = 980;
      
    }
    
  }

  //-- Actualizar la posición
  x65 = x65 + velx;
  y65 = y65 + vely;
  
  
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  //-- 3) Dibujar los elementos visibles
  //-- Ladrillos
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
  
  //-- Texto puntos
  ctx.beginPath();
    ctx.strokeStyle = 'lightblue';
    ctx.font = "70px Arial";
    ctx.strokeText("Puntos: " +start, 400, 80);
    ctx.stroke();
    ctx.closePath();


  for (let i = 0; i < LADRILLO.F; i++) {
    for (let j = 0; j < LADRILLO.C; j++) {
  
      //-- Si el ladrillo es visible y está en contacto con la bola, se hace invisible
      if (ladrillos[i][j].visible) {
        if (x65 > ladrillos[i][j].x && x65 < ladrillos[i][j].x + ladrillos[i][j].w && y65 > ladrillos[i][j].y && y65 < ladrillos[i][j].y + ladrillos[i][j].h) {
          ladrillos[i][j].visible = false;
          velx = 6;
          vely = 6;
          start += 1; 

        }
      }
    }
  }


  //-- Texto vidas
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.font = "70px Arial";
  ctx.strokeText("Vidas: " +life, x1, y1);
  ctx.stroke();
  ctx.closePath();

 
  
  ctx.beginPath();  
  
    
    //-- Bola
    ctx.arc(x65, y65, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 2;

    //-- Pala
    ctx.rect(x, y, palaw, palah);
  

    //-- Borde superior
    ctx.rect(x61, y61, 1750, 40);

    //-- Borde extremo izquierdo
    ctx.rect(x62, y62, 30, 1080);

    //-- Borde extremo derecho
    ctx.rect(x63, y63, 30, 1080);


    //-- Dibujar
    ctx.fillStyle = 'white';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
    ctx.closePath();
  }

  //-- 4) Volver a ejecutar update cuando toque

  requestAnimationFrame(update);

}


