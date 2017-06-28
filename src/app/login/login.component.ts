import { Component, OnInit } from '@angular/core';

import { RobotService } from '../robot.service';

import { User } from '../user';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  complexForm : FormGroup;

  submitted: boolean;

  loaded: boolean;

  nick: string;
  
  password: string;

  loginOK: Boolean;

  modelUser: User;

  constructor(private robotService: RobotService,
              private fb: FormBuilder) {

    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'nick' : [null, Validators.compose([Validators.required])],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)])]
      //^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$ -> Password (UpperCase, LowerCase and Number)
      //(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$ -> Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)
    });

    this.loaded = false;
  }

  ngOnInit() {
    
  }

  submitForm(value: any){
    console.log(value);

    let loginUser = new User(null, this.nick, this.password);

    this.robotService.createUser(loginUser).subscribe(
        x => {
              console.log('onNext: %s', x);
              this.modelUser = x;
              },
        e => console.log('onError: %s', e),
        () => {
          console.log('onCompleted');
          this.loaded = true;
        });
/*
    this.robotService.validateUser(loginUser).subscribe(
        x => {
              console.log('onNext validateUser: %s', x);
              this.loginOK = x;
              },
        e => console.log('onError validateUser: %s', e),
        () => {
          console.log('onCompleted validateUser');
          if(this.loginOK && this.loginOK == true) {
            this.robotService.getUser(loginUser.id).subscribe(
              x => {
                    console.log('onNext getUser: %s', x);
                    this.modelUser = x;
                    },
              e => console.log('onError getUser: %s', e),
              () => {
                console.log('onCompleted getUser');
              });
            }
        });
        */
  }

}
