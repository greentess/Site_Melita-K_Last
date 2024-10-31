import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-company-avia',
  templateUrl: './company-avia.component.html',
  styleUrls: ['./company-avia.component.css']
})
export class CompanyAviaComponent implements OnInit {

  constructor(private itemService:ItemService) {
    this.itemService.clearFilters(); }

  ngOnInit(): void {
  }

  open(id:string){
    var w=window.innerWidth

    if(id=='c1' && w<=670){

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

    if(id=='c2' && w<=1410){

      var elc1 = <HTMLInputElement> document.getElementById("c1");
      elc1.style.height='350px';
      var elp1 = <HTMLInputElement> document.getElementById("p1");
      elp1.style.maxHeight='14em'
      var elc3 = <HTMLInputElement> document.getElementById("c3");
      elc3.style.height='350px';
      var elp3 = <HTMLInputElement> document.getElementById("p3");
      elp3.style.maxHeight='14em'
      var elc4 = <HTMLInputElement> document.getElementById("c4");
      elc4.style.height='350px';
      var elp4 = <HTMLInputElement> document.getElementById("p4");
      elp4.style.maxHeight='14em'
      var elc5 = <HTMLInputElement> document.getElementById("c5");
      elc5.style.height='350px';
      var elp5 = <HTMLInputElement> document.getElementById("p5");
      elp5.style.maxHeight='14em'

      var elc2 = <HTMLInputElement> document.getElementById("c2");
      elc2.style.height='400px';
      var elp2 = <HTMLInputElement> document.getElementById("p2");
      elp2.style.maxHeight='19em'
      if (w<=655){
            elc2.style.height='450px';
            elp2.style.maxHeight='25em'
      }
      if (w<=500){
        elc2.style.height='550px';
        elp2.style.maxHeight='30em'
      }
      if (w<=440){
        elc2.style.height='600px';
        elp2.style.maxHeight='35em'
      }
      if (w<=420){
        elc2.style.height='700px';
        elp2.style.maxHeight='39em'
      }

    }

    if(id=='c3' && w<=1570){

      var elc1 = <HTMLInputElement> document.getElementById("c1");
      elc1.style.height='350px';
      var elp1 = <HTMLInputElement> document.getElementById("p1");
      elp1.style.maxHeight='14em'

      var elc2 = <HTMLInputElement> document.getElementById("c2");
      elc2.style.height='350px';
      var elp2 = <HTMLInputElement> document.getElementById("p2");
      elp2.style.maxHeight='14em'

      var elc4 = <HTMLInputElement> document.getElementById("c4");
      elc4.style.height='350px';
      var elp4 = <HTMLInputElement> document.getElementById("p4");
      elp4.style.maxHeight='14em'

      var elc5 = <HTMLInputElement> document.getElementById("c5");
      elc5.style.height='350px';
      var elp5 = <HTMLInputElement> document.getElementById("p5");
      elp5.style.maxHeight='14em'

      var elc3 = <HTMLInputElement> document.getElementById("c3");
      elc3.style.height='400px';
      var elp3 = <HTMLInputElement> document.getElementById("p3");
      elp3.style.maxHeight='19em'
      if (w<=1300){
        elc3.style.height='450px';
        elp3.style.maxHeight='25em'
      }
      if (w<=545){
        elc3.style.height='650px';
        elp3.style.maxHeight='36em'
      }
      if (w<=440){
        elc3.style.height='700px';
        elp3.style.maxHeight='39em'
      }
      if (w<=420){
        elc3.style.height='800px';
        elp3.style.maxHeight='43em'
      }

  }

  if(id=='c4' && w<=1300){
    var elc1 = <HTMLInputElement> document.getElementById("c1");
    elc1.style.height='350px';
    var elp1 = <HTMLInputElement> document.getElementById("p1");
    elp1.style.maxHeight='14em'

    var elc2 = <HTMLInputElement> document.getElementById("c2");
    elc2.style.height='350px';
    var elp2 = <HTMLInputElement> document.getElementById("p2");
    elp2.style.maxHeight='14em'

    var elc3 = <HTMLInputElement> document.getElementById("c3");
    elc3.style.height='350px';
    var elp3 = <HTMLInputElement> document.getElementById("p3");
    elp3.style.maxHeight='14em'

    var elc5 = <HTMLInputElement> document.getElementById("c5");
    elc5.style.height='350px';
    var elp5 = <HTMLInputElement> document.getElementById("p5");
    elp5.style.maxHeight='14em'

    var elc4 = <HTMLInputElement> document.getElementById("c4");
    elc4.style.height='400px';
    var elp4 = <HTMLInputElement> document.getElementById("p4");
    elp4.style.maxHeight='19em'
    if (w<=515){
      elc4.style.height='450px';
      elp4.style.maxHeight='25em'
    }
    if (w<=500){
      elc4.style.height='550px';
      elp4.style.maxHeight='30em'
    }
    if (w<=420){
      elc4.style.height='650px';
      elp4.style.maxHeight='36em'
    }
  }

  if(id=='c5' && w<=535){

    var elc1 = <HTMLInputElement> document.getElementById("c1");
    elc1.style.height='350px';
    var elp1 = <HTMLInputElement> document.getElementById("p1");
    elp1.style.maxHeight='14em'

    var elc2 = <HTMLInputElement> document.getElementById("c2");
    elc2.style.height='350px';
    var elp2 = <HTMLInputElement> document.getElementById("p2");
    elp2.style.maxHeight='14em'

    var elc3 = <HTMLInputElement> document.getElementById("c3");
    elc3.style.height='350px';
    var elp3 = <HTMLInputElement> document.getElementById("p3");
    elp3.style.maxHeight='14em'

    var elc4 = <HTMLInputElement> document.getElementById("c4");
    elc4.style.height='350px';
    var elp4 = <HTMLInputElement> document.getElementById("p4");
    elp4.style.maxHeight='14em'

    var elc5 = <HTMLInputElement> document.getElementById("c5");
    elc5.style.height='400px';
    var elp5 = <HTMLInputElement> document.getElementById("p5");
    elp5.style.maxHeight='19em'
    if (w<=440){
      elc5.style.height='500px';
      elp5.style.maxHeight='28em'
    }
    if (w<=420){
      elc5.style.height='550px';
      elp5.style.maxHeight='30em'
    }
  }
  }
  }
