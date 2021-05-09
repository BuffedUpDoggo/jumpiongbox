var canvas;
var music;
var ball; 
var redSquare;
var blueSquare;
var greenSquare;
var yellowSquare;
var edgeSprites
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

     //create 4 different surfaces
ball=createSprite(random(20, 750), 400, 20, 20);
ball.shapeColor = "white";

redSquare=createSprite(50, 550, 200, 10);
redSquare.shapeColor="red";

blueSquare=createSprite(200, 550, 200, 10);
blueSquare.shapeColor="blue";

greenSquare=createSprite(350, 550, 200, 10);
greenSquare.shapeColor="green";

yellowSquare=createSprite(500, 550, 200, 10);
   yellowSquare.shapeColor="yellow";

    //create box sprite and give velocity
    ball.velocityX=3;
    ball.velocityY=3;
}

function draw() {
    background(rgb(10,10,10));
    //create edgeSprite
 edgeSprites=createEdgeSprites();


    //add condition to check if box touching surface and make it box
ball.bounceOff(edgeSprites);
if(ball.bounceOff(redSquare)) {
    ball.shapeColor="red";
}

if (ball.bounceOff(greenSquare)) {
    ball.shapeColor="green";
}

if (ball.bounceOff(blueSquare)) {
    ball.shapeColor="blue"
}
ball.bounceOff(greenSquare)
if (ball.bounceOff(yellowSquare)) {
    ball.shapeColor="yellow";
}










    drawSprites();
}
