let bg;
    function updateScene() {
      
  
background(bg);
     
  
  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
  }
  if (leavesFalling) {
    for (var i = 0; i < leaves.length; i++) {
      fill(255, 0, 100, 100);
      noStroke();
      ellipse(leaves[i].x, leaves[i].y, 8, 8);
      leaves[i].y += random(0, 2);
    }
  }
  // Kişiyi çizme
  //person.show();
  if (manWalkX < 100) {
    manWalkX += 1;
    manWalk.x = manWalkX;
    manWalk.draw();
  }else {
    if (!leavesFalling) {
      leavesFalling = true;
      for (var i = 0; i < tree.length; i++) {
        if (!tree[i].finished) {
          let leaf = tree[i].end.copy();
          leaves.push(leaf);
        }
      }
    }
    
 
    manAttack.x = 100;
    manAttack.draw();
  }
  if (frameCount % 30 === 0) { // Yağmurun daha sık olması için frame sayısını düşürdük
    for (let i = tree.length - 1; i >= 0; i--) {
      if (!tree[i].finished) {
        tree.push(tree[i].branchA());
        tree.push(tree[i].branchB());
      }
      tree[i].finished = true;
    }
    count++;
    if (count === 6) {
      for (var i = 0; i < tree.length; i++) {
        if (!tree[i].finished) {
          let leaf = tree[i].end.copy();
          leaves.push(leaf);
        }
      }
    }
  }
  // Rastgele yağmur damlaları oluşturulması
  if (random() < 0.3) { // Yağmurun daha sık olması için olasılık değerini artırdık
    let x = random(width);
    let y = random(height);
    raindrops.push(createVector(x, y));
  }
  // Yağmur damlalarını çizme ve hareket ettirme
  for (let i = raindrops.length - 1; i >= 0; i--) {
    let raindrop = raindrops[i];
    fill(0, 0, 255);
    noStroke();
    ellipse(raindrop.x, raindrop.y, 4, 4);
    raindrop.y += 4; // Yağmur damlalarının hızını artırmak için değeri arttırdık
    // Yağmur damlalarının ekranın altına ulaşması durumunda listeden çıkarılması
    if (raindrop.y > height) {
      raindrops.splice(i, 1);
    }
  }
  
}

 

function Sprite(sheet, x, y, scl) {
  this.sheet = sheet;
  this.scale = scl;
  this.x = 0;
  this.y = 200;
  this.h = sheet.height;
  this.frame = 0;
  this.frames = sheet.width / sheet.height;
  this.draw = function () {
    image(
      this.sheet,
      this.x,
      this.y,
      this.h * this.scale,
      this.h * this.scale,
      this.h * floor(this.frame),
      0,
      this.h,
      this.h
    );
    this.frame += 0.1;
    if (this.frame > this.frames) {
      this.frame = 0;
    }
  };
}

function Giris(){
  
    push();
    fill(250,0,0);
    textSize(32);
    textAlign(CENTER);
    text("Animasyona hoşgeldiniz", width / 2, height / 2);
    pop();
    text("Başla butonu animasyonu başlatır",30,230);
    text("Kamu spotu butonu ekrana mesajı yazdırır",30,250);
    text("Bitir butonu Animasyonu sonlandırır",30,270);
  
}

function son(){
  animation=false;
  showSign=false;
}
function sonlandirSketch() {
  noLoop(); // draw fonksiyonunu durdurur
  remove(); // canvas'ı kaldırır
}
