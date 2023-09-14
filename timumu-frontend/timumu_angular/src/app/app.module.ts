import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './views/cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NewCardComponent } from './components/new-card/new-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NewCardDialogComponent } from './components/new-card-dialog/new-card-dialog.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { WarningComponent } from './components/warning/warning.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { FoldersComponent } from './components/folders/folders.component';
import { ListsComponent } from './components/lists/lists.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NewFolderDialogComponent } from './components/new-folder-dialog/new-folder-dialog.component';
import { VertMenuComponent } from './components/vert-menu/vert-menu.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NewCardComponent,
    NewCardDialogComponent,
    WarningComponent,
    SearchBarComponent,
    FoldersComponent,
    ListsComponent,
    TasksComponent,
    NewFolderDialogComponent,
    VertMenuComponent,
    ConfirmationDialogComponent,
    LoginComponent,
    HeaderComponent,
    ContentComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    MatSnackBarModule,
    MatAutocompleteModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorInterceptor,
      multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
