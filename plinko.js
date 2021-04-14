class plinko { 
    constructor(x,y,r){
     var options ={
      isStatic: true
     }
    this.r = r;
    
    this.body = Bodies.circle(x,y,this.r,options);
    World.add(world,this.body);
   
   }
   
   display(){
   
    var pos = this.body.position;
    var angle = this.body.angle;
   
    noStroke();
    fill("white");
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r,this.r);
   
   }
   
   }
   