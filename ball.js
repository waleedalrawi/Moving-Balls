//Get handle on the div ball elements named "ballx" where x starts at 0

var balls = []
var num_balls = 5
{var i = 0
 while(i< num_balls){
   balls.push(document.getElementById(`ball${i}`));
   i++;
 }
}

//!!!Hardcoded for 5 balls!!!
//Set global variables that will contain the position, velocity, borders 
var velocityX = [5,10,15,20,25];
var velocityY = [5,10,15,20,25];
var positionX = [0,0,0,0,0];
var positionY = [100,200,300,400,500];
var reverseX = [false,false,false,false,false];
var reverseY = [false,false,false,false,false];

const Xmin = 0;
const Xmax = 900;
const Ymin = 0;
const Ymax = 600;

//driver; calls setinterval on all the ball objects
{var i = 0;
  while(i < num_balls){
    setInterval(moveBall, 40, balls[i], positionX, positionY, velocityX, velocityY, reverseX, reverseY,i);
    i++
  }
 }
 
 
 //TODO: CHANGE SIZE/ SPEED, ADD MORE BALLS, DETECTION BETWEEN BALLS


//function to generate random color
//returns a string "rgb(x,y,z)"
function randomColor(){
  let r = Math.floor(255*(Math.random()));
  let g = Math.floor(255*(Math.random()));
  let b = Math.floor(255*(Math.random()));        
  let color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  return color;
}

//function that can change the position of the html element "ball"
//this is disugsting. arrays are passed to get pass by reference functionality, and the index telling you which
//array element to manipulate is passed along
function moveBall(ball, positionX, positionY, velocityX, velocityY, reverseX, reverseY, i) {
  //update positions
  if(!reverseX[i]){
    positionX[i] += velocityX[i];
  }
  else{
    positionX[i] -= velocityX[i];
  }

  if(!reverseY[i]){
    positionY[i] += velocityY[i];
  }
  else{
    positionY[i] -= velocityY[i];
  }

//move ball to updated positions
  ball.style.left = positionX[i] + "px";
  ball.style.top = positionY[i] + "px";

//detect edges and apply desired effects if edge detected
  if(positionX[i] + parseInt(ball.style.width) >= window.innerWidth){
    //change reverse variable used by move function to know to change direction
    reverseX[i] = !reverseX[i];
    //change to a random color when you hit border
    ball.style.background = randomColor();
    //change to a random size when you hit border
    let new_size = Math.floor(25 + 100*Math.random());
    ball.style.width = new_size + "px";
    ball.style.height = new_size + "px";
    positionX[i] = window.innerWidth - new_size - 1; //1 away from the right border (because condition has >=)
    ball.style.left = positionX[i] + "px";
    
    //change to a random speed when you hit border
    let new_velocity = Math.floor(5+15*Math.random());
    velocityX[i] = new_velocity;
    velocityY[i] = new_velocity;
    
  }
  if(positionX[i] <= Xmin){
    //change reverse variable used by move function to know to change direction
    reverseX[i] = !reverseX[i];
    //change to a random color when you hit border
    ball.style.background = randomColor();
    //change to a random size when you hit border
    let new_size = Math.floor(25 + 100*Math.random());
    ball.style.width = new_size + "px";
    ball.style.height = new_size + "px";
    positionX[i] = 1; //1 away from the left border (because condition has <=)
    ball.style.left = positionX[i] + "px";
    
    //change to a random speed when you hit border
    let new_velocity = Math.floor(5+15*Math.random());
    velocityX[i] = new_velocity;
    velocityY[i] = new_velocity;
    
  }
  if(positionY[i] + parseInt(ball.style.height) >= window.innerHeight){
    //change reverse variable used by move function to know to change direction
    reverseY[i] = !reverseY[i];
    //change to a random color when you hit border
    ball.style.background = randomColor();
    //change to a random size when you hit border
    let new_size = Math.floor(25 + 100*Math.random());
    ball.style.width = new_size + "px";
    ball.style.height = new_size + "px";
    positionY[i] = window.innerHeight - new_size - 1; //1 away from the bottom border (because condition has <=)
    ball.style.top = positionY[i] + "px";
    
    //change to a random speed when you hit border
    let new_velocity = Math.floor(5+15*Math.random());
    velocityX[i] = new_velocity;
    velocityY[i] = new_velocity;
    
  }
  if(positionY[i] + parseInt(ball.style.height) >= window.innerHeight || positionY[i] <= Ymin){
    //change reverse variable used by move function to know to change direction
    reverseY[i] = !reverseY[i];
    //change to a random color when you hit border
    ball.style.background = randomColor();
    //change to a random size when you hit border
    let new_size = Math.floor(25 + 100*Math.random());
    ball.style.width = new_size + "px";
    ball.style.height = new_size + "px";
    positionY[i] = 1; //1 away from the bottom border (because condition has <=)
    ball.style.top = positionY[i] + "px";
    
    //change to a random speed when you hit border
    let new_velocity = Math.floor(5+15*Math.random());
    velocityX[i] = new_velocity;
    velocityY[i] = new_velocity;
    
  }

  
}