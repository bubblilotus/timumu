import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { FoldersComponent } from './components/folders/folders.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "content", component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
