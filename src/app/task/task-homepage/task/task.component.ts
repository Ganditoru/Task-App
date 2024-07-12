import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task.model';
import { TaskService } from '../../service/task.service'
 
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  public taskList: Task[] = [];

  constructor(private taskService: TaskService) {}

  public ngOnInit(): void {
    this.getTaskFromService();
  }

  private getTaskFromService() {
    this.taskList = this.taskService.taskList;
  }
}
