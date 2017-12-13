import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';

import { LoginRoutingModule } from "./login-routing.module";
import { RegistryComponent } from './registry/registry.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent, 
    RegistryComponent
  ]
})
export class LoginModule { }
