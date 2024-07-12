import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: 'task',
    loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
  },
  { path: '**', redirectTo: 'task' },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
