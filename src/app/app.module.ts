import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './pages/task/task.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { ImportantPipe } from './shared/pipes/important.pipe';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskTableComponent } from './pages/task-table/task-table.component';
import { TaskAddComponent } from './pages/task-add/task-add.component';
import { SharedModule } from './shared/modules/shared.module';

const routes: Routes = [
  { path: 'home', component: TaskComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-table', component: TaskTableComponent },
  { path: 'task-add', component: TaskAddComponent,  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [AppComponent, TaskComponent, HighlightDirective, ImportantPipe, HeaderComponent, TaskListComponent, TaskTableComponent, TaskAddComponent],
  imports: [
    SharedModule,
    RouterModule,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
