import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { BusPage } from '../pages/bus/bus';
import { LibraryPage } from '../pages/library/library';
import { ParentPage } from '../pages/parent/parent';
import { StudentPage } from '../pages/student/student';
import { TeacherPage } from '../pages/teacher/teacher';
import { NewpostPage } from '../pages/newpost/newpost';
import { CreatNewPage } from '../pages/creat-new/creat-new';
import { BlockPage } from '../pages/block/block';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  directT: boolean = true;

  pages: Array<{title: string, component: any}>;
  pagesD: Array<{title: string, component: any}>;
  pagesE: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Create New', component: CreatNewPage },
    ];

    this.pagesD = [
      { title: 'Student', component: StudentPage },
      { title: 'Parent', component: ParentPage },
      { title: 'Teacher', component: TeacherPage },
      { title: 'Bus', component: BusPage },
      { title: 'Library', component: LibraryPage },
    ];

    this.pagesE = [
      { title: 'Restrict Users', component: BlockPage },
      { title: 'New Post', component: NewpostPage },
    ];


  }

  dropDown() {

    if (this.directT==true) { 
      // code...
      this.directT=false
    } else {
      // code...
      this.directT=true
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
