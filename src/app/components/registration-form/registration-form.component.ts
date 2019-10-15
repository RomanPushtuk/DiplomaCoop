import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BackEndServiseService } from 'src/app/shadule/back-end-servise.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public login:FormControl = new FormControl();
  public password:FormControl = new FormControl();
  public mail:FormControl = new FormControl();

  constructor(private http: BackEndServiseService) { }

  submit() {
    const login = this.login.value;
    const password = this.password.value;
    const mail = this.mail.value;

    const data = JSON.stringify({
      login,
      password,
      mail
    })
    this.http.postData(data).subscribe(item => {
      console.log(item);
    })
  }

  ngOnInit() {
  }

}
