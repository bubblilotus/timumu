import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Folder } from '../models/folder';
import { environment } from 'src/environments/environment';
import { Observable, Subject, map } from 'rxjs';
import { List } from '../models/list';
import { Task } from '../models/task';
import { MatDialog } from '@angular/material/dialog';
import { NewFolderDialogComponent } from '../components/new-folder-dialog/new-folder-dialog.component';
import { NewItemType } from '../models/new-item-type';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  
  baseUrl = environment.timumuApiUrl;
  folderUrl = `${this.baseUrl}/folders`;

  folderIdEmitter: Subject<string> = new Subject<string>();

  constructor(private httpClient: HttpClient,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  get(): Observable<Folder[]> {
    return this.httpClient.get<Folder[]>(this.folderUrl);
  }
  
  updateName(folder: Folder, name: string) {
    const folderUrl = `${this.baseUrl}/folders`;
    folder.name = name;
    return this.httpClient.put<List>(folderUrl, folder);
  }
  
  delete(folderId: string) {
    const deleteUrl = `${this.baseUrl}/folders/${folderId}`;
    return this.httpClient.delete(deleteUrl);
  }
  
  post(name: string): Observable<any> {
    let folder = new Folder();
    folder.name = name;
    return this.httpClient.post<Folder>(this.folderUrl, folder);
  }

  changeId(folderId: any) {
    this.folderIdEmitter.next(folderId);
  }

  openNewFolderDialog() {
    this.dialog.open(NewFolderDialogComponent, {
      width: '40%',
      height: '40vh',
      panelClass: 'my-panel-class',
      data: {
        new: true,
        newItemType: NewItemType.FOLDER,
        folderId: null
      }
    });
  }
    
  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-class'];
    config.duration = 5000;
    this.snackBar.open(message, action, config);
  }

}
interface getFolderResponse {
  _embedded: {
    folders: Folder[]
  }
}
interface getListResponse {
  _embedded: {
    lists: List[]
  }
}
interface getTaskResponse {
  _embedded: {
    tasks: Task[]
  }
}
