var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

function preload(){
bg1 = loadImage("bg1.png");
bg2 = loadImage("bg2.png")

}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(bg1);


}
