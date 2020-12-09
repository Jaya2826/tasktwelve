import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasktwoComponent} from './tasktwo/tasktwo.component';
import {TaskthreeComponent} from './taskthree/taskthree.component';
import {TaskfourComponent} from './taskfour/taskfour.component';
import {TaskfiveComponent} from './taskfive/taskfive.component';
import {TasksixComponent} from './tasksix/tasksix.component';
import {TasksevenComponent} from './taskseven/taskseven.component';


const routes: Routes = [
  {path :'tasktwo',component: TasktwoComponent},
  {path: 'taskthree', component : TaskthreeComponent},
  {path: 'taskfour', component : TaskfourComponent},
  {path: 'taskfive', component : TaskfiveComponent},
  {path: 'tasksix', component : TasksixComponent},
  {path: 'taskseven', component : TasksevenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
