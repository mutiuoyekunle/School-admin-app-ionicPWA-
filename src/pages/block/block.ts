import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-block',
  templateUrl: 'block.html',
})
export class BlockPage {

  toggle: any = "full";
  rToggle: any  = "rightFull";
  dToggles: any = "pActive";
  students: any = [];
  busStaffs: any = [];
  libStaffs: any = [];
  teachers: any = [];

  category: any = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.initializeItems();
  }

  initializeItems() {
  	this.students = [
  		{name: "Victoria James", id:1, pid: "546", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "paid", blocked:false},
  		{name: "Mathew Krish", id:2, pid: "546", level: "level 2", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "not paid", blocked:false},
  		{name: "Sharukh Khan", id:3, pid: "546", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "not paid", blocked:true},
  		{name: "Amir James", id:4, pid: "546", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "paid", blocked:false},
  		{name: "Mutiu Oyekunle", id:5, pid: "546", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "not paid", blocked:false},
  		{name: "Victoria James", id:6, pid: "546", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "paid" ,blocked:false },
  		{name: "Victoria James", id:7, pid: "546", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "not paid", blocked:true},
  		{name: "Mathew Fola", id:8, pid: "546", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "paid", blocked:false},
  		{name: "Victoria James", id:8, pid: "546", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "not paid", blocked:false},
  		{name: "Victoria James", id:10, pid: "546", level: "level 3", dp: "assets/imgs/vic6.jpg", bus: "valid", fee: "paid", blocked:false}
  	];

  	this.teachers = [
  		{name: "Mr James", id:1,  classT4: "level 3", course: "mathematics", dp: "assets/imgs/download.png", blocked:false},
  		{name: "Mathew Krish", id:2,  classT4: "level 2", course: "geography", dp: "assets/imgs/download.png", blocked:false},
  		{name: "Sharukh Khan", id:3,  classT4: "", course: "mathematics", dp: "assets/imgs/download.png", blocked:true},
  		{name: "Mrs shalomn", id:4,  classT4: "", course: "economics", dp: "assets/imgs/download.png", blocked:false}
  	];

  	this.busStaffs = [
  		{name: "Mr Isaac", id:1, status: "Bus Staff", dp: "assets/imgs/download.png",  blocked:false},
  		{name: "Mathew Jane", id:2, status: "Bus Staff", dp: "assets/imgs/download.png", blocked:true},
  		{name: "Sharukh Khan", id:3, status: "Bus Staff", dp: "assets/imgs/download.png", blocked:true},
  		{name: "Mrs shalomn", id:4, status: "Bus Staff",  dp: "assets/imgs/download.png",  blocked:false}
  	];

  	this.libStaffs = [
  		{name: "Mr Water", id:1, status: "Library Staff", dp: "assets/imgs/download.png",  blocked:false},
  		{name: "Mathew pk", id:2, status: "Library Staff", dp: "assets/imgs/download.png", blocked:true},
  		{name: "Sherlock Holmes", id:3, status: "Library Staff", dp: "assets/imgs/download.png",  blocked:false},
  		{name: "Mrs shain", id:4, status: "Library Staff",  dp: "assets/imgs/download.png",   blocked:false}
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

  getItems2(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.teachers = this.teachers.filter((item) => {
        return ( (item.name.toLowerCase() ).indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getItems3(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.busStaffs = this.busStaffs.filter((item) => {
        return ( (item.name.toLowerCase() ).indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getItems4(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.libStaffs = this.libStaffs.filter((item) => {
        return ( (item.name.toLowerCase() ).indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  updateStdValid(id) {

  }

  updateTValid(id) {

  }

  updateLValid(id) {

  }

  updateBValid(id) {

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

  parentSect() {
  		this.dToggles='pActive';
  }
  teacherSect() {
  		this.dToggles='tActive';
  }
  busSect() {
  		this.dToggles='bActive';
  }
  librarySect() {
  		this.dToggles='lActive'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlockPage');
  }

}
