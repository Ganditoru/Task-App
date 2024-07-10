import { Injectable } from "@angular/core";
import { Task } from "../model/task.model";

const TASK_DATA: Task[] = [
    { id: 1, title: 'Create initial task model', description: '...' },
    { id: 2, title: 'Create a task list', description: '...' },
    { id: 3, title: 'Show entire list', description: '...' },
    { id: 4, title: 'Create a task', description: '...' },
    { id: 5, title: 'Show all tasks in a list', description: '...' },
  ];

@Injectable({
    providedIn: 'root'
  })
  export class TaskService {

    public get taskList(): Task[] {
        return this.innerTaskList;
    }

    private innerTaskList: Task[] = [];

    public constructor() {
        this.innerTaskList = TASK_DATA;
        console.log("Task service was initialized!");
    }

    public addTask(newTask: Task) {
        this.innerTaskList.push(newTask);
    }

  }