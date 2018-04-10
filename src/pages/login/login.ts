import { ValidationPage } from './../validation/validation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder)
  {
    this.loginForm = this.formBuilder.group({
      emailInput: ['', Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")])],
      passwordInput: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLoginFormSubmit()
  {
    console.log('Form validated');
    this.navCtrl.push(ValidationPage, {email: this.loginForm.value["emailInput"], password: this.loginForm.value["passwordInput"]})
  }
}

