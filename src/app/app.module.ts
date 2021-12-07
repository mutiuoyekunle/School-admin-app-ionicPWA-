import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { BusPage } from '../pages/bus/bus';
import { LibraryPage } from '../pages/library/library';
import { ParentPage } from '../pages/parent/parent';
import { StudentPage } from '../pages/student/student';
import { TeacherPage } from '../pages/teacher/teacher';
import { ListPage } from '../pages/list/list';
import { NewpostPage } from '../pages/newpost/newpost';
import { BlockPage } from '../pages/block/block';
import { CreatNewPage } from '../pages/creat-new/creat-new';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
   if (!items) return [];
   return items.filter(it => it[field] == value || (value == ""));
 }
}

@Pipe({
    name: 'searchFilter2'
})
export class SearchFilter implements PipeTransform {
    transform(items: any[], criteria: any): any {
        return items.filter(item =>{
           for (let key in item ) {
             if((""+item[key]).includes(criteria)){
                return true;
             }
           }
           return false;
        });
    }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    BusPage,
    LibraryPage,
    ParentPage,
    StudentPage,
    TeacherPage,
    NewpostPage,
    BlockPage,
    CreatNewPage,
    SearchFilter,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    BusPage,
    LibraryPage,
    ParentPage,
    StudentPage,
    TeacherPage,
    NewpostPage,
    BlockPage,
    CreatNewPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

