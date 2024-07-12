import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/task.model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent  implements OnInit {
  public newTask: Task = { id: 0, title: '', description: '' };
  public taskList: Task[] = [];
  public constructor(private taskService: TaskService) {}

  public ngOnInit(): void {
    this.getTaskFromService();
  }

  public onCreateTask() {
    const newTask = { ...this.newTask, id: this.taskList.length + 1 };

    this.newTask.description = '';
    this.newTask.title = '';

    this.taskService.addTask(newTask);
    this.getTaskFromService();
  }

  private getTaskFromService() {
    this.taskList = this.taskService.taskList;
  }
}
