import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from '../../model/task.model';
import { TaskService } from '../../service/task.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) public paginator?: MatPaginator;
  public displayedColumns: string[] = ['id', 'title', 'description'];

  public dataSource = new MatTableDataSource<Task>([]);

  public constructor(private taskService: TaskService) {}

  public ngOnInit(): void {
    this.getTaskFromService();
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator!;
    }, 1);
  }

  private getTaskFromService() {
    this.dataSource = new MatTableDataSource<Task>(this.taskService.taskList);
  }
}
