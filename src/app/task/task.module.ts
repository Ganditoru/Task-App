import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task-homepage/task/task.component';
import { HighlightDirective } from '../shared/directives/highlight.directive';
import { ImportantPipe } from '../shared/pipes/important.pipe';

import { TaskListComponent } from './task-view/task-list/task-list.component';
import { TaskTableComponent } from './task-view/task-table/task-table.component';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { SharedModule } from '../shared/modules/shared.module';
import { TaskAddComponent } from './task-add/task-add/task-add.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

const routesTask: Routes = [
  { path: '', component: TaskComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-table', component: TaskTableComponent },
  { path: 'task-add', component: TaskAddComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    TaskComponent,
    HighlightDirective,
    ImportantPipe,
    TaskListComponent,
    TaskTableComponent,
    TaskAddComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, FlexLayoutModule],
  providers: [provideRouter(routesTask)],
})
export class TaskModule {}
