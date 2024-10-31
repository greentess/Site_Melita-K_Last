import { Component, OnInit } from '@angular/core';
import { images_avia_slider } from 'src/data';

@Component({
  selector: 'app-main-info-avia',
  templateUrl: './main-info-avia.component.html',
  styleUrls: ['./main-info-avia.component.css']
})
export class MainInfoAviaComponent implements OnInit {
  images=images_avia_slider;
  link="/company-avia";
  constructor() { }

  ngOnInit(): void {
  }

}
