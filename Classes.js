function Medkit (x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;
    this.status = true;
    this.pickedUp = function(){
        playerHealth+=this.size;
        this.status = false;
    }
    this.draw = function (){
        colorRect(this.x,this.y,5,5,"#40b24e");
    }
    this.update = function (){
        this.draw();
    }
}

function Bullet (x,y,dx,dy,color,owner){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.health = 1;
    this.status = true;
    this.color = color;
    this.radius = 3;
    this.owner = owner;

    this.draw = function(){
        colorCircle(this.x,this.y,this.radius,this.color);
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

function Enemy (x,y,dx,dy,health,maxhealth,dmg){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.health = health;
    this.maxhealth = maxhealth;
    this.dmg = dmg;
    this.status = true;

    this.a = 0;
    this.b = 0;
    this.c = 0;

    this.Reloading = false;
    this.ReloadFramesSkipped = 0;
    this.ReloadPeriod = 60; 

    this.Reload = function () {
        if (this.ReloadFramesSkipped==0){
            this.ReloadFramesSkipped++;
        }
        else if(this.ReloadFramesSkipped>0 && this.ReloadFramesSkipped< this.ReloadPeriod){
            this.ReloadFramesSkipped++;
        }
        else if (this.ReloadFramesSkipped == this.ReloadPeriod){
            this.Reloading = false;
            this.ReloadFramesSkipped = 0;
        }
    }


    this.draw = function (){
        colorRect(this.x,this.y,10,10,"#ff0000");
        colorRect(this.x-5,this.y-8,20,4,"#5c6fb2");
        colorRect(this.x-5,this.y-8,20*(this.health/this.maxhealth),4,"#a30101");
        colorText(this.health,this.x,this.y-10,"#000000","10px arial");
        if (this.Reloading == false){
            this.shoot();
        }
        if (this.Reloading) this.Reload();
    }
    this.update = function (){
        if(this.health <=0){
            this.status = false;
        }
        this.draw();
    }
    this.shoot = function (){
        this.aim();
        bulletArray.push(new Bullet(this.x,this.y,(this.a/this.c)*20,(this.b/this.c)*20,"#ff0000","Enemy"));
        this.Reloading = true;
    }
    this.aim = function (){
        this.a = rectPosX - this.x;
        this.b = rectPosY - this.y;
        this.c = Math.sqrt((this.a*this.a)+ (this.b*this.b));
    }

}