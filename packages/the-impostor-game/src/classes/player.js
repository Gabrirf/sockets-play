class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.alive = true;
    
  }

  vote(){
    
  }

  die() {
    this.alive = false;
  }
};