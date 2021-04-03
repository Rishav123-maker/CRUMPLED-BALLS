class Paper{
    constructor(x,y,r)
    {
        var options ={
            'restitution' : 0.3,
            'friction' : 0,
            'density' : 1.2
       }
        this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
    



    this.image=loadImage("paper.png")
       }
       display()
       {


        var rubberpos=this.body.position;		
        push()
        translate(rubberpos.x, rubberpos.y);
        rectMode(CENTER);
        //draw the ellipse here to display the rubber ball
        
        imageMode(CENTER);
        image(this.image,0,this.r-25,this.r,this.r)
        //rect(0,0,this.dustbinWidth, this.wallThickness);
        pop()


       }
}