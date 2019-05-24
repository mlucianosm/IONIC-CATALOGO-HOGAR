import { Component } from '@angular/core';
import {ToastController} from '@ionic/angular';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

   radio1check  = 0;
   radio2check  = 0;
  
   cambiaopcion1(){ 
     if(this.radio1check===0) {
      this.radio1check=1;this.radio2check=0;}
     else{this.radio1check=0};
     return;}
   cambiaopcion2(){ 
      if(this.radio2check===0) {
            this.radio2check=2;this.radio1check=0;}
      else{this.radio2check=0};
      return;}
      
   

  constructor(public toastController: ToastController,public navCtrl:NavController) { }

  irpage2tab2()
  {
    this.navCtrl.navigateForward(`page2tab2`);
  }



}
