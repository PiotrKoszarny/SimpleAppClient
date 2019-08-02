import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthUserModel } from '../models/AuthUserModel';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  signInFG: FormGroup;
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {
    this.signInFG = fb.group({
      email: fb.control('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: fb.control('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }

  ngOnInit() {
  }

  regiser() {
    const user: AuthUserModel = {
      email: this.signInFG.value.email,
      password: this.signInFG.value.password,
      confirmPassword: this.signInFG.value.password
    };

    this.accountService.regiser(user).subscribe(x => console.log(x));
  }

  signIn() {
    const user: AuthUserModel = {
      email: this.signInFG.value.email,
      password: this.signInFG.value.password,
      confirmPassword: this.signInFG.value.password
    };

    this.accountService.singIn(user).subscribe(x => console.log(x));
  }
}
