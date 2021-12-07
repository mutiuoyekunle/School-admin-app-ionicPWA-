import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginShow: boolean  = true;
  chPassShow: boolean  = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  chPasswordToggle() {
  	this.loginShow = false;
  	this.chPassShow = true;
  }

  loginPToggle() {
  	this.loginShow = true;
  	this.chPassShow = false;
  }

  signin() {
  	this.navCtrl.setRoot(HomePage);
  }



}
