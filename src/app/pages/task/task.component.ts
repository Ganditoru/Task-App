import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Task } from './model/task.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewFormat } from './model/view-formats.model';

const TASK_DATA: Task[] = [
  { id: 1, title: 'Create initial task model', description: '...' },
  { id: 2, title: 'Create a task list', description: '...' },
  { id: 3, title: 'Show entire list', description: '...' },
  { id: 4, title: 'Create a task', description: '...' },
  { id: 5, title: 'Show all tasks in a list', description: '...' },
];

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit, AfterViewInit {
  public readonly defaultTask: Task = { id: 0, title: '', description: '' };
  @ViewChild(MatPaginator) public paginator?: MatPaginator;

  public title: string = 'My tasks!';

  public taskList: Task[] = TASK_DATA;
  public displayedColumns: string[] = ['id', 'title', 'description'];
  public dataSource = new MatTableDataSource<Task>(TASK_DATA);

  public newTask: Task = this.defaultTask;

  public currentFormat: ViewFormat = ViewFormat.List;

  constructor() {}

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {}

  public onCreateTask() {
    //const newTask = <Task> { id: this.taskList.length + 1, title: this.newTask.title, description: this.newTask.description };
    const newTask = { ...this.newTask, id: this.taskList.length + 1 };
    const newTaskForTable = {
      ...this.newTask,
      id: this.dataSource.data.length + 1,
    };
    this.newTask.description = '';
    this.newTask.title = '';
    this.taskList.push(newTask);
    this.dataSource.data.push(newTaskForTable);
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

  public onShowFormat(format: number) {
    this.currentFormat = <ViewFormat>format;

    if (this.currentFormat == ViewFormat.Table) {
      setTimeout(() => {
        this.dataSource.paginator = this.paginator!;
      }, 1);
    }
  }

  public getButtonColor(expectedType: number) {
    return expectedType === this.currentFormat ? 'primary' : 'secondary';
  }
}
