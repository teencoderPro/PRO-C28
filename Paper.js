class Paper{
     constructor(x,y,radius){
          var options={
               'isStatic' : false,
               'restitution' : 1,
               'friction' : 0.5,
               'density' : 1.2 
          }
          this.body = Bodies.circle(x,y,radius,options)
          this.radius = radius;
          World.add(world,this.body);
     }
     display(){
          var position = this.body.position
          push();
          translate(position.x,position.y);
          rectMode(CENTER);
          fill("pink");
          ellipse(0,0,this.radius,this.radius);
          pop()

     }
}
