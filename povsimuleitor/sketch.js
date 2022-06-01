let x = 0 
let y = 0 
let tam = 48
let azar = 0
let letra =   [[1,1,1,1,1,1,0,0,1,1,0,0,1,1],
               [1,1,1,1,1,1,0,0,1,1,0,0,1,1],
               [1,1,0,0,1,1,0,0,1,1,1,1,1,0],
               [1,1,0,0,1,1,0,0,1,1,1,1,0,0],
               [1,1,0,0,1,1,0,0,1,1,1,1,0,0],
               [1,1,0,0,1,1,0,0,1,1,1,1,1,0],
               [1,1,1,1,1,1,0,0,1,1,0,0,1,1],
               [1,1,1,1,1,1,0,0,1,1,0,0,1,1]
              ]
let index = 0 
let index2 = 0 
let fondoActivado = true;
let alfaMode = false;
let velocidad = 3; 
let alfa = 255; 

function setup() {
  // put setup code here
  createCanvas(800, 420)
}

function draw() {
  // put drawing code here
 background( 255, 255 ,255,alfa)

  noStroke()
  for ( let i = 0 ; i < 8; i++){
  //  azar = random (0,2);

    if ( letra[index2][index] === 1 ){
      fill(255, 0 , 0)
      //console.log ( "soy del rojo pa")
    }
    else {
      fill(0, 0 , 0)
      //console.log("estoy aca gato")
    }



    index2++
    if(index2 >= 8) {index2= 0}
    ellipse (x+30, 50*i+30, tam, tam )
  }
  x+=50 
  index++
  if(index >= 14) {index= 0}
 
 
  if ( x >= (width-100) ){ x = 0 }

 // console.log(colores.length)

  frameRate(velocidad)
}


function keyPressed(){
if (key == '1'){
  index= 0 
  index2= 0 
  x= 0 
  alfa = 255; 
}
if (key == '2'){
  background ( 255,255,255)
  index= 0 
  index2= 0 
  x= 0 
  alfa= 100
}
if( key == '3'){
  background ( 255,255,255)
  index= 0 
  index2= 0 
  x= 0 
alfa= 30 
//velocidad = 60
}
if( key == '4'){
  background ( 255,255,255)
  index= 0 
  index2= 0 
  x= 0 
alfa= 0 

}
if( keyCode == UP_ARROW){
velocidad+=1;
if (velocidad > 60 ){
  velocidad = 60 
    }
}
if( keyCode == DOWN_ARROW){
  velocidad-=1;
  if (velocidad <= 1 ){
velocidad = 1 
  }
  }
  if( keyCode == LEFT_ARROW){
    alfa+=5;
    if (alfa > 255){
      alfa = 255 
        }
    }
    if( keyCode == RIGHT_ARROW){
      alfa-=5;
      if (alfa <= 0 ){
    alfa = 0 
      }
      }
}