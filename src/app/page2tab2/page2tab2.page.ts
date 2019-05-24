import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FunctionCall } from '@angular/compiler';

@Component({
  selector: 'app-page2tab2',
  templateUrl: './page2tab2.page.html',
  styleUrls: ['./page2tab2.page.scss'],
})
export class Page2tab2Page implements OnInit {


sumaopcion1 =0;
sumaopcion2 =0;
sumaopcion3 =0;
sumaopcion4 =0;
  
  
  constructor(public actionSheetController: ActionSheetController) { 
    
  }
    
  
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Que tipo de Iluminacion prefiere:',
      buttons: [{
        text: 'Linternas',
        icon: 'star-outline',
        handler: () => { 
          this.sumaopcion1 =this.sumaopcion1 +1;
        }
      }, {
        text: 'Leds',
        icon: 'star-half',
        handler: () => {
          this.sumaopcion2 = this.sumaopcion2 +1;
        }
      }, {
        text: 'Muy Buena',
        icon: 'star',
        handler: () => {
          this.sumaopcion3 = this.sumaopcion3 +1;
        }
      }, {
        text: 'Recomendable',
        icon: 'heart',
        handler: () => {
          this.sumaopcion4 = this.sumaopcion4 +1;
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  ngOnInit() { }

}
