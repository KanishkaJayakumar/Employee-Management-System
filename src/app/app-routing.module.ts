import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import AppComponent from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'page1', component: Page1Component},
  {path: '', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
