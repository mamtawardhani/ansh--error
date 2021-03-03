class box{
constructor(x,y){
    var prop={restitution:0.5}
this.boxa=Bodies.rectangle(x,y,20,30,prop)
World.add(wo,this.boxa)
}
display(){
    var any=this.boxa.angle
    push()
    translate(this.boxa.position.x,this.boxa.position.y)
    rotate(any*180/PI)
    rectMode(CENTER)
    rect(0,0,20,30)
    pop()
}
}