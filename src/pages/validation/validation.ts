import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the ValidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html'
})
export class ValidationPage {

  public  email: string;
  public  password: string;
  private events: Events;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ev: Events)
  {
    this.email = this.navParams.get('email');
    this.password = this.navParams.get('password');
    this.events = this.ev;
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad ValidationPage');
  }

  goForward()
  {
    this.events.publish('user:login');
    //this.navCtrl.popToRoot();
  }

  goBackward()
  {
    this.navCtrl.pop();
  }
}
