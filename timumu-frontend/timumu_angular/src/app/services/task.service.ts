import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { List } from '../models/list';
import { environment } from 'src/environments/environment';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = environment.timumuApiUrl;
  taskUrl = `${this.baseUrl}/tasks`;

  constructor(private httpClient: HttpClient,
              private dialog: MatDialog,
              private snackBar: MatSnackBar){}
  
  get(listId: any): Observable<Task[]> {
    const getUrl = `${this.taskUrl}/search/findByListId?id=${listId}`;
    return this.httpClient.get<Task[]>(getUrl);
  }

  post(task: Task) {
    return this.httpClient.post<List>(this.taskUrl, task);
  }

  update(task: Task) {
    return this.httpClient.put<Task>(this.taskUrl, task);
  }

  delete(taskId: string) {
    const deleteUrl = `${this.taskUrl}/${taskId}`;
    return this.httpClient.delete(deleteUrl);
  }

  
}
