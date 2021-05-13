class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    //    this.x=x;
    //     this.y=y;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(x,y,radius,options);
      
        World.add(world,this.body);
        this.radius=radius;
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        //translate(pos.x,pos.y);
       // rotate(angle);
         ellipseMode(RADIUS);
         fill(255);
         ellipse(pos.x,pos.y,this.radius,this.radius);
        // imageMode(CENTER);
        // //fill(255);
        // image(this.image,pos.x,pos.y,this.radius*2,this.radius*2);
        pop();



    }
};

// class Paper
// {
// 	constructor(x,y,r)
// 	{
// 		var options={
// 			isStatic:false,
// 			restitution:0.3,
// 			friction:0,
// 			density:1.2

			
// 			}
// 		this.x=x;
// 		this.y=y;
// 		this.r=r
// 		this.image=loadImage("paper.png");
// 		this.body=Bodies.circle(x, y, r/2, options)
// 		World.add(world, this.body);

// 	}
// 	display()
// 	{
			
// 			var pos=this.body.position;		
//             var angle=this.body.angle;
// 			push()
//             translate(pos.x, pos.y);
//             rotate(angle);
// 			//rectMode(CENTER)
// 			//strokeWeight(4);
// 			//fill(255,0,255)
// 			imageMode(CENTER);
// 			image(this.image, 0,0,this.r, this.r)
// 			//ellipse(0,0,this.r, this.r);
// 			pop()
			
// 	}

// }