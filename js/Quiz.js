class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("blue")
    //write code to show a heading for showing the result of Quiz
     textSize(50);
     fill("red");
     text("result of the quiz",340,50);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
     
    if(allContestants!=undefined){
      textSize(32);
      text("Note:the name of contestant who answered correctly is highlited in green",130,230);
      var display=230;

      for(var plr in allContestants){
        var correctans="2";
        if(correctans===allContestants[plr].answer){
          fill("Green")
       
        }else{
          fill("red");
          
        }
        display+=30
        textSize(20);
        text(allContestants[plr].name+":"+allContestants[plr].answer,250,display);
      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
