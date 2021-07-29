var spacebg
var iss
var spacecraft1
var spacecraft2
var spacecraft3
var spacecraft4
var hasDocked

function preload() {
  var spacecraft1 = loadAnimation("Docking-undocking/spacecraft1.png")
  var spacecraft2 = loadAnimation("Docking-undocking/spacecraft2.png")
  var spacecraft3 = loadAnimation("Docking-undocking/spacecraft3.png")
  var spacecraft4 = loadAnimation ("Docking-undocking/spacecraft4.png")
  var iss = ("Docking-undocking/iss.png")
  var spacebg = ("Docking-undocking/spacebg.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(spacebg);  
  drawSprites();
}