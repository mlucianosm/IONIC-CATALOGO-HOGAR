import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1tab1',
  templateUrl: './page1tab1.page.html',
  styleUrls: ['./page1tab1.page.scss'],
})
export class Page1tab1Page implements OnInit {

  
  opcion1: any;
  opcion2: any;
  opcion3: any;

  constructor(private route: ActivatedRoute) {
    this.opcion1 = this.route.snapshot.paramMap.get('opcion1');
    this.opcion2 = this.route.snapshot.paramMap.get('opcion2');
    this.opcion3 = this.route.snapshot.paramMap.get('opcion3');
  }
  ngOnInit() {  }

}
