class Ground{

constructor(x,y,width,height){
    var o ={isStatic:true}
    this.abc = Bodies.rectangle(x,y,width,height,o)
    World.add(wo, this.abc)
    this.w=width
    this.h=height
}

display(){
    rectMode(CENTER)
    rect(this.abc.position.x, this.abc.position.y,this.w,this.h )
}



}