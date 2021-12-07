import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  students: any = [];
  category: any = "";
  constructor(public navCtrl: NavController) {
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

}
