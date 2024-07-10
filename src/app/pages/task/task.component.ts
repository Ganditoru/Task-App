import { Component, OnInit } from '@angular/core';
import { Task } from './model/task.model';
import { ViewFormat } from './model/view-formats.model';
import { TaskService } from './service/task.service'
 
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  public taskList: Task[] = [];

  public currentFormat: ViewFormat = ViewFormat.List;

  constructor(private taskService: TaskService) {}

  public ngOnInit(): void {
    this.getTaskFromService();
  }



  public isListFormat() {
    return this.currentFormat === ViewFormat.List;
  }

  public isTableFormat() {
    return this.currentFormat === ViewFormat.Table;
  }

  public isAddTaskFormat() {
    return this.currentFormat === ViewFormat.AddTask;
  }

  private getTaskFromService() {
    this.taskList = this.taskService.taskList;
  }
}
