import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular';

@Component({
  selector: 'app-page3tab3',
  templateUrl: './page3tab3.page.html',
  styleUrls: ['./page3tab3.page.scss'],
})
export class Page3tab3Page implements OnInit {
  
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  iracercade()
  {
    this.navCtrl.navigateForward(`page1tab1`);
  }
  irgasfiter()
  {
    this.navCtrl.navigateForward(`gasfiter`);
  }
  irelectricista()
  {
    this.navCtrl.navigateForward(`electricista`);
  }
}
