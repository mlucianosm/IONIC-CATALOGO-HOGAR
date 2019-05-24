import { Component } from '@angular/core';
import {ToastController} from '@ionic/angular';
import { NavController } from  '@ionic/angular';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  checkbox1check  = 0;
  checkbox2check  = 0;
  checkbox3check  = 0;
  
 
  cambiaopcion1(){ 
    if(this.checkbox1check===0) {
     this.checkbox1check=1;}
    else{this.checkbox1check=0};
    return;}
  cambiaopcion2(){ 
     if(this.checkbox2check===0) {
           this.checkbox2check=2;}
     else{this.checkbox2check=0};
     return;}
     cambiaopcion3(){ 
      if(this.checkbox3check===0) {
            this.checkbox3check=2;}
      else{this.checkbox3check=0};
      return;}
     
  

  constructor(public toastController: ToastController,public navCtrl:NavController) { }

  irpage3tab3()
  {
    this.navCtrl.navigateForward(`page3tab3`);
  }
 
  
}
