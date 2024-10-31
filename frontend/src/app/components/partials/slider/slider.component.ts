import { Component, Input, OnInit, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface sliderImage {
  imageSrc:string;
  imageAlt:string;
  title1:string;
  title2:string;
  description1:string;
  description2:string;
}



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() images:sliderImage[]=[]
  @Input() indicators=true;
  @Input() controls=true;
  @Input() autoSlide=false;
  @Input() slideInterval=5000;
  @Input() link:string='';

  selectedIndex=0;

  location: string | undefined;
  go: string | undefined;

  flag_nozi: boolean=false;

  constructor(@Inject(DOCUMENT) private document: Document) {





}

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
    console.log((this.document.location.href.split('/'))[3]);
    this.location  =(this.document.location.href.split('/'))[3]
    this.go='/'+this.location+this.link
    console.log(this.go);

    if(this.link.split('/')[1]=="company-knives")
      this.flag_nozi=true
  }

  autoSlideImages():void{
    setInterval(()=>{
      this.onNextClick();
    },this.slideInterval)
  }

  selectImage(index:number):void{
    this.selectedIndex=index;
  }

  onPrevClick():void{
    if(this.selectedIndex===0){
      this.selectedIndex=this.images.length-1;
    } else{
      this.selectedIndex--;
    }
  }
  onNextClick():void{
    if(this.selectedIndex===this.images.length-1){
      this.selectedIndex=0;
    } else{
      this.selectedIndex++;
    }
  }

}
