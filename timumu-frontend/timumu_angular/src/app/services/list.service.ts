import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { List } from '../models/list';
import { get } from 'http';
import { Folder } from '../models/folder';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewItemType } from '../models/new-item-type';
import { NewFolderDialogComponent } from '../components/new-folder-dialog/new-folder-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseUrl = environment.timumuApiUrl;
  listUrl = `${this.baseUrl}/lists`;

  listIdEmitter: Subject<string> = new Subject<string>();

  constructor(private httpClient: HttpClient, 
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  // get(folderId: any): Observable<List[]> {
  //   const getUrl = `${this.listUrl}/search/findByFolderId?id=${folderId}`;
  //   return this.httpClient.post<List[]>(getUrl, null);
  // }
  get(folderId: any){
    const listUrl = "http://localhost:8080/lists";
    const getUrl = `${listUrl}/${folderId}`;
    return this.httpClient.get(getUrl, { observe: 'response',withCredentials: true });
  }

  updateName(list: List, name: string) {
    list.name = name;
    return this.httpClient.put<List>(this.listUrl, list);
  }

  postList(name: string, folderId) {
    let list = this.createNew(name, folderId);
    return this.httpClient.post<List>(this.listUrl, list);
  }
  createNew(name: string, folderId: string) : List{
    let newList = new List();
    newList.name = name;
    newList.folder = new Folder();
    newList.folder.id = folderId;
    return newList;
  }

  delete(listId: string) {
    const deleteUrl = `${this.listUrl}/${listId}`;
    return this.httpClient.delete(deleteUrl);
  }

  deleteCompletedTasks(listId: string) {
    const listUrl = `${this.baseUrl}/lists/deleteCompletedTasks/${listId}`;
    return this.httpClient.delete(listUrl);
  }

  changeId(listId: any) {
    this.listIdEmitter.next(listId);
  }
  openNewFolderDialog(folderId: any) {
    this.dialog.open(NewFolderDialogComponent, {
      width: '40%',
      height: '40vh',
      panelClass: 'my-panel-class',
      data: {
        new: true,
        newItemType: NewItemType.LIST,
        folderId: folderId
      }
    });
  }

}
