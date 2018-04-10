import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events)
  {

  }

  buttonTapped()
  {
    this.navCtrl.push(LoginPage);
  }

}