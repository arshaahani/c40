var ball;
var position,database
var gameState,playerCount
var form,player,game
var allPlayers
var cars
var car1,car2,car3,car4
function preload() {
    car1Image=loadImage("images/car1.png")
    car2Image=loadImage("images/car2.png")
    car3Image=loadImage("images/car3.png")
    car4Image=loadImage("images/car4.png")
    trackImage=loadImage("images/track.jpg")
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database()
   game=new Game()
   game.getState()
   game.start()

}


function draw(){
    background("white");
    if(playerCount===4){
        game.updateState(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
 
}



    