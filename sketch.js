//namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var en, wo
var gr
var b1,b2
var p1
var l1

function setup(){
  createCanvas(400,400)

  en = Engine.create()
  console.log(en)
  wo=en.world
  // l1-new logged(100,20,100,PI)
  p1=new fatpig(220,149)
  b2=new box(190,100)
  console.log(wo)
  b1=new box(200,30)
  gr = new Ground(200, 300,400,20)
  l1=new logged(100,20,100,PI)

}

function draw(){
  background(0)
Engine.update(en)

gr.display()
  b1.display()
  b2.display()
  p1.display()
  l1.display()
}
//Naming, Creating a new object, Properties, Function 