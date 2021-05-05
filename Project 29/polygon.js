class Polygon{
  constructor(x, y, r){
   // super(x,y,50,50);
   var options = {
    'restitution':0.8,
            'friction':1.0,
            'density':0.3
}
   this.body = Bodies.circle(x,y,r,options);
   this.x=x;
   this.y=y;
   this.r=r;
    this.image = loadImage("polygon.png");
  }

  //World.add(world,polygon);

display(){
  //console.log(this.body.speed);
  imageMode(CENTER);
  image(this.image,this.body.position.x,this.body.position.y,40,40);
}
}