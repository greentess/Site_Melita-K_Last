import { Component, OnInit } from '@angular/core';
import { images_metal_slider } from 'src/data';

@Component({
  selector: 'app-main-info-metal',
  templateUrl: './main-info-metal.component.html',
  styleUrls: ['./main-info-metal.component.css']
})
export class MainInfoMetalComponent implements OnInit {
  images=images_metal_slider
  link="/company-metal";
  constructor() { }

  ngOnInit(): void {
  }

}
