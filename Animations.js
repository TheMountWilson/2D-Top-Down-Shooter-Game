function Bullet (x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = "#000000";
    this.radius = 2;
    this.status = true;
    this.health = 1;

    this.draw = function(){
        colorCircle(this.x,this.y,this.radius,this.color)
    }

    this.update = function(){
        if (this.x + this.radius > 800 || this.x - this.radius < 0){
            this.dx = -this.dx
            this.health -=1
          }
            if (this.y + this.radius > 600 || this.y - this.radius < 0){
              this.dy = -this.dy
              this.health -=1
          }
        if (this.health <= 0) this.status = false;
        if (this.status){
            this.x += this.dx
            this.y += this.dy
            this.draw()
        }
    }
}

var ReloadFramesSkipped = 0;
var Reloading = false;

function Reload () {
    if (ReloadFramesSkipped==0){
        ReloadFramesSkipped++;
    }
    else if(ReloadFramesSkipped>0 && ReloadFramesSkipped< 10){
        ReloadFramesSkipped++;
    }
    else if (ReloadFramesSkipped == 10){
        Reloading = false;
        ReloadFramesSkipped = 0;
    }
}

function Enemy (x,y,dx,dy,health,maxhealth,dmg){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.health = health;
    this.maxhealth = maxhealth;
    this.dmg = dmg;
    this.status = true;

    this.draw = function (){
        colorRect(this.x,this.y,10,10,"#ff7f7f");
        colorRect(this.x-5,this.y-8,20,4,"#5c6fb2");
        colorRect(this.x-5,this.y-8,20*(health/maxhealth),4,"#a30101");
    }

    this.update = function (){
        this.draw();
    }

}
