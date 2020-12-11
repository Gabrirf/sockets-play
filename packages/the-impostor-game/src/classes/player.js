class Player {
  constructor(name, color, socket) {
    this.name = name;
    this.color = color;
    this.id = socket;
    this.role = 'crewmate';
    this.alive = true;
  }

  vote(player){
    
  }

  die() {
    this.alive = false;
  }
};

module.exports = Player;