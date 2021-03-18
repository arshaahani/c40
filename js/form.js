class Form{
constructor(){
    this. input=createInput("name")
    this. button=createButton("play")
    this. greeting=createElement("h3")
    this. reset=createButton("Reset")
}
hide(){
    this.button.hide()
    this.input.hide()
    this.greeting.hide()
}
display(){
    
   this.input.position(displayWidth/2,displayHeight/2)
    this.button.position(displayWidth/2,displayHeight/2+50)
    this.reset.position(displayWidth-100,40)
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player. name=this.input.value()
        playerCount=playerCount+1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("hello "+player.name)
       this.greeting.position(displayWidth/2,displayHeight/2)
    })
    this.reset.mousePressed(()=>{
        Player.resetplayerinfo()
    })
}
}