import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskRoutingModule } from "./task-routing.module";
import { TaskNewTaskComponent } from './task-new-task/task-new-task.component';
import { TaskMoveComponent } from './task-move/task-move.component';
import { TaskEditListComponent } from './task-edit-list/task-edit-list.component';

@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule
  ],
  declarations: [
    TaskHomeComponent, 
    TaskHeaderComponent, 
    TaskListComponent, 
    TaskItemComponent, 
    TaskNewTaskComponent, 
    TaskMoveComponent, 
    TaskEditListComponent
  ],
  entryComponents: [
    TaskNewTaskComponent,
    TaskMoveComponent,
    TaskEditListComponent
  ]
})
export class TaskModule { }
