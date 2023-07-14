class Shooter {
    constructor(x,y){
        this.pos = createVector(x,y); 
        this.direction = 0;                                                            
        this.barrelAngle = 0;                             
    }
    
    render(){
        push ();
        translate (this.pos.x, this.pos.y);
        fill(255,0,0);
        rectMode(CENTER);
        rect(0,0,shooterWidth,shooterHeight);

        rotate(this.barrelAngle);
        rectMode(CORNER);
        fill(0,255,255);
        noStroke();
        rect(-5,-5,40,10);
 


        pop();
    }

    move(){
        if(this.pos.x < 0 || this.pos.x > 500) {
            this.direction *= -1
        }
        this.pos.x += this.direction;
    }

    setDirection(direction){
        this.direction = direction
    }
}