import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Datasource } from 'ngx-ui-scroll';

import { Location } from '@angular/common';
import { AllapiService } from '../allapi.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  jsondata: any;
  data: any;
  mySelect: any
  some: any = [];
  index = 0;
  end = 12
  newend: any;
  show: boolean = true

  constructor(
    private ActivateRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private routes: Router,
    private location: Location,
    private allser: AllapiService
  ) {
  }

  ngOnInit(): void {
    this.data = 'hightolow'
    const urlvalue = this.route.snapshot.paramMap.get('value')
    this.data = urlvalue

    this.allser.getdata().subscribe(r => {
      this.some = r;
      this.jsondata = this.some.slice(this.index, this.end)
      console.log(this.some)
    })
  }


  sort() {
    switch (this.mySelect) {
      case "lowtohigh":
        {
          this.routes.navigate(['products', 'list%3FsortType=', this.mySelect])
          this.location.replaceState('/products/list%3FsortType=', this.mySelect);
          this.jsondata = this.jsondata.sort((low: any, high: any) => low.Price - high.Price);
          break;
        }

      case "hightolow":
        {
          this.location.replaceState('/products/list%3FsortType=', this.mySelect);
          this.jsondata = this.jsondata.sort((low: any, high: any) => high.Price - low.Price);
          break;
        }

      default: {
        this.location.replaceState('/products/list%3FsortType=', this.mySelect);
        this.jsondata = this.jsondata.sort((low: any, high: any) => high.Price - low.Price);
        break;
      }
    }
  }


  navigate() {
    this.routes.navigate(['feedback'])
  }

  onScroll(e: any) {
    if (this.jsondata.length >= 36) {
      this.show = false
      console.log('No more items');
      return;
    }
    this.show = true
    setTimeout(() => {
      console.log('scrolled!!', e);
      this.newend = this.end + 12
      console.log(this.newend)
      const moredata = this.some.slice(this.end, this.end + 12)
      this.jsondata = [...this.jsondata, ...moredata];
      console.log(this.jsondata)
      this.end = this.newend
    }, 1500);
  }
}
