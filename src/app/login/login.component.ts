import { Component, OnInit } from '@angular/core';

import { HowDoYouLearnService } from '../how-do-you-learn.service';

import { SessionService } from '../session.service';

import { User } from '../user';

import { UserWrapper } from '../user-wrapper';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  complexForm : FormGroup;

  loadedOK: Boolean;

  modelUser: User;

  constructor(private robotService: HowDoYouLearnService,
              private fb: FormBuilder,
              private sessionService: SessionService) {

    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'user' : [null, Validators.required],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'password': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)])]
      //^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$ -> Password (UpperCase, LowerCase and Number)
      //(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$ -> Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)
    });

    this.readSession();

  }

  readSession() {

    this.modelUser = this.sessionService.getUser();
    console.log(this.modelUser);
    if(this.modelUser && this.modelUser.state == 'OK') {
      this.loadedOK = true;            
    } else {
      this.loadedOK = false;
    }

  }

  ngOnInit() {
    
  }

  submitForm(value: any){

    console.log(value);

    let loginUser = new UserWrapper(value.user, value.password);

    this.robotService.validateUser(loginUser).subscribe(
        x => {
              console.log('onNext: %s', x);
              this.sessionService.setUser(x);
              },
        e => console.log('onError: %s', e),
        () => {
          console.log('onCompleted');
          this.readSession();
        }
      );

  }

  netejar() {

    console.log("netejar");

    this.loadedOK = false;
    this.modelUser = null;
    
  }

  logOut() {

    console.log("logOut");

    this.loadedOK = false;
    this.modelUser = null;
    this.sessionService.setUser(null);

  }

}
