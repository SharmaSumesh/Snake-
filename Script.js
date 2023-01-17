var direction = {x:0,y:0};
let speed = 2;
let lastpaintime = 0;
var SnakeArr = [{x:4,y:8}];//position of Snake
var food = {x:3,y:5};
var score = 0;
//starting logic
function main(ctime)
{
    window.requestAnimationFrame(main);
    if((ctime-lastpaintime)/1000<1/speed)
    {
        return;
    }
    gameEngine();
// console.log(ctime);
lastpaintime = ctime;

}
function gameEngine()
{
    //logic 1 Snake Face
    row.innerHTML ="";
    SnakeArr.forEach((e,index)=>{
        SnakeElement = document.createElement('div');
        SnakeElement.style.gridRowStart = e.y;
        SnakeElement.style.gridcolumnStart = e.x;
        SnakeElement.classList.add('head');
        row.appendChild(SnakeElement);

    });
      //logic 2 Snake food
      foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridcolumnStart = food.x;
        foodElement.classList.add('food');
        row.appendChild(foodElement);
}
if(SnakeArr[0].x==food.x && SnakeArr[0].y==food.y)
{
     score  = score+1;

}
let a = 2;
let b = 8;
//formula  of food changing direction 
food =  food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())};
for(let i=SnakeArr.length-2;i>=0;i--)
{
   SnakeArr[i=1] = {...snakeArr[i]};

}
SnakeArr[0].x += direction.x;
SnakeArr[0].y += direction.y;












window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>
{
    
direction = {x:0,y:1};
switch(e.key) {
    case "ArrowUp":
        console.log("Keyup");
    direction.x=0;
    direction.y=-1;
  
    break;
    case "ArrowDown":
        console.log("Keydown");
    direction.x=0;
    direction.y=1;
 
    break;
    case "ArrowLeft":
        console.log("Keyleft");
    direction.x=-1;
    direction.y=0;
  
    break;
    case "ArrowRight":
        console.log("KeyRight");
    direction.x=1;
    direction.y=0;
   
    break;
    default:
        break;



}}

)