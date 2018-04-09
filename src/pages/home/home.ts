import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataPage } from '../data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private loggedIn: boolean;
  public  buttonText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public getLoggedIn(): boolean
  {
    return this.loggedIn;
  }

  public setLoggedIn(loggedIn: boolean)
  {
    this.loggedIn = loggedIn;
    if (this.loggedIn)
      this.buttonText = "Log in"
    else
      this.buttonText = "Show data"
  }

  buttonTapped()
  {
    if (this.loggedIn = true) {
      this.navCtrl.push(LoginPage);
    } else {
      this.navCtrl.push(DataPage, {LoggedIn: this.loggedIn});
    }
  }

}