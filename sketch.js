let gigatransi = 0;
let timer = 13;

class Genesis {
  
  ROCHE()  {
    
if (gigatransi === 0) {
  
  background(0);
  
  let rcol = color('#201200');
  fill(rcol);
  
  circle(-25, 0, 150);
  }
else {
  background(0);
  
   if (frameCount % 15 == 0 && timer > 0) { 
    timer --;
   }
// ---------------- //
   if (timer === 13) {
      let rcol = color('#873726'); // petit rouge
      fill(rcol);
  
      circle(-25, 0, 150);
   }
// ---------------- //
   if (timer === 12) {
      let rcol = color('#873726'); // moyen rouge
      fill(rcol);
  
      circle(-25, 0, 400);
   }
   if (timer === 12) {
      let rcol = color('#EEAC30'); // petit  orange
      fill(rcol);
  
      circle(-25, 0, 150);
   }
// ---------------- //
   if (timer === 11) {
      let rcol = color('#873726'); // gros rouge
      fill(rcol);
  
      circle(-25, 0, 800);
    }
   if (timer === 11) {
      let rcol = color('#EEAC30'); // moyen orange
      fill(rcol);
  
      circle(-25, 0, 400);
    }
   if (timer === 11) {
      let rcol = color('#EDE6DA'); // petit blanc
      fill(rcol);
  
      circle(-25, 0, 150);
   }
// ---------------- //
   if (timer === 10) {
      let rcol = color('#EEAC30'); // gros orange
      fill(rcol);
  
      circle(-25, 0, 800);
   }
   if (timer === 10) {
      let rcol = color('#EDE6DA'); // moyen blanc
      fill(rcol);
  
      circle(-25, 0, 400);
   }
   if (timer === 10) {
      let rcol = color('#873726'); // petit rouge
      fill(rcol);
  
      circle(-25, 0, 150);
   }
// ---------------- //
   if (timer === 9) {
      let rcol = color('#EDE6DA'); // gros blanc
      fill(rcol);
  
      circle(-25, 0, 800);
   }
   if (timer === 9) {
      let rcol = color('#873726'); // moyen rouge
      fill(rcol);
  
      circle(-25, 0, 400);
   }
   if (timer === 9) {
      let rcol = color('#F1DF48'); // petit jaune
      fill(rcol);
  
      circle(-25, 0, 150);
   }
// ---------------- //
   if (timer === 8) {
      let rcol = color('#873726'); // gros rouge
      fill(rcol);
  
      circle(-25, 0, 800);
   }
   if (timer === 8) {
      let rcol = color('#F1DF48'); // moyen jaune
      fill(rcol);
  
      circle(-25, 0, 400);
   }
   if (timer === 8) {
      let rcol = color('#B551FA'); // petit violet
      fill(rcol);
  
      circle(-25, 0, 150);
   }
// ---------------- //
   if (timer === 7) {
      let rcol = color('#F1DF48'); // gros jaune
      fill(rcol);
  
      circle(-25, 0, 800);
   }
   if (timer === 7) {
      let rcol = color('#B551FA'); // moyen violet
      fill(rcol);
  
      circle(-25, 0, 400);
   }
   if (timer === 7) {
      let rcol = color('#873726'); // petit rouge
      fill(rcol);
  
      circle(-25, 0, 150);
   }
// ---------------- //
   if (timer === 6) {
      let rcol = color('#B551FA'); // gros violet
      fill(rcol);
  
      circle(-25, 0, 800);
   }
   if (timer === 6) {
      let rcol = color('#873726'); // moyen rouge
      fill(rcol);
  
      circle(-25, 0, 400);
   }
   if (timer === 6) {
      let rcol = color('#EDE6DA'); // petit blanc
      fill(rcol);
  
      circle(-25, 0, 150);
   }
// ---------------- //
   if (timer === 5) {
      let rcol = color('#873726'); // gros rouge
      fill(rcol);
  
      circle(-25, 0, 800);
   }
   if (timer === 5) {
      let rcol = color('#EDE6DA'); // moyen blanc
      fill(rcol);
  
      circle(-25, 0, 400);
   }
// ---------------- //
   if (timer === 4) {
      let rcol = color('#EDE6DA'); // gros blanc kek
      fill(rcol);
  
      circle(-25, 0, 800);
   }
// ---------------- //
   if (timer === 3) {
    background(255);
   }
   if (timer === 2) {
    background(255);
   }
   if (timer === 1) {
    background(255);
   }
// ---------------- //
  }
 }
}
// ----------------------------------------- //
let value = 0;

class Crack {
  
  fiss() {
  
if (value === 1) {
  fill('#ff2d00');  
  rotate(PI/-9);
  rect(-40, -80, 3, 50);
  }
    
// ---------------- //
    
if (value === 2) {
  fill('#ff2d00');  
  rotate(PI/-9);
  rect(-40, -80, 3, 50);
  
  fill('#ff2d00');
  rotate(PI/-3);
  rect(6, -49, 3, 40);
  }
    
// ---------------- //
    
if (value === 3) {
  fill('#ff2d00');  
  rotate(PI/-9);
  rect(-40, -80, 3, 50);
  
  fill('#ff2d00');
  rotate(PI/-3);
  rect(6, -49, 3, 40);
  
  fill('#ff2d00');
  rotate(PI/-1.75);
  rect(6, -30, 3, 40);
  }
    
// ---------------- //
    
if (value === 4) {
  fill('#ff2d00');  
  rotate(PI/-9);
  rect(-40, -80, 3, 50);
  
  fill('#ff2d00');
  rotate(PI/-3);
  rect(6, -49, 3, 40);
  
  fill('#ff2d00');
  rotate(PI/-1.75);
  rect(6, -30, 3, 40);
  
  fill('#ff2d00');
  rotate(PI/-3);
  rect(28, -50, 3, 43);
  }
    
// ---------------- //
    
if (value > 4) {
    gigatransi = gigatransi + 1;
  }
 }
}
// ----------------------------------------- //
let cam;
let valK = 0;

class Rota360 {
// ----------------------------------------- //
  Dim1() {        
  if (timer <= 0) {
  background(120);  
  
  fill('orange');
  circle(0, 700, 750);
  
  rotateY(frameCount * valK);
  fill('#00e8ff');
  translate(100, 350, 720);
  rotate(PI/9);
  sphere(100);
 }
}
 
  Dim2() {      
  if (timer <= 0) { 

  rotateY(frameCount * -0.15);
  fill('white');
  translate(100, -10, 100);
  rotate(PI/5);
  sphere(10);
    
  }
 }
}
// ----------------------------------------- //
let song1;
let song2;
let song3;

class musique {
  ZIC1() {
    if (mouseIsPressed && value === 1 || mouseIsPressed && value == 3){
      song1.play();
    }
  }
  ZIC2() {
    if (mouseIsPressed && value === 2 || mouseIsPressed && value == 4){
      song2.play();
    }
  }
  ZIC3() {
    if (mouseIsPressed && value === 5){
      song3.play();
    }
  }
}
// ----------------------------------------- //
let rock;
let fract;
let Rota1;

let Sound;

function setup() {
  createCanvas(600, 850, WEBGL);
  
  song1 = loadSound('assets/FR01.wav');
  song2 = loadSound('assets/FR02.wav');
  song3 = loadSound('assets/FR03F.wav');
  
  background(0);
  rock = new Genesis();
  fract = new Crack();
  
  Rota1 = new Rota360();
  
  Sound = new musique();

}

function draw() {

  rock.ROCHE(); 
  fract.fiss();
  
  Rota1.Dim1();
  Rota1.Dim2();
  
  Sound.ZIC1();
  Sound.ZIC2();
  Sound.ZIC3();

  
}
function mousePressed() {
  
if (mousePressed) {
   value = value + 1;
}
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    valK = 0.02;
  } else if (keyCode === RIGHT_ARROW) {
    valK = -0.02;
  }
}
