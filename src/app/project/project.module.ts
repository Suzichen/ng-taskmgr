import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectNewProjectComponent } from './project-new-project/project-new-project.component';
import { ProjectInviteComponent } from './project-invite/project-invite.component';
import { ProjectRoutingModule } from "./project-routing.module";

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectListComponent, 
    ProjectItemComponent, 
    ProjectNewProjectComponent, 
    ProjectInviteComponent
  ]
})
export class ProjectModule { }
