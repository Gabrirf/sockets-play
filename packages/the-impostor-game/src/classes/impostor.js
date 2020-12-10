class Impostor extends Player {
  constructor(tasks) {
    this.tasks = tasks;
  }
  kill(crewmate) {
      crewmate.die();
      return crewmate;
  }
};