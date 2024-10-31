import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-company-knives',
  templateUrl: './company-knives.component.html',
  styleUrls: ['./company-knives.component.css']
})
export class CompanyKnivesComponent implements OnInit {

  constructor(private itemService:ItemService) {
    this.itemService.clearFilters(); }

  ngOnInit(): void {
  }
open(id:string){
  var w=window.innerWidth

  if(id=='c1' && w<=730){

    var elc2 = <HTMLInputElement> document.getElementById("c2");
    elc2.style.height='350px';
    var elp2 = <HTMLInputElement> document.getElementById("p2");
    elp2.style.maxHeight='13em'
    var elc3 = <HTMLInputElement> document.getElementById("c3");
    elc3.style.height='350px';
    var elp3 = <HTMLInputElement> document.getElementById("p3");
    elp3.style.maxHeight='13em'
    var elc4 = <HTMLInputElement> document.getElementById("c4");
    elc4.style.height='350px';
    var elp4 = <HTMLInputElement> document.getElementById("p4");
    elp4.style.maxHeight='13em'
    var elc5 = <HTMLInputElement> document.getElementById("c5");
    elc5.style.height='350px';
    var elp5 = <HTMLInputElement> document.getElementById("p5");
    elp5.style.maxHeight='13em'

    var elc1 = <HTMLInputElement> document.getElementById("c1");
    elc1.style.height='400px';
    var elp1 = <HTMLInputElement> document.getElementById("p1");
    elp1.style.maxHeight='19em'

    if (w<=540){
      elc1.style.height='450px';
      elp1.style.maxHeight='25em'
    }
    if (w<=500){
      elc1.style.height='500px';
      elp1.style.maxHeight='31em'
    }
    if (w<=440){
      elc1.style.height='550px';
      elp1.style.maxHeight='36em'
    }
}

  if(id=='c2' && w<=860){

    var elc1 = <HTMLInputElement> document.getElementById("c1");
    elc1.style.height='350px';
    var elp1 = <HTMLInputElement> document.getElementById("p1");
    elp1.style.maxHeight='13em'
    var elc3 = <HTMLInputElement> document.getElementById("c3");
    elc3.style.height='350px';
    var elp3 = <HTMLInputElement> document.getElementById("p3");
    elp3.style.maxHeight='13em'
    var elc4 = <HTMLInputElement> document.getElementById("c4");
    elc4.style.height='350px';
    var elp4 = <HTMLInputElement> document.getElementById("p4");
    elp4.style.maxHeight='13em'
    var elc5 = <HTMLInputElement> document.getElementById("c5");
    elc5.style.height='350px';
    var elp5 = <HTMLInputElement> document.getElementById("p5");
    elp5.style.maxHeight='13em'

    var elc2 = <HTMLInputElement> document.getElementById("c2");
    elc2.style.height='400px';
    var elp2 = <HTMLInputElement> document.getElementById("p2");
    elp2.style.maxHeight='19em'
    if (w<=620){
          elc2.style.height='450px';
          elp2.style.maxHeight='25em'
    }
    if (w<=500){
      elc2.style.height='520px';
      elp2.style.maxHeight='32em'
    }
    if (w<=440){
      elc2.style.height='570px';
      elp2.style.maxHeight='37em'
    }
    if (w<=420){
      elc2.style.height='670px';
      elp2.style.maxHeight='45em'
    }

  }

  if(id=='c3' && w<=620){

    var elc1 = <HTMLInputElement> document.getElementById("c1");
    elc1.style.height='350px';
    var elp1 = <HTMLInputElement> document.getElementById("p1");
    elp1.style.maxHeight='13em'

    var elc2 = <HTMLInputElement> document.getElementById("c2");
    elc2.style.height='350px';
    var elp2 = <HTMLInputElement> document.getElementById("p2");
    elp2.style.maxHeight='13em'

    var elc4 = <HTMLInputElement> document.getElementById("c4");
    elc4.style.height='350px';
    var elp4 = <HTMLInputElement> document.getElementById("p4");
    elp4.style.maxHeight='13em'

    var elc5 = <HTMLInputElement> document.getElementById("c5");
    elc5.style.height='350px';
    var elp5 = <HTMLInputElement> document.getElementById("p5");
    elp5.style.maxHeight='13em'

    var elc3 = <HTMLInputElement> document.getElementById("c3");
    elc3.style.height='400px';
    var elp3 = <HTMLInputElement> document.getElementById("p3");
    elp3.style.maxHeight='19em'
    if (w<=490){
      elc3.style.height='450px';
      elp3.style.maxHeight='25em'
    }
    if (w<=440){
      elc3.style.height='500px';
      elp3.style.maxHeight='31em'
    }
    if (w<=420){
      elc3.style.height='550px';
      elp3.style.maxHeight='37em'
    }

}

if(id=='c4' && w<=420){
  var elc1 = <HTMLInputElement> document.getElementById("c1");
  elc1.style.height='350px';
  var elp1 = <HTMLInputElement> document.getElementById("p1");
  elp1.style.maxHeight='13em'

  var elc2 = <HTMLInputElement> document.getElementById("c2");
  elc2.style.height='350px';
  var elp2 = <HTMLInputElement> document.getElementById("p2");
  elp2.style.maxHeight='13em'

  var elc3 = <HTMLInputElement> document.getElementById("c3");
  elc3.style.height='350px';
  var elp3 = <HTMLInputElement> document.getElementById("p3");
  elp3.style.maxHeight='13em'

  var elc5 = <HTMLInputElement> document.getElementById("c5");
  elc5.style.height='350px';
  var elp5 = <HTMLInputElement> document.getElementById("p5");
  elp5.style.maxHeight='13em'


  var elc4 = <HTMLInputElement> document.getElementById("c4");
  elc4.style.height='400px';
  var elp4 = <HTMLInputElement> document.getElementById("p4");
  elp4.style.maxHeight='19em'
}

if(id=='c5' && w<=490){

  var elc1 = <HTMLInputElement> document.getElementById("c1");
  elc1.style.height='350px';
  var elp1 = <HTMLInputElement> document.getElementById("p1");
  elp1.style.maxHeight='13em'

  var elc2 = <HTMLInputElement> document.getElementById("c2");
  elc2.style.height='350px';
  var elp2 = <HTMLInputElement> document.getElementById("p2");
  elp2.style.maxHeight='13em'

  var elc3 = <HTMLInputElement> document.getElementById("c3");
  elc3.style.height='350px';
  var elp3 = <HTMLInputElement> document.getElementById("p3");
  elp3.style.maxHeight='13em'

  var elc4 = <HTMLInputElement> document.getElementById("c4");
  elc4.style.height='350px';
  var elp4 = <HTMLInputElement> document.getElementById("p4");
  elp4.style.maxHeight='13em'

  var elc5 = <HTMLInputElement> document.getElementById("c5");
  elc5.style.height='400px';
  var elp5 = <HTMLInputElement> document.getElementById("p5");
  elp5.style.maxHeight='19em'
  if (w<=440){
    elc5.style.height='500px';
    elp5.style.maxHeight='31em'
  }
}
}
}
