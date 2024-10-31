import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
/* import {Breakpoints,BreakpointObserver} from '@angular/cdk/layout'; */
@Component({
  selector: 'app-main-start-page',
  templateUrl: './main-start-page.component.html',
  styleUrls: ['./main-start-page.component.css']
})


export class MainStartPageComponent implements OnInit {

  constructor(private itemService:ItemService) {
    this.itemService.clearFilters(); }

    mobile = false;
    ngOnInit():void{}
/*
  ngOnInit(){
    this.responsive.observe([
      Breakpoints.HandsetPortrait,
      ]).subscribe(result => {

        this.mobile = false;

        if (result.matches) {
          this.mobile = true;
        }

      });
  } */

}
