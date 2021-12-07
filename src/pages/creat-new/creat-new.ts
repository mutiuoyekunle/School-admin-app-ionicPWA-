import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreatNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-creat-new',
  templateUrl: 'creat-new.html',
})
export class CreatNewPage {
  title: string = "Student";
  toggle: any = "full";
  rToggle: any  = "rightFull";
  dToggles: any = "sActive";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toggleMenu() {
  	if (this.toggle == "full") { 
  		this.toggle = "part";
  		this.rToggle = "rightPart";
  	} else {
  		this.toggle = "full";
  		this.rToggle = "rightFull";
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatNewPage');
  }

}
