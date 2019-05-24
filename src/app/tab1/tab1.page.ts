
import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

   opcion1 : any;
   opcion2 : any;
   opcion3 : any;

   opcion1check  = 0;
   opcion2check  = 0;
   opcion3check  = 0;
  

   cambiaopcion1(){ 
     if(this.opcion1check===0) {
           this.opcion1check=1}
     else{this.opcion1check=0};
     return;}
     cambiaopcion2(){ 
      if(this.opcion2check===0) {
            this.opcion2check=2}
      else{this.opcion2check=0};
      return;}
      cambiaopcion3(){ 
        if(this.opcion3check===0) {
              this.opcion3check=3}
        else{this.opcion3check=0};
        return;}
   

  constructor(private navCtrl:NavController) { }
  
  ngOnInit() {  }



  irproveedor()
  {
    this.navCtrl.navigateForward(`proveedor`);
  }
  iracercade()
  {
    this.navCtrl.navigateForward(`page1tab1`);
  }

}
