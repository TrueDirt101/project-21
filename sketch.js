var wall,car;
var speed, weight,thicnes;
function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(32,32)
  thicnes=random(22,83)

  car=createSprite(50,200,55,20)
  wall=createSprite(1300,200,thicnes,200)
  wall.shapeColor=color(80,80,80)
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  

 if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0
var deformation=0.5*weight*speed*speed/(thicnes*thicnes*thicnes);
if(deformation>3.68){
  car.shapeColor=color(255,0,0)
}

if(deformation<10.45){
  car.shapeColor=color(0,255,0)
}
 }



  drawSprites();
}