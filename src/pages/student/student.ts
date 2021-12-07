import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  stdSeg: any = "";
  students: any = [];
  category: any = "";
  myDate: any = "January/01/1980";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.stdSeg = "all";
  	this.initializeItems();
  }

  initializeItems() {
  	this.students = [
  		{name: "Victoria James", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "paid"},
  		{name: "Mathew Krish", level: "level 2", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "not paid"},
  		{name: "Sharukh Khan", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "not paid"},
  		{name: "Amir James", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "paid"},
  		{name: "Mutiu Oyekunle", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "not paid"},
  		{name: "Victoria James", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "paid"},
  		{name: "Victoria James", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "not paid"},
  		{name: "Mathew Fola", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "paid"},
  		{name: "Victoria James", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "not paid"},
  		{name: "Victoria James", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "paid"}
  	];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.students = this.students.filter((item) => {
        return ( (item.name.toLowerCase() + " " + item.level.toLowerCase() ).indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  updateBusValid() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

}
