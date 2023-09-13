import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Folder } from 'src/app/models/folder';
import { List } from 'src/app/models/list';
import { FolderService } from 'src/app/services/folder.service';
import { NewFolderDialogComponent } from '../new-folder-dialog/new-folder-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NewItemType } from 'src/app/models/new-item-type';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  user = new User();
  folders: Folder[] = [];
  currentFolderId: any;

  constructor(private folderService: FolderService,
    private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.addSvgs();
  }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userdetails'));
    console.log(this.user)
    this.getFolders();
    this.folderService.folderIdEmitter.subscribe(
      (data) => {
        if(!(this.folders.findIndex(folder => folder.id == data) > -1)){
          this.getFolders();
        }
        this.currentFolderId = data;
      }
    );

  }
  getFolders(){
    console.log(this.user);
    this.folderService.get(this.user).subscribe(
      (response) => {
        this.folders = <any> response.body;
        console.log(this.folders);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  newFolder() {
    this.folderService.openNewFolderDialog();
  }
  selectFolder(folderId: string) {
    this.folderService.changeId(folderId);
  }
  addSvgs() {
    this.matIconRegistry.addSvgIcon(
      "folder",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/folder-svgrepo-com.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "plus-folder",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/plus-folder.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "plus-list",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/plus-list.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "heart-filled",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/heart-filled.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "heart-outline",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/heart-outline.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "close-square",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/close-square.svg")
    );
  }


}


