class Bob{
	constructor(x,y,r)
	{
		var options={
            isStatic:false,
			restitution:0.3,
			friction:3,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

       if(keyDown("space")){
        this.velocity.X = 2;
        this.velocityY = -17;
      }
      this.velocityY = this.velocityY + 0.8;
	}
	display()
	{
			var BobPosition=this.body.position;		
			push()
			translate(BobPosition.x, BobPosition.y);
            rectMode(CENTER);
            fill("purple")
            stroke("purple")
			ellipse(0,0,this.r, this.r);
            pop()
    }
}