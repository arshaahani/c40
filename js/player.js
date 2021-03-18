class Player{
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
        
    }
    getCount(){
        var databaseref=database.ref("playercount")
        databaseref.on("value",function(data){
    playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
            playercount:count
        })
    }
    update(){
    
        var playerIndex="players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getplayersinfo(){
        var playerinforef=database.ref("players")
        playerinforef.on("value",function(data){
            allPlayers=data.val()
        })
    }
    static resetplayerinfo(){
        var playerref=database.ref("/").set({
            gamestate:0,
            playercount:0
        })
    }
}