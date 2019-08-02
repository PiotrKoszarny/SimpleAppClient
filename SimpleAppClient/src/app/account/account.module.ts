import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SingInComponent } from './sing-in/sing-in.component';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [SingInComponent, RegisterComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AccountModule { }
