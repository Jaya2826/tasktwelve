import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskthreeComponent } from './taskthree/taskthree.component';
import { TaskfourComponent } from './taskfour/taskfour.component';
import { TaskfiveComponent } from './taskfive/taskfive.component';
import { TasksixComponent } from './tasksix/tasksix.component';
import { TasksevenComponent } from './taskseven/taskseven.component';
import { TaskeightComponent } from './taskeight/taskeight.component';
import { TasktwoComponent } from './tasktwo/tasktwo.component';
import { TasknineComponent } from './tasknine/tasknine.component';
import { TasktenComponent } from './taskten/taskten.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskthreeComponent,
    TaskfourComponent,
    TaskfiveComponent,
    TasksixComponent,
    TasksevenComponent,
    TaskeightComponent,
    TasktwoComponent,
    TasknineComponent,
    TasktenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
