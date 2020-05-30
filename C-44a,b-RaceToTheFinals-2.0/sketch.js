var canvas,backgroundImage;
var gameState = 0;
var teamCount;
var allPteams;
var database;
var form,team,game;
var teams,team1,team2,team3,team4,team5,team6,team7,team8;
var goalKeepingGloves;
var goalKeeper;
var ball;
var randomX,randomY;
var team1Image,team2Image,team3Image,team4Image,team5Image,team6Image,team7Image,team8Image;

function preload()
{
  goalKeepingGloves = loadImage("../images/goalKeepingGloves.png");
  backgroundImage = loadImage("../images/background.png");
}

function setup()
{
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw()
{
  if(playerCount === 4)
  {
    game.update(1);
  }
  if(gameState === 1)
  {
    clear();
    game.play();
  }
  if(gameState===2)
  {
    game.end();
  }
}
