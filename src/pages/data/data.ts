import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the DataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {

  public jsonData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http)
  {
    this.http.get('http://jsonplaceholder.typicode.com/posts').map(res => res.json()).subscribe(data => { this.jsonData = data; });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataPage');
  }

}
