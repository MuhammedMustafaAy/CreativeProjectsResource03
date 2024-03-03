let tree = [];
let leaves = [];
let count = 0;
let manWalk;
let manAttack;
let manWalkX = 0;
let leavesFalling = false;
let raindrops = [];
let showSign = false;
let animation = false;
let final = false;

function preload() {
  walk = loadImage("Man_walk.png");
  idle = loadImage("Man_idle.png");
  attack = loadImage("Man_attack.png");
}

function setup() {
  bg = loadImage('abc.png');
 
  createCanvas(400, 400);
  let a = createVector(width / 2, height);
  let b = createVector(width / 2, height - 100);
  let root = new Branch(a, b);
  tree[0] = root;

  // Yeni kişi objesi
  manWalk = new Sprite(walk, 0, 0, 4);
  manAttack = new Sprite(attack, 0, 0, 4);

  // Butona tıklandığında showSign'i çalıştır
  let button = createButton("Kamu Spotu");
  button.mousePressed(function() {
    showSign = true;
  });

  let btn = createButton("Başla");
  btn.mousePressed(function() {
    animation = true;
  });

  let endBtn = createButton("Bitir");
  endBtn.mousePressed(function() {
    sonlandirSketch();
  });
}

function draw() {
  push();
  background(200,250,200);
  Giris();
  pop();
 
  if (animation) {
    updateScene();
    
    if (showSign) {
      fill(250, 0, 0);
      textSize(32);
      textAlign(CENTER);
      text("Ormanlara Zarar Vermeyiniz", width / 2, height / 2);
    } else if (final) {
      sonlandirSketch();
    }
  }
}


