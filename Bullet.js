class Bullet {
    constructor(x,y,a){
        this.pos = createVector(x,y);
        this.velocity = bulletVelocity;
        this.angle = a;
    }
    
    render(){
        push ();
        translate (this.pos.x, this.pos.y);
        fill(0,255,0);
        ellipse(0,0,bulletWidth,bulletWidth);
        pop();
    }

    accelerateBall(ax,ay){
        this.vx = this.vx + ax;
        this.vy = this.vy + ay;
    } 

    move(){
        this.pos.x = this.pos.x + Math.cos(this.angle) * bulletVelocity
        this.pos.y = this.pos.y + Math.sin(this.angle) * bulletVelocity
    }

    hits(alien){
        let distance = (p5.Vector.sub(this.pos, alien.pos)).mag();
        if (distance < bulletHeight/2 + alienHeight/2){
            return true;
        } else{
            return false;
        }
    }
}