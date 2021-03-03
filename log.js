class logged{

    constructor(x,y,height,angle){

    var log={restitution:0.7}
    
    this.loga=Bodies.rectangle(x,y,15,height)
    this.h=height
    Matter.Body.setAngle(this.loga,angle)
    World.add(wo,this.loga)
    }
        display(){
        var thisda=this.loga.angle
        push()
        translate(this.loga.position.x,this.loga.position.y)
        rotate(thisda)
        rectMode(CENTER)
        fill("brown")
        rect(0,0,15,this.h)
        pop()

        }
 
}