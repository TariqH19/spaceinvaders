let screenHeight = 500;
let screenWidth = 500;
let aliens = [];
let alienWidth = 20;
let alienHeight = 20;
let alienVelocity = 1;
let numCols = 12;
let numRows = 7;
let hSpace = 30;
let vSpace = 30;
let xOffset = (screenWidth - (numCols-1) * hSpace)/2;
let yOffset = 20;
let shiftDown = 20;
let alienImg;

let shooterWidth=100;
let shooterHeight=20;
let shooter;

let bullets = [];
let bulletWidth=10;
let bulletHeight=10;
let bulletVelocity = 5;

let emmiters = [];

function preload() {
    alienImg = loadImage('assets/spaceInvaders.png');
}

function setup() {
    populateAliens();
    shooter = new Shooter(screenWidth/2, screenHeight - shooterHeight/2);
    createCanvas(screenWidth,screenHeight);
    background(255);
}

function draw() {
    background(0);
    shooter.render();
    //shooter.move();
    emmiters.forEach(emmiter => {
        emmiter.createParticles();
        emmiter.update();
        emmiter.render();
    });
    let shift = false;
    aliens.forEach(alien =>{
        alien.move();
        alien.render();
        alien.pos.x >= screenWidth ? shift = true:null;
        alien.pos.x <= 0 ? shift = true:null;
        alien.pos.y === screenHeight - shooterHeight ? gameOver() = true:null;
    });
    if (shift){
        aliens.forEach(alien =>{
            alien.shift();
        })
    }

    for(let i = bullets.length -1; i>=0; i--){
        bullets[i].move();
        bullets[i].render();

        for(let j = aliens.length -1; j>=0; j--){
            if (bullets[i].hits(aliens[j])){
                let tempPos=aliens[j].pos;
                aliens.splice(j,1);
                bullets.splice(i,1);
                emmiters.push(new Emmiter(tempPos.x,tempPos.y));
                break;
            }
        }    
    }

    
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        // shooter.setDirection(1);
        shooter.barrelAngle += 0.2
    } else if(keyCode === LEFT_ARROW){
        shooter.barrelAngle -= 0.2
    } else if(keyCode === 32){
        bullets.push (new Bullet(shooter.pos.x,screenHeight - shooterHeight, shooter.barrelAngle))
    }
}

function populateAliens(){
    for(let row=0 ; row < numRows; row++){
        for(let col=0 ; col < numCols; col++){
        aliens.push(new Alien(col * hSpace + xOffset, row * vSpace + yOffset));
        }
    }
}

function gameOver(){
	background(0);
  	textSize(32);
  	textAlign(CENTER);
  	fill(255,80,80);
  	text("GAME OVER",width/2,height/2);
	}