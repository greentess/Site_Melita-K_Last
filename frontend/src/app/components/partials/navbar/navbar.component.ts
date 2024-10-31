import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  screenHeight: number | undefined;
  screenWidth: number | undefined;
  //cartQuantity=0;
  user!:User;
  public getScreenWidth: any;
  public getScreenHeight: any;

  constructor(cartService:CartService,private userService:UserService) {
    //cartService.getCartObservable().subscribe((newCart) => {
      //this.cartQuantity = newCart.totalCount;
    //})


    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
   }


/*    @HostListener('window:resize', ['$event'])
   getScreenSize() {
         this.screenHeight = window.innerHeight;
         this.screenWidth = window.innerWidth;
         console.log(this.screenHeight, this.screenWidth);
         if(window.innerWidth>1000){
          var b = <HTMLInputElement> document.getElementById("menu-toggle");
          b.checked=true
          console.log(b.checked);

         }
   } */

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }


  @HostListener('window:resize', ['$event'])

  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    var b = <HTMLInputElement> document.getElementById("burger");
    console.log(b.style.display)
    if(b.style.display=='none' || this.getScreenWidth>1000){
      console.log(b.style.display)
    var it1 = <HTMLInputElement> document.getElementById("item1");
    var it2 = <HTMLInputElement> document.getElementById("item2");
    var it3 = <HTMLInputElement> document.getElementById("item3");
    var it4 = <HTMLInputElement> document.getElementById("item4");
    it1.style.display='flex'
    it2.style.display='flex'
    it3.style.display='flex'
    it4.style.display='flex'

    }
/*     if(b.style.display=='flex' || this.getScreenWidth<=1000){
      var m = <HTMLInputElement> document.getElementById("menu-toggle");
      console.log(m.checked)
      m.checked=true
    } */
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }

  OnChange_Toggle(selected: any): void {
    console.log(
         selected.target.name,
         selected.target.value,
         selected.target.checked
       );
    var it1 = <HTMLInputElement> document.getElementById("item1");
    var it2 = <HTMLInputElement> document.getElementById("item2");
    var it3 = <HTMLInputElement> document.getElementById("item3");
    var it4 = <HTMLInputElement> document.getElementById("item4");
    var it0 = <HTMLInputElement> document.getElementById("item0");
    if (selected.target.checked){
      it1.style.display='flex'
      it2.style.display='flex'
      it3.style.display='flex'
      it4.style.display='flex'
      it0.style.display='flex'
    }
    if (!selected.target.checked){
      it1.style.display='none'
      it2.style.display='none'
      it3.style.display='none'
      it4.style.display='none'
      it0.style.display='none'
    }
    console.log (it1.style.display)
}
}
