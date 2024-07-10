import { Component, OnInit } from '@angular/core';
import { Task } from '../task/model/task.model';
import { TaskService } from '../task/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  public taskList: Task[] = [];

  constructor(private taskService: TaskService) {}

  public ngOnInit(): void {
    this.getTaskFromService();
  }

  private getTaskFromService() {
    this.taskList = this.taskService.taskList;
  }

}
