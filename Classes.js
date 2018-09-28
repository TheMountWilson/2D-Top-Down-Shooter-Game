function Element (x,y,status){
    this.x = x;
    this.y = y;
    this.status = status;
}

function Medkit (x,y,status,size){
    Element.call(this,x,y,status);
    this.size = size;

    this.RemoveMedkitFromMap = function(){
        playerHealth+=this.size;
        this.status = false;
    }
    this.Draw = function (){
        DrawRect(this.x,this.y,5,5,"#40b24e");
    }
    this.Update = function (){
        this.Draw();
    }
}

function Bullet (x,y,status,dx,dy,color,owner){
    Element.call(this,x,y,status);
    this.dx = dx;
    this.dy = dy;
    this.health = 1;
    this.color = color;
    this.radius = 3;
    this.owner = owner;

    this.Draw = function(){
        DrawCircle(this.x,this.y,this.radius,this.color);
    }

    this.Update = function(){
        /*
        if (this.x + this.radius > CanvasWidth || this.x - this.radius < 0){
            this.dx = -this.dx
            this.health -=1
        }
        if (this.y + this.radius > CanvasHeight || this.y - this.radius < 0){
            this.dy = -this.dy
            this.health -=1
        }
        */
        if (this.health <= 0) this.status = false;
        if (this.status){
            this.x += this.dx
            this.y += this.dy
            this.Draw()
        }
    }
}

function Enemy (x,y,status,dx,dy,health,maxhealth,dmg){
    Element.call(this,x,y,status);
    this.dx = dx;
    this.dy = dy;
    this.health = health;
    this.maxhealth = maxhealth;
    this.dmg = dmg;
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

    this.Update = function (){
        if(this.health <=0){
            this.status = false;
        }
        this.Draw();
    }
    this.Draw = function (){
        DrawRect(this.x,this.y,10,10,"#ff0000");
        DrawRect(this.x-5,this.y-8,20,4,"#5c6fb2");
        DrawRect(this.x-5,this.y-8,20*(this.health/this.maxhealth),4,"#a30101");
        DrawText(this.health,this.x,this.y-10,"#000000","10px arial");
        if (this.Reloading == false){
            this.Shoot();
        }
        if (this.Reloading) this.Reload();
    }
    this.Shoot = function (){
        this.Aim();
        bulletArray.push(new Bullet(this.x,this.y,true,(this.a/this.c)*20,(this.b/this.c)*20,"#ff0000","Enemy"));
        this.Reloading = true;
    }
    this.Aim = function (){
        this.a = rectPosX - this.x;
        this.b = rectPosY - this.y;
        this.c = Math.sqrt((this.a*this.a)+ (this.b*this.b));
    }
}
