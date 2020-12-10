class Crewmate extends Player {
  constructor(tasks) {
    this.tasks = tasks;
  }

  getTask(){
    return tasks[Math.floor(Math.random * this.tasks.length)];
  }

  doTask(task) {
      task.complete();
      return tasks;
  }
};