import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: "./app.component.html",
})
export class AppComponent  { 
  public title = 'To Do';
  public tasks = [
    {title: "Make the bed"},
    {title: "Clean the lounge"},
    {title: "Wipe down the bench"}
  ];

  public complTasks = [];

  addTask(newTask){
      var t = {title: newTask.value};
      this.tasks.push(t);
      this.complTasks.splice(this.tasks.lastIndexOf(t), 1);
  }
  removeTask(task){
      this.tasks.splice(this.tasks.lastIndexOf(task), 1);
      this.complTasks.push(task);
  }

  reAddTask(task){
      this.tasks.push({title: task.innerText});
      this.complTasks.splice(this.complTasks.lastIndexOf(task), 1);
  }
}
