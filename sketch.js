//2. Create a variable named brick at the first line of "sketch.js"
var brick
function setup()
{
 createCanvas(400,400);
 //3. Create a brick sprite by assigning brick variable to createSprite(200,0,100,40)
 brick=createSprite(200,0,100,40)

 //5. set color of the brick sprite to brown
 brick.shapeColor = "brown";

 //6. Give vertical movement to the brick by setting the brick's y velocity to 0.5
 brick.velocity.y=0.5

}

function draw()
{
 //1.set background of canvas to 'lightblue' inside the draw function
 background ('lightblue');


 //4.Display the brick sprite by Calling the drawSprites() function inside the draw() function;
 drawSprites();
}

