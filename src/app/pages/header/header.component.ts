import { Component } from '@angular/core';
import { TaskService } from '../task/service/task.service';
import { Task } from '../task/model/task.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public title: string = 'My tasks!';
  
  public taskList: Task[] = [];

  constructor(private taskService: TaskService){
    this.taskList = this.taskService.taskList;
  }
}
