class fatpig{
    constructor(x,y){
        var pg={restitution:0.6}
        this.pig=Bodies.rectangle(x,y,40,40,pg)
        World.add(wo,this.pig)
    }
    display(){
        var pigga=this.pig.angle
        push()
        translate(this.pig.position.x,this.pig.position.y)
        rotate(pigga)
        rectMode(CENTER)
        fill("green")
        rect(0,0,40,40)
        pop()


    }
}