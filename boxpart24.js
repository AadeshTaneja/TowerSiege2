class Box24{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':10,
            'density':0.5,
            'isStatic':false
        }
       

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
       // this.image = loadImage("img (15).png");
       
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255,253,0)
       
        
       
       rect(0,0,this.width,this.height)
        pop();
      }else { World.remove(world,this.body);
        push();
       this.visibility=this.Visibility-5
       tint(255,255);
       rect(5000,5000,0,0);
       pop();
      }
    }
}