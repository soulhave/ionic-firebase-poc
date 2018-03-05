import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

const firebaseConfig: FirebaseAppConfig = {    
  apiKey: "AIzaSyBMLnImVDLeRUEvV50ABFwjGbNAFxNyI48",
  authDomain: "ionic-poc-e5186.firebaseapp.com",
  databaseURL: "https://ionic-poc-e5186.firebaseio.com",
  projectId: "ionic-poc-e5186",
  storageBucket: "ionic-poc-e5186.appspot.com",
  messagingSenderId: "945182266167"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
