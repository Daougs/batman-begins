class createDrop{
    constructor(x,y){
        var rainOptions= {restitution:0.01,
         friction: 0.001}
        this.rain= Bodies.circle(x, y, 5, rainOptions)
        this.r = 5
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.rain)
    }
    updateY(){
        if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    showDrop(){
        fill(this.color)
        ellipseMode(CENTER)
        ellipse(this.rain.position.x, this.rain.position.y, this.r, this.r)
    }
    
}
