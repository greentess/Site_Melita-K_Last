import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-metal',
  templateUrl: './company-metal.component.html',
  styleUrls: ['./company-metal.component.css']
})
export class CompanyMetalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  open(id:string){
    var w=window.innerWidth

    if(id=='c1' && w<=440){

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

      var elc1 = <HTMLInputElement> document.getElementById("c1");
      elc1.style.height='400px';
      var elp1 = <HTMLInputElement> document.getElementById("p1");
      elp1.style.maxHeight='19em'


  }

    if(id=='c2' && w<=440){

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

      var elc2 = <HTMLInputElement> document.getElementById("c2");
      elc2.style.height='400px';
      var elp2 = <HTMLInputElement> document.getElementById("p2");
      elp2.style.maxHeight='19em'

    }

    if(id=='c3' && w<=440){

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

      var elc3 = <HTMLInputElement> document.getElementById("c3");
      elc3.style.height='400px';
      var elp3 = <HTMLInputElement> document.getElementById("p3");
      elp3.style.maxHeight='19em'


  }

  if(id=='c4' && w<=440){
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
    elc4.style.height='400px';
    var elp4 = <HTMLInputElement> document.getElementById("p4");
    elp4.style.maxHeight='19em'
  }


  }
  }


