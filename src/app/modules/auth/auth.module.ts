import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from '../../pages/registration/registration.component';
import { LoginComponent } from '../../pages/login/login.component';
import { RegistrationFormComponent } from 'src/app/components/registration-form/registration-form.component';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    RegistrationFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
