class Game 
{
  constructor()
  {
    Matter.body.setAngle(this.body,angle);
  }

  

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){gameState = data.val();})
  }

  update(state)
  {
    database.ref('/').update({gameState: state});
  }

  async start()
  {
    if(gameState === 0)
    {
      team = new Team();
      var teamCountRef = await database.ref('teamCount').once("value");
      if(teamCountRef.exists())
      {
        teamCount = teamCountRef.val();
        team.getCount();
      }
      form = new Form()
      form.display();
    }
    goalKeeper = createSprite({x:mouseX},{y:mouseY});
    goalKeeper.addImage("gloves",goalKeepingGloves);
    team1 = createSprite();
    team1.addImage("team1Image",team1Image);
    team2 = createSprite();
    team2.addImage("team2Image",team2Image);
    team3 = createSprite();
    team3.addImage("team3Image",team3Image);
    team4 = createSprite();
    team4.addImage("team4Image",team4Image);
    team5 = createSprite();
    team5.addImage("team5Image",team5Image);
    team6 = createSprite();
    team6.addImage("team6Image",team6Image);
    team7 = createSprite();
    team7.addImage("team7Image",team7Image);
    team8 = createSprite();
    team8.addImage("team8Image",team8Image);
    teams = [team1,team2,team3,team4,team5,team,tea7,team8];
  }

  play()
  {
    form.hide();
    team.getTeamInfo();
    team.getTeams();
    drawSprites();
  }
}
