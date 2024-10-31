import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  screenHeight: number | undefined;
  screenWidth: number | undefined;
  @Input() w:boolean=false;
  search='';
  constructor(activatedRoute:ActivatedRoute,private router:Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params.search) this.search=params.search;
    })

  }



  ngOnInit(): void {
  }

  searching(term:string):void{
    //const t=term;
    //var element=<HTMLInputElement>document.getElementById('s')
    //element.value = "search";
    if(term) this.router.navigateByUrl('/home/search/'+term);
    if(!term) this.router.navigateByUrl('/home/catalog');
  }
}
