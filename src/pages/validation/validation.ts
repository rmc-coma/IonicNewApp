import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.email = this.navParams.get('email');
    this.password = this.navParams.get('password');
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad ValidationPage');
  }

  goForward()
  {
    this.navCtrl.popToRoot();
  }

  goBackward()
  {
    this.navCtrl.pop();
  }
}
