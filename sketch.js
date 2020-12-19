
var fixrect  , movingrect;


function setup() {
  createCanvas(400,400);
 fixrect = createSprite(200, 200, 70, 50);
movingrect = createSprite(300,300,50,70);
movingrect.shapeColor="red";
fixrect.shapeColor="red";
}

function draw() {

  
  background(255,255,255);  
  movingrect.y = mouseY;
  movingrect.x= mouseX;

  console.log(movingrect.x-fixrect.x);

  if(movingrect.x-fixrect.x < movingrect.width/2+fixrect.width/2
    && fixrect.x-movingrect.x < movingrect.width/2+fixrect.width/2
   && movingrect.y-fixrect.y < movingrect.height/2+fixrect.height/2
    &&  fixrect.y-movingrect.y < movingrect.height/2+fixrect.height/2
    ){
    movingrect.shapeColor="green";
    fixrect.shapeColor="green";
  }
  else {
    movingrect.shapeColor="red";
    fixrect.shapeColor="red";
  }
  drawSprites();
}