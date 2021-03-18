class Game{
    constructor(){

    }
    getState(){
      var dataref=database.ref("gamestate")   
      dataref.on("value",function(data){
      gameState=data.val()    
      })
    }
    updateState(state){
        database.ref("/").update({
            gamestate:state
        })
    }
    start(){
        player=new Player()
        player.getCount() 
        form=new Form()
        form.display()
        car1=createSprite(100,200)
        car1.addImage(car1Image)
        car2=createSprite(300,200)
        car2.addImage(car2Image)
        car3=createSprite(500,200)
        car3.addImage(car3Image)
        car4=createSprite(700,200)
        car4.addImage(car4Image)
        cars=[car1,car2,car3,car4]

    }
    play(){
        form.hide()
       //textSize(20)
        //text("gamestart",300,300)
        Player.getplayersinfo()
        if(allPlayers!=undefined){
            image (trackImage,0,-displayHeight,displayWidth,displayHeight*3)
        var display_postion=130
        var pos=0
        var x =100
        var y
    for(var plr in allPlayers){
   
display_postion+=20
        //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_postion)
        x=x+200
        y=displayHeight-allPlayers[plr].distance
        cars[pos].x=x
        cars[pos].y=y
        pos=pos+1
        if (pos===player.index){
            fill("red")
            circle(x,y,70)
            cars[pos-1].shapeColor="red"
           camera.position.x=displayWidth/2
           camera.position.y=cars[pos-1].y
        }
        console.log(player.index)
        if(keyIsDown(UP_ARROW)){
            console.log(player)
            player.distance+=10
            player.update()
        }
    }
    drawSprites();

    }
}
}