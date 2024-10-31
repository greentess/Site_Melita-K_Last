import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/shared/models/Item';
import { Observable } from 'rxjs';
import { Variant } from 'src/app/shared/models/Variant';
import { ChangeContext, LabelType, Options } from 'ng5-slider';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
  item!: Item;
  flag_rec:boolean=false;
  items:Item[]=[];
  recommenditems:Item[]=[];
  recitem!: Item;
  items_uslugi:Item[] =[];
  tag_uslugi:string="Услуги";

  no_photo:string="assets/картинки/НетФото.webp";

  vars_coverage?:Variant[]=[];
  vars_handle?:Variant[]=[];
  vars_color?:Variant[]=[];
  vars_mod?:Variant[]=[];
  vars_complect?:Variant[]=[];

  coverage_index:number=0
  handle_index:number=0
  color_index:number=0
  mod_index:number=0
  complect_index:number=0

  complect_items:Item[]=[];

  kai_complect_id:string='';
  nk_complect_id:string='';
  kor_complect_id:string='';
  abc_complect_id:string='';

  selected_mod:string='';

  last_items:Item[]=[];
  newlast_items:Item[]=[];
  newnewlast_items:Item[]=[];
  constructor(activatedRoute:ActivatedRoute, itemService:ItemService,private cartService:CartService, private router:Router) {



    let recommendObservable:Observable<Item[]>;
    let complectObservable:Observable<Item[]>;

    activatedRoute.params.subscribe((params)=>{
      if(params.id) itemService.getItembyId(params.id).subscribe(serverItem => {
        this.recommenditems = itemService.getLatestFromLocalStorage();
        console.log("1",  this.recommenditems)

        this.item = serverItem;

        this.recommenditems = this.recommenditems.filter((value =>value.name!==this.item.name))
        if(this.recommenditems.length>3)
          this.flag_rec=true
        console.log('ЙЙЙ длина массива:',this.recommenditems.length)
        console.log('ЙЙЙ флаг:',this.flag_rec)
        itemService.addToLatest(this.item);
/*         this.newlast_items.unshift(this.item);
        console.log( "3", this.last_items)
        this.newlast_items=this.uniqByObject(this.newlast_items);
        console.log( "4", this.last_items)
        this.newlast_items.splice(10);

        itemService.setLastItemsToLocalStorage(this.newlast_items); */
        this.newlast_items=itemService.getLatestFromLocalStorage();
        console.log( "2", this.newlast_items);
         /*   itemService.clearLatest(); */

        this.vars_coverage = this.item.variants?.filter((value =>value.type==="Покрытие"))
        this.vars_handle = this.item.variants?.filter((value =>value.type==="Рукоять"))
        this.vars_color = this.item.variants?.filter((value =>value.type==="Цвет"))
        this.vars_mod = this.item.variants?.filter((value =>value.type==="Модификация"))
        this.vars_complect = this.item.variants?.filter((value =>value.type==="Ножны"))


        console.log("МОДЫ-",this.vars_mod,this.vars_mod?.length)
/*         console.log(this.vars_handle)
        console.log(this.coverage_index)
        console.log(this.handle_index) */


        const gap = 90
        const carousel = document.getElementById("carousel");
        const   content = document.getElementById("content");
        //const   next = document.getElementById("next");
        //const   prev = document.getElementById("prev");
        const   nextbut = document.getElementById("next-but");
        const   prevbut = document.getElementById("prev-but");
        console.log(carousel,content,nextbut,prevbut)
        if (carousel!=undefined&&content!=undefined &&nextbut!=undefined&&prevbut!=undefined){
          console.log(carousel,content,nextbut,prevbut)
        // next.addEventListener("click", e => {
        //   carousel.scrollBy(width + gap, 0);
        //   if (carousel.scrollWidth !== 0) {
        //     prev.style.display = "flex";
        //   }
        //   if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        //     next.style.display = "none";
        //   }
        // });
        nextbut.addEventListener("click", e => {
          console.log('qwertyuytrewwdfgbhgfdsdbgfdfg')
          carousel.scrollBy(width + gap, 0);
          if (carousel.scrollWidth !== 0) {
            prevbut.style.visibility = "visible";
          }
          if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
            nextbut.style.visibility = "hidden";
          }
        });
        // prev.addEventListener("click", e => {
        //   carousel.scrollBy(-(width + gap), 0);
        //   if (carousel.scrollLeft - width - gap <= 0) {
        //     prev.style.display = "none";
        //   }
        //   if (true) {
        //     next.style.display = "flex";
        //   }
        // });
        prevbut.addEventListener("click", e => {
          carousel.scrollBy(-(width + gap), 0);
          if (carousel.scrollLeft - width - gap <= 0) {
            prevbut.style.visibility = "hidden";
          }
          if (true) {
            nextbut.style.visibility = "visible";
          }
        });

         let width = carousel.offsetWidth;
         window.addEventListener("resize", e => (width = carousel.offsetWidth));
        // let width = 200
        // window.addEventListener("resize", e => (width = 200));
      }




        // if(this.vars_mod?.length!=undefined){
        //   var element1 = <HTMLInputElement> document.getElementById("0");
        //   element1.checked = true;
        //   }

        if (this.vars_complect!=null){

          complectObservable=itemService.getAllItemsByTag("Ножны");

          complectObservable.subscribe((serverComplectItems) =>{
            this.complect_items = serverComplectItems;
            this.find_complects(this.complect_items);
            })
          }



/*         if (this.item.tags!=null){
          recommendObservable=itemService.getAllItemsByTag(this.item.tags[0]);
          recommendObservable.subscribe((serverRecommendItems) =>{
            this.recommenditems = serverRecommendItems;})
          } */
      });
    })


    activatedRoute.params.subscribe((params)=>{
      itemService.getAllItemsByTag(this.tag_uslugi).subscribe((serverItems) =>{
        this.items_uslugi = serverItems;
        console.log(this.items_uslugi)
      })
    })


  }

  ngOnInit(): void {

  }
  isNo(arr:any) {
    if (arr.length===1 ||arr.length===0)
    return true;
    else
      return false;
  }
  check_uslugi() {
    if (this.item.tags!=undefined&&this.item.tags[0]=="Услуги")
      return true
    else return false;
    }

  check_other() {
    if (this.item.tags!=undefined&&this.item.tags[0]=="Прочее")
      return true
    else return false;
    }

  check_mod() {
    if (this.vars_mod?.length==0)
      return false
    else return true;
    }
  check_coverage() {
    if (this.vars_coverage?.length==0)
      return false
    else return true;
  }
  check_handle() {
    if (this.vars_handle?.length==0)
      return false
    else return true;
  }

/*   imageExists(url: string, callback: (arg0: boolean) => void) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
  }

  imageExistss(url: string) {
    let img = new Image();
    img.src = url;
    if (img.onerror){
      return 'assets/картинки/Нетфото.png'
    }
    if (img.onload){
      return url
    }
    else {
      return url
    }
} */

changeSource(event:any, no:any) { event.target.src = no; }


  OnChange(selected: any): void {

  let index=selected.target.id;
  console.log("индекс элемента с ончандже: ",index);
  if (selected.target.checked){
    console.log("массив длина: ",this.vars_mod?.length)
    if(this.vars_mod?.length!=undefined){
    for(var i=0; i<=this.vars_mod.length;i++){
      console.log("индексы в цикле : ",i," для ",this.vars_mod[i]);
      if (i!=index){
        var element = <HTMLInputElement> document.getElementById(i.toString());
        element.checked = false;
      }
      else{
        var element = <HTMLInputElement> document.getElementById(index);
        element.checked = true;
      }
    }
    }
  }
  }













uniqByObject<T>(array: T[]) {
    const result: T[] = [];
    for (const item of array) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

find_complects(complect_items:Item[]){
  complect_items.filter(it =>{
    if(it.name.toLocaleLowerCase().includes("кайдекс"))
      {this.kai_complect_id=it.id}
    if(it.name.toLocaleLowerCase().includes("натур"))
      {this.nk_complect_id=it.id}
    if(it.name.toLocaleLowerCase().includes("кордур"))
      {this.kor_complect_id=it.id}
    if(it.name.toLocaleLowerCase().includes("пластик"))
      {this.abc_complect_id=it.id}
  });
  console.log("все - ", this.vars_complect)
  console.log("все - ", this.complect_items )
  console.log(this.kai_complect_id)
  console.log(this.nk_complect_id)
  console.log(this.kor_complect_id)
  console.log("пластик - ",this.abc_complect_id)
}


  readdesc(desc:string):String[]
  {
    let desc_mas:Array<String> = desc.split('<br>');
    return desc_mas;
  }



  addToCart(){
    console.log(this.item.variants)
/*
    let vars_coverage = this.item.variants?.filter((value =>value.type==="Покрытие"))
    let vars_handle = this.item.variants?.filter((value =>value.type==="Рукоять"))
    let vars_color = this.item.variants?.filter((value =>value.type==="Цвет"))
    let vars_mod = this.item.variants?.filter((value =>value.type==="Модификация"))
    */
    let color_name='';
    let mod_name='';
    let coverage_name='';
    let handle_name='';

    if (this.vars_color?.length==0) color_name=''
    else color_name = this.vars_color![this.color_index].name

    if (this.vars_mod?.length==0) mod_name=''
    else mod_name=this.vars_mod![this.mod_index].name

    if (this.vars_coverage?.length==0) coverage_name=''
    else coverage_name = this.vars_coverage![this.coverage_index].name

    if (this.vars_handle?.length==0) handle_name=''
    else handle_name=this.vars_handle![this.handle_index].name

    console.log(this.vars_coverage![this.coverage_index]);
    console.log(this.coverage_index);
    console.log(this.vars_handle![this.handle_index]);
    console.log(this.handle_index);
    console.log(this.vars_color![this.color_index]);
    console.log(this.vars_mod![this.mod_index]);

    this.cartService.addToCart(this.item, coverage_name, handle_name,color_name,mod_name);
    this.router.navigateByUrl('/home/cart-page');
  }


  isEmpty(arr:any) {
    let count:number =0;

    for(var i=0; i<arr.length; i++) {
      if(arr[i] === "" ||arr[i] === " " || arr[i]===undefined)
        count=count+1;
    }
    //console.log(count,arr.length)
    if (count===arr.length){
    return true;
    }
    else
    {
      return false;
    }
  }


  isEmptymas(arr:any) {
    let count:number=1;
    let countmas:number=0;
    for(var i=0; i<arr.length; i++) {
      for(var j=0; j<arr[i].length; j++){
        if(arr[j] === "" ||arr[j] === " " || arr[j]===undefined)
          count=count+1;
        countmas=countmas+1;
        }
    }
    //console.log(count,countmas)

    if (count===countmas){
    return true;
    }
    else
    {
      return false;
    }
  }
}
