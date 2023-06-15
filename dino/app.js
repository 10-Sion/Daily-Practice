const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let jumping = false;

let dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = 'green';
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img1, this.x, this.y)
  }
}

let img1 = new Image();
img1.src = 'https://github.com/dhhruv/Chrome-Dino-Runner/blob/master/assets/Dino/DinoJump.png?raw=true'

let img2 = new Image();
img2.src = 'https://github.com/dhhruv/Chrome-Dino-Runner/blob/master/assets/Cactus/LargeCactus1.png?raw=true'

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = 'red';
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img2, this.x, this.y)
  }
}

let timer = 0;
let cactuss = [];
let animation;

function animationFrame() {
  animation = requestAnimationFrame(animationFrame);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 120 === 0) {
    let cactus = new Cactus();
    cactuss.push(cactus);
  }
  cactuss.forEach((a, i, o) => {
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x -= 5;

    collisionCheck(dino, a);

    a.draw();
  });

  if (jumping) {
    dino.y -= 5;
    if (dino.y === 100) {
      jumping = false;
    }
  } else {
    if (dino.y !== 200) {
      dino.y += 2;
    }
  }
  
  dino.draw();
}

animationFrame();

document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    if (dino.y === 200) {
      jumping = true;
    }
  }
});

function collisionCheck(dino, cactus) {
  let xCheck = cactus.x - (dino.x + dino.width);
  let yCheck = cactus.y - (dino.y + dino.height);

  if (xCheck < 0 && yCheck < 0) {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    cancelAnimationFrame(animation)
  }
}