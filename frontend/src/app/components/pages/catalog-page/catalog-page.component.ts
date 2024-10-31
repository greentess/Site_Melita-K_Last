import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, concat } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/shared/models/Item';
import { SortPipe } from './sort.pipe';
import { ChangeContext, LabelType, Options } from 'ng5-slider';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { BehaviorSubject,  filter } from 'rxjs';

import { filters, defaults_filters } from 'src/app/shared/interfaces/IFilters';

@Component({
  selector: 'app-home',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {

  public  all_filters: filters = this.itemService.getFiltersFromLocalStorage();
  no_photo:string="assets/картинки/НетФото.webp";
  filterrr_items:Item[]=[];
  items:Item[]=[];
  filter_items:Item[]=[];
  mytag="Все";
  selectedField:string = 'ALL';
  field: any;

  const_dk:any;
  const_od:any;
  const_to:any;

  const_check_chrome:boolean=this.all_filters.chrome;
  const_check_camou:boolean=this.all_filters.camou;
  const_check_anti:boolean=this.all_filters.anti;

  const_check_rez:boolean=this.all_filters.rezina;
  const_check_koz:boolean=this.all_filters.koza;
  const_check_der:boolean=this.all_filters.derevo;
  const_check_mik:boolean=this.all_filters.mikarta;
  const_check_pol:boolean=this.all_filters.polipropilen;
  const_check_met:boolean=this.all_filters.metal;

  const_check_nk:boolean=this.all_filters.naturkoza;
  const_check_p:boolean=this.all_filters.plastic;
  const_check_k:boolean=this.all_filters.kordura;

//Длина клинка
  min_dk: number = this.all_filters.dlina_kl[0];
  max_dk: number = this.all_filters.dlina_kl[1];
  options_dk: Options = {
    floor: 50,
    ceil: 300,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>От: </b>' + value +' мм';
        case LabelType.High:
          return '<b>До: </b>' + value+' мм';
        default:
          return  value + ' мм';
      }
    }
  };
//Общая длина
min_od: number = this.all_filters.dlina_ob[0];
max_od: number = this.all_filters.dlina_ob[1];
options_od: Options = {
  floor: 100,
  ceil: 500,
  translate: (value: number, label: LabelType): string => {
    switch (label) {
      case LabelType.Low:
        return '<b>От: </b>' + value +' мм';
      case LabelType.High:
        return '<b>До: </b>' + value+' мм';
      default:
        return  value + ' мм';
    }
  }
};

    //Толщина обуха
    min_to: number = this.all_filters.tolchina[0];
    max_to: number = this.all_filters.tolchina[1];
    options_to: Options = {
      floor: 1,
      ceil: 6,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return '<b>От: </b>' + value +' мм';
          case LabelType.High:
            return '<b>До: </b>' + value+' мм';
          default:
            return  value + ' мм';
        }
      }
    };





  constructor(private itemService:ItemService, activatedRoute:ActivatedRoute) {

    const array_filters: filters = {
      ...defaults_filters
    };

    console.log(this.all_filters)
    this.check_const();
    let itemsCollection:Observable<Item[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
      itemsCollection=this.itemService.getAllItemsBySearchTerm(params.searchTerm);
      }

      else if(params.tag){
      this.mytag=params.tag;

      itemsCollection=this.itemService.getAllItemsByTag(params.tag);
      }

      else {
      this.mytag="Все";

      itemsCollection=itemService.getAll();
      }

      itemsCollection.subscribe((serverItems) =>{
        this.items = serverItems;
        this.filter_items = this.items;
        this.check_const();
        this.filter_items=this.filters_start2(this.filter_items);
      })


    })

    itemsCollection=itemService.getAll()



  }

  ngOnInit(): void {

  }

  open_filters(){
    var f = <HTMLInputElement> document.getElementById("f");
    f.style.display="block";
    var o_but = <HTMLInputElement> document.getElementById("open_but");
    o_but.style.display="none";
    var c_but = <HTMLInputElement> document.getElementById("close_but");
    c_but.style.display="block";
  }
  close_filters(){
    var f = <HTMLInputElement> document.getElementById("f");
    f.style.display="none";
    var o_but = <HTMLInputElement> document.getElementById("open_but");
    o_but.style.display="block";
    var c_but = <HTMLInputElement> document.getElementById("close_but");
    c_but.style.display="none";
  }

blocking_but(){
  if(     this.const_dk==false &&
          this.const_od==false &&
          this.const_to==false &&
          this.const_check_chrome==false &&
          this.const_check_camou==false &&
          this.const_check_anti==false &&

          this.const_check_rez==false &&
          this.const_check_koz==false &&
          this.const_check_der==false &&
          this.const_check_mik==false &&
          this.const_check_pol==false &&
          this.const_check_met==false &&

          this.const_check_nk==false &&
          this.const_check_k==false &&
          this.const_check_p==false &&

          this.min_dk==this.options_dk.floor! &&
          this.max_dk==this.options_dk.ceil! &&

          this.min_od==this.options_od.floor! &&
          this.max_od==this.options_od.ceil! &&

          this.min_to==this.options_to.floor! &&
          this.max_to==this.options_to.ceil!)
    {
          var bf = <HTMLInputElement> document.getElementById("bf");
          bf.disabled=true;
          console.log("дизаблед: ",bf.disabled)
    }
    else{
      var bf = <HTMLInputElement> document.getElementById("bf");
      bf.disabled=false;}
      console.log("не дизаблед: ",bf.disabled)
}

  changeSource(event:any, no:any) { event.target.src = no; }

  func(){
    this.field = document.querySelector('input[name="item"]:checked');
    this.selectedField=this.field.id;
    if(this.selectedField=='P' || this.selectedField=='U'){
      var el1 = <HTMLInputElement> document.getElementById("open_but");
      el1.style.visibility='hidden'
      var el2 = <HTMLInputElement> document.getElementById("close_but");
      el2.style.visibility='hidden'
    }
    else{
      var el1 = <HTMLInputElement> document.getElementById("open_but");
      el1.style.visibility='visible'
      var el2 = <HTMLInputElement> document.getElementById("close_but");
      el2.style.visibility='visible'
    }
    console.log(this.selectedField)
  }


  //Длина клинка
  getEvent_dk(e: ChangeContext) {
    this.const_dk=true;
  }

  //Общая длина
  getEvent_od(e: ChangeContext) {
    this.const_od=true;
  }

  //Толщина обуха
  getEvent_to(e: ChangeContext) {
    this.const_to=true;
  }


      OnChange_Chrome(selected: any): void {
        console.log(
             selected.target.name,
             selected.target.value,
             selected.target.checked
           );

      if (selected.target.checked){
      this.const_check_chrome=true;
      }
      else{this.const_check_chrome=false; }

    }

    OnChange_Anti(selected: any): void {
      console.log(
           selected.target.name,
           selected.target.value,
           selected.target.checked
         );

    if (selected.target.checked){
    this.const_check_anti=true;
    }
    else{this.const_check_anti=false; }

  }

  OnChange_Camou(selected: any): void {
    console.log(
         selected.target.name,
         selected.target.value,
         selected.target.checked
       );

  if (selected.target.checked){
  this.const_check_camou=true;
  }
  else{this.const_check_camou=false;}

}


OnChange_Rez(selected: any): void {
  console.log(
       selected.target.name,
       selected.target.value,
       selected.target.checked
     );

if (selected.target.checked){
this.const_check_rez=true;
}
else{this.const_check_rez=false;}

}

OnChange_Koz(selected: any): void {
  console.log(
       selected.target.name,
       selected.target.value,
       selected.target.checked
     );

if (selected.target.checked){
this.const_check_koz=true;
}
else{this.const_check_koz=false;}

}

OnChange_Der(selected: any): void {
  console.log(
       selected.target.name,
       selected.target.value,
       selected.target.checked
     );

if (selected.target.checked){
this.const_check_der=true;
}
else{this.const_check_der=false;}

}

OnChange_Mik(selected: any): void {
  console.log(
       selected.target.name,
       selected.target.value,
       selected.target.checked
     );

if (selected.target.checked){
this.const_check_mik=true;
}
else{this.const_check_mik=false;}

}

OnChange_Pol(selected: any): void {
  console.log(
       selected.target.name,
       selected.target.value,
       selected.target.checked
     );

if (selected.target.checked){
this.const_check_pol=true;
}
else{this.const_check_pol=false;}

}

OnChange_Met(selected: any): void {
  console.log(
       selected.target.name,
       selected.target.value,
       selected.target.checked
     );

if (selected.target.checked){
this.const_check_met=true;
}
else{this.const_check_met=false;}

}


OnChange_NK(selected: any): void {
  console.log(
       selected.target.name,
       selected.target.value,
       selected.target.checked
     );

if (selected.target.checked){
this.const_check_nk=true;
}
else{this.const_check_nk=false;}

}

OnChange_P(selected: any): void {
  console.log(
       selected.target.name,
       selected.target.value,
       selected.target.checked
     );

if (selected.target.checked){
this.const_check_p=true;
}
else{this.const_check_p=false;}

}

OnChange_K(selected: any): void {
  console.log(
       selected.target.name,
       selected.target.value,
       selected.target.checked
     );

if (selected.target.checked){
this.const_check_k=true;
}
else{this.const_check_k=false;}

}

  filters_del(){
    this.const_dk=false;
    this.const_od=false;
    this.const_to=false;
    this.const_check_chrome=false;
    this.const_check_camou=false;
    this.const_check_anti=false;

    this.const_check_rez=false;
    this.const_check_koz=false;
    this.const_check_der=false;
    this.const_check_mik=false;
    this.const_check_pol=false;
    this.const_check_met=false;

    this.const_check_nk=false;
    this.const_check_k=false;
    this.const_check_p=false;

    this.filter_items=this.items;

    this.min_dk=this.options_dk.floor!;
    this.max_dk=this.options_dk.ceil!;

    this.min_od=this.options_od.floor!;
    this.max_od=this.options_od.ceil!;

    this.min_to=this.options_to.floor!;
    this.max_to=this.options_to.ceil!;


    var element = <HTMLInputElement> document.getElementById("Checkbox_Chrome");
    element.checked = false;
    var element = <HTMLInputElement> document.getElementById("Checkbox_Camou");
    element.checked = false;
    var element = <HTMLInputElement> document.getElementById("Checkbox_Anti");
    element.checked = false;

    var element = <HTMLInputElement> document.getElementById("Checkbox_Rez");
    element.checked = false;
    var element = <HTMLInputElement> document.getElementById("Checkbox_Koz");
    element.checked = false;
    var element = <HTMLInputElement> document.getElementById("Checkbox_Der");
    element.checked = false;
    var element = <HTMLInputElement> document.getElementById("Checkbox_Mik");
    element.checked = false;
    var element = <HTMLInputElement> document.getElementById("Checkbox_Pol");
    element.checked = false;
    var element = <HTMLInputElement> document.getElementById("Checkbox_Met");
    element.checked = false;

    var element = <HTMLInputElement> document.getElementById("Checkbox_NK");
    element.checked = false;
    var element = <HTMLInputElement> document.getElementById("Checkbox_P");
    element.checked = false;
    var element = <HTMLInputElement> document.getElementById("Checkbox_K");
    element.checked = false;

    this.setFiltersToLocalStorage()
    console.log(this.all_filters)
  }

vibor_parametres():Item[]{

      //если выбраны параметры
      const regex = /([0-9])/g;
      const regex2 = /[+-]?([0-9]*[.])?[0-9]+/g;
      let filter_items_dk:Item[];
      let filter_items_od:Item[];

      let filter_items_to:Item[];
      let flag:boolean=false;

      if (this.const_dk||this.const_od||this.const_to) {
        flag=true;

        filter_items_dk=this.items.filter(a=> a.origins.find((value) => {
          if(value[0]=='Длина клинка' ){
          //console.log("VALUE!!!!!!! ",value[0])
          let flag1=false;
          let flag2=false;
          if (value[0]=='Длина клинка' )
            flag1=true;
          let mas_value=value[1].split('/');
          for (let i = 0; i < mas_value.length; i++) {
            if(Number(mas_value[i].match(regex)?.join(''))>=this.min_dk &&
            Number(mas_value[i].match(regex)?.join(''))<=this.max_dk!){
              flag2=true
            }
            //console.log("dk",i," - ",mas_value[i])
          }
          if(flag1 && flag2)
            return true;
          return false;
          }
        return false;
        }
    ));
        console.log(filter_items_dk);

          filter_items_od=filter_items_dk.filter(a=> a.origins.find((value) => {
            if(value[0]=='Общая длина' ){
            //console.log("VALUE!!!!!!! ",value[0])
            let flag1=false;
            let flag2=false;
            if (value[0]=='Общая длина' )
              flag1=true;
            let mas_value=value[1].split('/');
            for (let i = 0; i < mas_value.length; i++) {
              if(Number(mas_value[i].match(regex)?.join(''))>=this.min_od &&
              Number(mas_value[i].match(regex)?.join(''))<=this.max_od!){
                flag2=true
              }
              //console.log("od",i," - ",mas_value[i])
            }
            if(flag1 && flag2)
              return true;
            return false;
            }
          return false;
          }
      ));

      filter_items_to=filter_items_od.filter(a=> a.origins.find((value) => {
        if(value[0]=='Толщина обуха' ){
        //console.log("VALUE!!!!!!! ",value[0])
        let flag1=false;
        let flag2=false;
        if (value[0]=='Толщина обуха' )
          flag1=true;
        let mas_value=value[1].split('/');
        for (let i = 0; i < mas_value.length; i++) {
          if(Number(mas_value[i].match(regex2)?.join(''))>=this.min_to &&
          Number(mas_value[i].match(regex2)?.join(''))<=this.max_to!){
            flag2=true
          }
          //console.log("to",i," - ",mas_value[i])
        }
        if(flag1 && flag2)
          return true;
        return false;
        }
      return false;
      }
  ));




        //filter_items_dk=this.items.filter(a=> a.origins.find(x=> (x[0]=='Длина клинка' && Number(x[1].match(regex)?.join(''))>=this.min_dk  && Number(x[1].match(regex)?.join(''))<= this.max_dk!)));
        //filter_items_od=filter_items_dk.filter(a=> a.origins.find(x=> (x[0]=='Общая длина' && Number(x[1].match(regex)?.join(''))>=this.min_od  && Number(x[1].match(regex)?.join(''))<= this.max_od!)));


        //filter_items_to=filter_items_od.filter(a=> a.origins.find(x=> (x[0]=='Толщина обуха' && Number(x[1].match(regex2)?.join(''))>=this.min_to  && Number(x[1].match(regex2)?.join(''))<= this.max_to!)));

        //let temp_hoz=filter_items_to.filter(a=> a.tags!=undefined && a.tags[0]=='Хозяйственно-бытовые ножи');
        //const filtered = filter_items_to.filter(x => temp_hoz.includes(x));
        this.filter_items = filter_items_to;
    /*     this.filter_items = filter_items_to; */
      }

      if (this.const_check_chrome||this.const_check_camou||this.const_check_anti||
        this.const_check_rez||this.const_check_koz||this.const_check_der||this.const_check_mik||this.const_check_pol||this.const_check_met
        ||this.const_check_nk||this.const_check_p||this.const_check_k){
        let temp_items:Item[]=[];

        if (flag==true) {
          this.filter_items.filter(obj =>
                obj.variants!=undefined && obj.variants.length>0 && temp_items.push(obj));
          }
          else {
            this.items.filter(obj =>
              obj.variants!=undefined && obj.variants.length>0 && temp_items.push(obj));
          }
    return temp_items;
    }
    return [];
  }

vibor_ruc(): Item[] {
let temp_items:Item[]=[];
temp_items=this.vibor_parametres();
let temp_items2:Item[]=[];
    //если выбраны варианты только из материала рукояти
    if ((this.const_check_rez||this.const_check_koz||this.const_check_der||this.const_check_mik||this.const_check_pol||this.const_check_met)
){
if (this.const_check_rez)
      temp_items.filter((element) =>
            element.variants?.filter((value) => value.name.match("ТЭП")&& value.type.match("Рукоять") && temp_items2.push(element))
        );
if (this.const_check_koz)
      temp_items.filter((element) =>
            element.variants?.filter((value) => value.name.match("Кожа и латунь")&& value.type.match("Рукоять") && temp_items2.push(element))
        );
if (this.const_check_der)
      temp_items.filter((element) =>
            element.variants?.filter((value) => value.name.match("Дерево")&& value.type.match("Рукоять") && temp_items2.push(element))
        );
if (this.const_check_mik)
      temp_items.filter((element) =>
            element.variants?.filter((value) => value.name.match("Микарта")&& value.type.match("Рукоять") && temp_items2.push(element))
        );
if (this.const_check_pol)
      temp_items.filter((element) =>
            element.variants?.filter((value) => value.name.match("Полипропилен")&& value.type.match("Рукоять") && temp_items2.push(element))
        );
if (this.const_check_met)
      temp_items.filter((element) =>
            element.variants?.filter((value) => value.name.match("Скелетного типа")&& value.type.match("Рукоять") && temp_items2.push(element))
        );

        console.log("ВСЕ ДЛЯ  РУКОЯТИ ",temp_items2)
        temp_items2 = Array.from(new Set(temp_items2));
        console.log("ВСЕ ДЛЯ РУКОЯТИ БЕЗ ДУБЛИКАТОВ ",temp_items2)
        /* this.filter_items=temp_items2; */
        return temp_items2;
}
return [];
}

vibor_nozni():Item[]{
let temp_items:Item[]=[];
temp_items=this.vibor_parametres();
let temp_items2:Item[]=[];
  //если выбраны варианты только ножен
  if (this.const_check_nk || this.const_check_p || this.const_check_k){

if (this.const_check_nk)
      temp_items.filter((element) =>
          element.variants?.filter((value) => value.name.match("Натуральная кожа")&& value.type.match("Ножны") && temp_items2.push(element))
      );
if ( this.const_check_p)
    temp_items.filter((element) =>
          element.variants?.filter((value) => value.name.match("АБС-пластик")&& value.type.match("Ножны") && temp_items2.push(element))
      );
if ( this.const_check_k )
    temp_items.filter((element) =>
          element.variants?.filter((value) => value.name.match("Кордура")&& value.type.match("Ножны") && temp_items2.push(element))
      );

console.log("ВСЕ ДЛЯ НОЖЕН ",temp_items2)
temp_items2 = Array.from(new Set(temp_items2));
console.log("ВСЕ ДЛЯ НОЖЕН БЕЗ ДУБЛИКАТОВ ",temp_items2)
/* this.filter_items=temp_items2; */
return temp_items2;
}
return [];
}

vibor_pocr():Item[]{
  let temp_items:Item[]=[];
  temp_items=this.vibor_parametres();
  let temp_items2:Item[]=[];
  if (this.const_check_chrome||this.const_check_camou||this.const_check_anti){
  if (this.const_check_chrome )
    temp_items.filter((element) =>
      element.variants?.filter((value) => value.name.match("Черный хром")&& value.type.match("Покрытие") && temp_items2.push(element))
    );

  if (this.const_check_camou )
    temp_items.filter((element) =>
      element.variants?.filter((value) => value.name.match("Камуфляж")&& value.type.match("Покрытие") && temp_items2.push(element))
    );
  if (this.const_check_anti )
    temp_items.filter((element) =>
      element.variants?.filter((value) => value.name.match("Антиблик")&& value.type.match("Покрытие") && temp_items2.push(element))
    );

  console.log("ВСЕ ДЛЯ ПОКРЫТИЯ ",temp_items2)
  temp_items2 = Array.from(new Set(temp_items2));
  console.log("ВСЕ ДЛЯ ПОКРЫТИЯ БЕЗ ДУБЛИКАТОВ ",temp_items2)
/*   this.filter_items=temp_items2; */
  return temp_items2;
  }
  return [];
}



filters_start(){
  const regex = /([0-9])/g;
  const regex2 = /[+-]?([0-9]*[.])?[0-9]+/g;
  let filter_items_dk:Item[];
  let filter_items_od:Item[];

  let filter_items_to:Item[];
  let flag:boolean=false;


  if (this.const_dk||this.const_od||this.const_to) {

    flag=true;
    filter_items_dk=this.items.filter(a=> a.origins.find((value) => {
      if(value[0]=='Длина клинка' ){
      //console.log("VALUE!!!!!!! ",value[0])
      let flag1=false;
      let flag2=false;
      if (value[0]=='Длина клинка' )
        flag1=true;
      let mas_value=value[1].split('/');
      for (let i = 0; i < mas_value.length; i++) {
        if(Number(mas_value[i].match(regex)?.join(''))>=this.min_dk &&
        Number(mas_value[i].match(regex)?.join(''))<=this.max_dk!){
          flag2=true
        }
        //console.log("dk",i," - ",mas_value[i])
      }
      if(flag1 && flag2)
        return true;
      return false;
      }
    return false;
    }
));
    //console.log(filter_items_dk);

      filter_items_od=filter_items_dk.filter(a=> a.origins.find((value) => {
        if(value[0]=='Общая длина' ){
        //console.log("VALUE!!!!!!! ",value[0])
        let flag1=false;
        let flag2=false;
        if (value[0]=='Общая длина' )
          flag1=true;
        let mas_value=value[1].split('/');
        for (let i = 0; i < mas_value.length; i++) {
          if(Number(mas_value[i].match(regex)?.join(''))>=this.min_od &&
          Number(mas_value[i].match(regex)?.join(''))<=this.max_od!){
            flag2=true
          }
          //console.log("od",i," - ",mas_value[i])
        }
        if(flag1 && flag2)
          return true;
        return false;
        }
      return false;
      }
  ));

  filter_items_to=filter_items_od.filter(a=> a.origins.find((value) => {
    if(value[0]=='Толщина обуха' ){
    console.log("VALUE!!!!!!! ",value[0])
    let flag1=false;
    let flag2=false;
    if (value[0]=='Толщина обуха' )
    {
      flag1=true;
      //console.log("f1: ",flag1)
    }
    let mas_value=value[1].split('/');
    for (let i = 0; i < mas_value.length; i++) {
      //console.log("толщина обуха у ножа:",Number(mas_value[i].match(regex2)?.join('')))
      if(Number(mas_value[i].match(regex2)?.join(''))>=this.min_to &&
      Number(mas_value[i].match(regex2)?.join(''))<=this.max_to!){
        flag2=true
        //console.log("f2: ",flag2)
      }
      //console.log("to",i," - ",mas_value[i])
    }
    if(flag1 && flag2){
      //console.log("f2 f1 da")
      return true;
    }
    return false;
    }
  return false;
  }
));

    //filter_items_dk=this.items.filter(a=> a.origins.find(x=> (x[0]=='Длина клинка' && Number(x[1].match(regex)?.join(''))>=this.min_dk  && Number(x[1].match(regex)?.join(''))<= this.max_dk!)));
    //filter_items_od=filter_items_dk.filter(a=> a.origins.find(x=> (x[0]=='Общая длина' && Number(x[1].match(regex)?.join(''))>=this.min_od  && Number(x[1].match(regex)?.join(''))<= this.max_od!)));

    //filter_items_to=filter_items_od.filter(a=> a.origins.find(x=> (x[0]=='Толщина обуха' && Number(x[1].match(regex2)?.join(''))>=this.min_to  && Number(x[1].match(regex2)?.join(''))<= this.max_to!)));

    //let temp_hoz=filter_items_to.filter(a=> a.tags!=undefined && a.tags[0]=='Хозяйственно-бытовые ножи');
    //const filtered = filter_items_to.filter(x => temp_hoz.includes(x));
    this.filter_items = filter_items_to;
/*     this.filter_items = filter_items_to; */
  }

  if (this.const_check_chrome||this.const_check_camou||this.const_check_anti||
    this.const_check_rez||this.const_check_koz||this.const_check_der||this.const_check_mik||this.const_check_pol||this.const_check_met
    ||this.const_check_nk||this.const_check_p||this.const_check_k){
    let temp_items:Item[]=[];
    let temp_items2:Item[]=[];


    if (flag==true) {
      this.filter_items.filter(obj =>
            obj.variants!=undefined && obj.variants.length>0 && temp_items.push(obj));
      }
      else {
        this.items.filter(obj =>
          obj.variants!=undefined && obj.variants.length>0 && temp_items.push(obj));
      }


let all:Item[]=[];
  //если выбраны варианты только из материала рукояти
  if ((this.const_check_rez||this.const_check_koz||this.const_check_der||this.const_check_mik||this.const_check_pol||this.const_check_met)&&
      (!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&
      (!this.const_check_nk && !this.const_check_p && !this.const_check_k)
  ){
  if (this.const_check_rez&&(!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&(!this.const_check_nk && !this.const_check_p && !this.const_check_k))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("ТЭП")&& value.type.match("Рукоять") && temp_items2.push(element))
          );
  if (this.const_check_koz&&(!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&(!this.const_check_nk && !this.const_check_p && !this.const_check_k))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Кожа и латунь")&& value.type.match("Рукоять") && temp_items2.push(element))
          );
  if (this.const_check_der&&(!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&(!this.const_check_nk && !this.const_check_p && !this.const_check_k))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Дерево")&& value.type.match("Рукоять") && temp_items2.push(element))
          );
  if (this.const_check_mik&&(!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&(!this.const_check_nk && !this.const_check_p && !this.const_check_k))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Микарта")&& value.type.match("Рукоять") && temp_items2.push(element))
          );
  if (this.const_check_pol&&(!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&(!this.const_check_nk && !this.const_check_p && !this.const_check_k))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Полипропилен")&& value.type.match("Рукоять") && temp_items2.push(element))
          );
  if (this.const_check_met&&(!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&(!this.const_check_nk && !this.const_check_p && !this.const_check_k))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Скелетного типа")&& value.type.match("Рукоять") && temp_items2.push(element))
          );

          console.log("ВСЕ ДЛЯ  РУКОЯТИ ",temp_items2)
          temp_items2 = Array.from(new Set(temp_items2));
          console.log("ВСЕ ДЛЯ РУКОЯТИ БЕЗ ДУБЛИКАТОВ ",temp_items2)
          all=temp_items2;
  }

  //если выбраны варианты только из покрытия клинка
  if ((this.const_check_chrome||this.const_check_camou||this.const_check_anti) &&
      (!this.const_check_rez && !this.const_check_koz && !this.const_check_der && !this.const_check_mik && !this.const_check_pol&& !this.const_check_met)&&
      (!this.const_check_nk && !this.const_check_p && !this.const_check_k)){
  if (this.const_check_chrome &&(!this.const_check_nk && !this.const_check_p && !this.const_check_k)&&(!this.const_check_rez && !this.const_check_koz && !this.const_check_der&& !this.const_check_mik && !this.const_check_pol && !this.const_check_met))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Черный хром")&& value.type.match("Покрытие") && temp_items2.push(element))
          );
  if (this.const_check_camou &&(!this.const_check_nk && !this.const_check_p && !this.const_check_k)&&(!this.const_check_rez && !this.const_check_koz && !this.const_check_der&& !this.const_check_mik && !this.const_check_pol && !this.const_check_met))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Камуфляж")&& value.type.match("Покрытие") && temp_items2.push(element))
          );
  if (this.const_check_anti &&(!this.const_check_nk && !this.const_check_p && !this.const_check_k)&&(!this.const_check_rez && !this.const_check_koz && !this.const_check_der&& !this.const_check_mik && !this.const_check_pol && !this.const_check_met))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Антиблик")&& value.type.match("Покрытие") && temp_items2.push(element))
          );

  console.log("ВСЕ ДЛЯ ПОКРЫТИЯ ",temp_items2)
  temp_items2 = Array.from(new Set(temp_items2));
  console.log("ВСЕ ДЛЯ ПОКРЫТИЯ БЕЗ ДУБЛИКАТОВ ",temp_items2)
  all=temp_items2;
  }

//если выбраны варианты только ножен
  if ((this.const_check_nk || this.const_check_p || this.const_check_k)&&
      (!this.const_check_chrome&& !this.const_check_camou&& !this.const_check_anti) &&
      (!this.const_check_rez && !this.const_check_koz && !this.const_check_der && !this.const_check_mik && !this.const_check_pol  && !this.const_check_met)){

if (this.const_check_nk &&(!this.const_check_chrome&& !this.const_check_camou&& !this.const_check_anti)&&(!this.const_check_rez && !this.const_check_koz && !this.const_check_der&& !this.const_check_mik && !this.const_check_pol  && !this.const_check_met))
    temp_items.filter((element) =>
          element.variants?.filter((value) => value.name.match("Натуральная кожа")&& value.type.match("Ножны") && temp_items2.push(element))
      );
if ( this.const_check_p &&(!this.const_check_chrome&& !this.const_check_camou&& !this.const_check_anti)&&(!this.const_check_rez && !this.const_check_koz && !this.const_check_der&& !this.const_check_mik && !this.const_check_pol && !this.const_check_met))
    temp_items.filter((element) =>
          element.variants?.filter((value) => value.name.match("АБС-пластик")&& value.type.match("Ножны") && temp_items2.push(element))
      );
if ( this.const_check_k &&(!this.const_check_chrome&& !this.const_check_camou&& !this.const_check_anti)&&(!this.const_check_rez && !this.const_check_koz && !this.const_check_der&& !this.const_check_mik && !this.const_check_pol && !this.const_check_met))
    temp_items.filter((element) =>
          element.variants?.filter((value) => value.name.match("Кордура")&& value.type.match("Ножны") && temp_items2.push(element))
      );

console.log("ВСЕ ДЛЯ НОЖЕН ",temp_items2)
temp_items2 = Array.from(new Set(temp_items2));
console.log("ВСЕ ДЛЯ НОЖЕН БЕЗ ДУБЛИКАТОВ ",temp_items2)
all=temp_items2;
}



//ножны+рукоять
if ((this.const_check_nk || this.const_check_p || this.const_check_k) &&
    (this.const_check_rez || this.const_check_koz || this.const_check_der || this.const_check_mik || this.const_check_pol || this.const_check_met)&&
    (!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti))
    {
    let a= this.vibor_nozni();
        console.log("ножны: ",a);
    let b=this.vibor_ruc();
      console.log("рукоять: ",b);
    let res =a.filter(o => b.some(({id}) => o.id === id));
    console.log("все ножны+рукоять: ",res);
    const unique = Array.from(new Set(res));
    console.log("уникальные ножны+рукоять: ",unique);
    all=unique;
    }

//ножны+покрытие
if ((this.const_check_nk || this.const_check_p || this.const_check_k) &&
    (!this.const_check_rez && !this.const_check_koz && !this.const_check_der && !this.const_check_mik && !this.const_check_pol && !this.const_check_met)&&
    (this.const_check_chrome || this.const_check_camou || this.const_check_anti))
    {
    let a= this.vibor_nozni();
        console.log("ножны: ",a);
    let b=this.vibor_pocr();
      console.log("покрытие: ",b);
    let res =a.filter(o => b.some(({id}) => o.id === id));
    console.log("все ножны+покрытие: ",res);
    const unique = Array.from(new Set(res));
    console.log("уникальные ножны+покрытие: ",unique);
    all=unique;
    }

//рукоять+покрытие
if ((!this.const_check_nk && !this.const_check_p && !this.const_check_k) &&
    (this.const_check_rez || this.const_check_koz || this.const_check_der || this.const_check_mik || this.const_check_pol || this.const_check_met)  &&
    (this.const_check_chrome || this.const_check_camou || this.const_check_anti))
    {
    let a= this.vibor_ruc();
        console.log(" рукоять: ",a);
    let b=this.vibor_pocr();
      console.log("покрытие: ",b);
    let res =a.filter(o => b.some(({id}) => o.id === id));
    console.log("все рукоять+покрытие: ",res);
    const unique = Array.from(new Set(res));
    console.log("уникальные рукоять+покрытие: ",unique);
    all=unique;
    }

//рукоять+покрытие+ножны
if ((this.const_check_nk || this.const_check_p || this.const_check_k) &&
    (this.const_check_rez || this.const_check_koz || this.const_check_der || this.const_check_mik || this.const_check_pol|| this.const_check_met)  &&
    (this.const_check_chrome || this.const_check_camou || this.const_check_anti))
    {
    let a= this.vibor_ruc();
        console.log(" рукоять: ",a);
    let b=this.vibor_pocr();
      console.log("покрытие: ",b);
    let c=this.vibor_nozni();
      console.log("ножны: ",c);

    let res =a.filter(o => b.some(({id}) => o.id === id));
    let res2 =res.filter(o => c.some(({id}) => o.id === id));
    console.log("все рукоять+покрытие+ножны: ",res2);
    const unique = Array.from(new Set(res2));
    console.log("уникальные рукоять+покрытие+ножны: ",unique);
    all=unique;
    }

    this.filter_items=all;
    console.log("ВСЕ!!!!: ",this.filter_items);
  }
  this.setFiltersToLocalStorage()
  console.log("итог ",this.all_filters)
}

check_const(){
  if (this.min_od!=this.options_od.floor||this.max_od!=this.options_od.ceil)
  this.const_od=true;
  if (this.min_dk!==this.options_dk.floor||this.max_dk!=this.options_dk.ceil)
  this.const_dk=true;
/*   if (this.min_sh!=this.options_sh.floor||this.max_sh!=this.options_sh.ceil)
  this.const_sh=true; */
  if (this.min_to!=this.options_to.floor||this.max_to!=this.options_to.ceil)
  this.const_to=true;
 }

filters_start2(items:Item[]){


    const regex = /([0-9])/g;
    const regex2 = /[+-]?([0-9]*[.])?[0-9]+/g;
    let filter_items_dk:Item[];
    let filter_items_od:Item[];

    let filter_items_to:Item[];
    let flag:boolean=false;


    if (this.const_dk||this.const_od||this.const_to) {
      flag=true;

      filter_items_dk=this.items.filter(a=> a.origins.find((value) => {
        if(value[0]=='Длина клинка' ){
        //console.log("VALUE!!!!!!! ",value[0])
        let flag1=false;
        let flag2=false;
        if (value[0]=='Длина клинка' )
          flag1=true;
        let mas_value=value[1].split('/');
        for (let i = 0; i < mas_value.length; i++) {
          if(Number(mas_value[i].match(regex)?.join(''))>=this.min_dk &&
          Number(mas_value[i].match(regex)?.join(''))<=this.max_dk!){
            flag2=true
          }
          //console.log("dk",i," - ",mas_value[i])
        }
        if(flag1 && flag2)
          return true;
        return false;
        }
      return false;
      }
  ));
      //console.log(filter_items_dk);

        filter_items_od=filter_items_dk.filter(a=> a.origins.find((value) => {
          if(value[0]=='Общая длина' ){
          console.log("VALUE!!!!!!! ",value[0])
          let flag1=false;
          let flag2=false;
          if (value[0]=='Общая длина' )
            flag1=true;
          let mas_value=value[1].split('/');
          for (let i = 0; i < mas_value.length; i++) {
            if(Number(mas_value[i].match(regex)?.join(''))>=this.min_od &&
            Number(mas_value[i].match(regex)?.join(''))<=this.max_od!){
              flag2=true
            }
            console.log("od",i," - ",mas_value[i])
          }
          if(flag1 && flag2)
            return true;
          return false;
          }
        return false;
        }
    ));

    filter_items_to=filter_items_od.filter(a=> a.origins.find((value) => {
      if(value[0]=='Толщина обуха' ){
      //console.log("VALUE!!!!!!! ",value[0])
      let flag1=false;
      let flag2=false;
      if (value[0]=='Толщина обуха' )
        flag1=true;
      let mas_value=value[1].split('/');
      for (let i = 0; i < mas_value.length; i++) {
        if(Number(mas_value[i].match(regex2)?.join(''))>=this.min_to &&
        Number(mas_value[i].match(regex2)?.join(''))<=this.max_to!){
          flag2=true
        }
        //console.log("to",i," - ",mas_value[i])
      }
      if(flag1 && flag2)
        return true;
      return false;
      }
    return false;
    }
));

      //filter_items_dk=items.filter(a=> a.origins.find(x=> (x[0]=='Длина клинка' && Number(x[1].match(regex)?.join(''))>=this.min_dk  && Number(x[1].match(regex)?.join(''))<= this.max_dk!)));
      //filter_items_od=filter_items_dk.filter(a=> a.origins.find(x=> (x[0]=='Общая длина' && Number(x[1].match(regex)?.join(''))>=this.min_od  && Number(x[1].match(regex)?.join(''))<= this.max_od!)));

      //filter_items_to=filter_items_od.filter(a=> a.origins.find(x=> (x[0]=='Толщина обуха' && Number(x[1].match(regex2)?.join(''))>=this.min_to  && Number(x[1].match(regex2)?.join(''))<= this.max_to!)));


      //let temp_hoz=filter_items_to.filter(a=> a.tags!=undefined && a.tags[0]=='Хозяйственно-бытовые ножи');
      //const filtered = filter_items_to.filter(x => temp_hoz.includes(x));
      this.filter_items =filter_items_to;
  /*     this.filter_items = filter_items_to; */
    }

    if (this.const_check_chrome||this.const_check_camou||this.const_check_anti||
      this.const_check_rez||this.const_check_koz||this.const_check_der||this.const_check_mik||this.const_check_pol ||this.const_check_met
      ||this.const_check_nk||this.const_check_p||this.const_check_k){
      let temp_items:Item[]=[];
      let temp_items2:Item[]=[];

      if (flag==true) {
        this.filter_items.filter(obj =>
              obj.variants!=undefined && obj.variants.length>0 && temp_items.push(obj));
        }
        else {
          items.filter(obj =>
            obj.variants!=undefined && obj.variants.length>0 && temp_items.push(obj));
        }

let all:Item[]=[];

  //если выбраны варианты только из материала рукояти
  if ((this.const_check_rez||this.const_check_koz||this.const_check_der||this.const_check_mik||this.const_check_pol||this.const_check_met)&&
      (!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&
      (!this.const_check_nk && !this.const_check_p && !this.const_check_k)
  ){
  if (this.const_check_rez&&(!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&(!this.const_check_nk && !this.const_check_p && !this.const_check_k))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("ТЭП")&& value.type.match("Рукоять") && temp_items2.push(element))
          );
  if (this.const_check_koz&&(!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&(!this.const_check_nk && !this.const_check_p && !this.const_check_k))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Кожа и латунь")&& value.type.match("Рукоять") && temp_items2.push(element))
          );
  if (this.const_check_der&&(!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&(!this.const_check_nk && !this.const_check_p && !this.const_check_k))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Дерево")&& value.type.match("Рукоять") && temp_items2.push(element))
          );
  if (this.const_check_mik&&(!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&(!this.const_check_nk && !this.const_check_p && !this.const_check_k))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Микарта")&& value.type.match("Рукоять") && temp_items2.push(element))
          );
  if (this.const_check_pol&&(!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&(!this.const_check_nk && !this.const_check_p && !this.const_check_k))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Полипропилен")&& value.type.match("Рукоять") && temp_items2.push(element))
          );
  if (this.const_check_met&&(!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti)&&(!this.const_check_nk && !this.const_check_p && !this.const_check_k))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Скелетного типа")&& value.type.match("Рукоять") && temp_items2.push(element))
          );
          console.log("ВСЕ ДЛЯ  РУКОЯТИ ",temp_items2)
          temp_items2 = Array.from(new Set(temp_items2));
          console.log("ВСЕ ДЛЯ РУКОЯТИ БЕЗ ДУБЛИКАТОВ ",temp_items2)
          all=temp_items2;
  }

  //если выбраны варианты только из покрытия клинка
  if ((this.const_check_chrome||this.const_check_camou||this.const_check_anti) &&
      (!this.const_check_rez && !this.const_check_koz && !this.const_check_der && !this.const_check_mik && !this.const_check_pol && !this.const_check_met)&&
      (!this.const_check_nk && !this.const_check_p && !this.const_check_k)){
  if (this.const_check_chrome &&(!this.const_check_nk && !this.const_check_p && !this.const_check_k)&&(!this.const_check_rez && !this.const_check_koz && !this.const_check_der&& !this.const_check_mik && !this.const_check_pol && !this.const_check_met))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Черный хром")&& value.type.match("Покрытие") && temp_items2.push(element))
          );
  if (this.const_check_camou &&(!this.const_check_nk && !this.const_check_p && !this.const_check_k)&&(!this.const_check_rez && !this.const_check_koz && !this.const_check_der&& !this.const_check_mik && !this.const_check_pol && !this.const_check_met))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Камуфляж")&& value.type.match("Покрытие") && temp_items2.push(element))
          );
  if (this.const_check_anti &&(!this.const_check_nk && !this.const_check_p && !this.const_check_k)&&(!this.const_check_rez && !this.const_check_koz && !this.const_check_der&& !this.const_check_mik && !this.const_check_pol && !this.const_check_met))
        temp_items.filter((element) =>
              element.variants?.filter((value) => value.name.match("Антиблик")&& value.type.match("Покрытие") && temp_items2.push(element))
          );

  console.log("ВСЕ ДЛЯ ПОКРЫТИЯ ",temp_items2)
  temp_items2 = Array.from(new Set(temp_items2));
  console.log("ВСЕ ДЛЯ ПОКРЫТИЯ БЕЗ ДУБЛИКАТОВ ",temp_items2)
  all=temp_items2;
  }

//если выбраны варианты только ножен
  if ((this.const_check_nk || this.const_check_p || this.const_check_k)&&
      (!this.const_check_chrome&& !this.const_check_camou&& !this.const_check_anti) &&
      (!this.const_check_rez && !this.const_check_koz && !this.const_check_der && !this.const_check_mik && !this.const_check_pol && !this.const_check_met)){

if (this.const_check_nk &&(!this.const_check_chrome&& !this.const_check_camou&& !this.const_check_anti)&&(!this.const_check_rez && !this.const_check_koz && !this.const_check_der&& !this.const_check_mik && !this.const_check_pol && !this.const_check_met))
    temp_items.filter((element) =>
          element.variants?.filter((value) => value.name.match("Натуральная кожа")&& value.type.match("Ножны") && temp_items2.push(element))
      );
if ( this.const_check_p &&(!this.const_check_chrome&& !this.const_check_camou&& !this.const_check_anti)&&(!this.const_check_rez && !this.const_check_koz && !this.const_check_der&& !this.const_check_mik && !this.const_check_pol && !this.const_check_met))
    temp_items.filter((element) =>
          element.variants?.filter((value) => value.name.match("АБС-пластик")&& value.type.match("Ножны") && temp_items2.push(element))
      );
if ( this.const_check_k &&(!this.const_check_chrome&& !this.const_check_camou&& !this.const_check_anti)&&(!this.const_check_rez && !this.const_check_koz && !this.const_check_der&& !this.const_check_mik && !this.const_check_pol && !this.const_check_met))
    temp_items.filter((element) =>
          element.variants?.filter((value) => value.name.match("Кордура")&& value.type.match("Ножны") && temp_items2.push(element))
      );

console.log("ВСЕ ДЛЯ НОЖЕН ",temp_items2)
temp_items2 = Array.from(new Set(temp_items2));
console.log("ВСЕ ДЛЯ НОЖЕН БЕЗ ДУБЛИКАТОВ ",temp_items2)
all=temp_items2;
}



//ножны+рукоять
if ((this.const_check_nk || this.const_check_p || this.const_check_k) &&
    (this.const_check_rez || this.const_check_koz || this.const_check_der || this.const_check_mik || this.const_check_pol || this.const_check_met)&&
    (!this.const_check_chrome && !this.const_check_camou && !this.const_check_anti))
    {
    let a= this.vibor_nozni();
        console.log("ножны: ",a);
    let b=this.vibor_ruc();
      console.log("рукоять: ",b);
    let res =a.filter(o => b.some(({id}) => o.id === id));
    console.log("все ножны+рукоять: ",res);
    const unique = Array.from(new Set(res));
    console.log("уникальные ножны+рукоять: ",unique);
    all=unique;
    }

//ножны+покрытие
if ((this.const_check_nk || this.const_check_p || this.const_check_k) &&
    (!this.const_check_rez && !this.const_check_koz && !this.const_check_der && !this.const_check_mik && !this.const_check_pol && !this.const_check_met)&&
    (this.const_check_chrome || this.const_check_camou || this.const_check_anti))
    {
    let a= this.vibor_nozni();
        console.log("ножны: ",a);
    let b=this.vibor_pocr();
      console.log("покрытие: ",b);
    let res =a.filter(o => b.some(({id}) => o.id === id));
    console.log("все ножны+покрытие: ",res);
    const unique = Array.from(new Set(res));
    console.log("уникальные ножны+покрытие: ",unique);
    all=unique;
    }

//рукоять+покрытие
if ((!this.const_check_nk && !this.const_check_p && !this.const_check_k) &&
    (this.const_check_rez || this.const_check_koz || this.const_check_der || this.const_check_mik || this.const_check_pol || this.const_check_met)  &&
    (this.const_check_chrome || this.const_check_camou || this.const_check_anti))
    {
    let a= this.vibor_ruc();
        console.log(" рукоять: ",a);
    let b=this.vibor_pocr();
      console.log("покрытие: ",b);
    let res =a.filter(o => b.some(({id}) => o.id === id));
    console.log("все рукоять+покрытие: ",res);
    const unique = Array.from(new Set(res));
    console.log("уникальные рукоять+покрытие: ",unique);
    all=unique;
    }

//рукоять+покрытие+ножны
if ((this.const_check_nk || this.const_check_p || this.const_check_k) &&
    (this.const_check_rez || this.const_check_koz || this.const_check_der || this.const_check_mik || this.const_check_pol || this.const_check_met)  &&
    (this.const_check_chrome || this.const_check_camou || this.const_check_anti))
    {
    let a= this.vibor_ruc();
        console.log(" рукоять: ",a);
    let b=this.vibor_pocr();
      console.log("покрытие: ",b);
    let c=this.vibor_nozni();
      console.log("ножны: ",c);

    let res =a.filter(o => b.some(({id}) => o.id === id));
    let res2 =res.filter(o => c.some(({id}) => o.id === id));
    console.log("все рукоять+покрытие+ножны: ",res2);
    const unique = Array.from(new Set(res2));
    console.log("уникальные рукоять+покрытие+ножны: ",unique);
    all=unique;
    }

    this.filter_items=all;
    console.log("ВСЕ!!!!: ",this.filter_items);
  }
  return this.filter_items;
}



private  setFiltersToLocalStorage():void{

  this.all_filters.dlina_ob=[this.min_od,this.max_od];
  this.all_filters.dlina_kl=[this.min_dk,this.max_dk];
/*   this.all_filters.shirina_kl=[this.min_sh,this.max_sh]; */
  this.all_filters.tolchina=[this.min_to,this.max_to];




  let res=false;
  var element = <HTMLInputElement> document.getElementById("Checkbox_Anti");
    if (element.checked == true) res=true
    else res=false
    this.all_filters.anti=res;

  var element = <HTMLInputElement> document.getElementById("Checkbox_Camou");
  if (element.checked == true) res=true
  else res=false
  this.all_filters.camou=res;

  var element = <HTMLInputElement> document.getElementById("Checkbox_Chrome");
  if (element.checked == true) res=true
  else res=false
  this.all_filters.chrome=res;

  var element = <HTMLInputElement> document.getElementById("Checkbox_Koz");
  if (element.checked == true) res=true
  else res=false
  this.all_filters.koza=res;

  var element = <HTMLInputElement> document.getElementById("Checkbox_Rez");
  if (element.checked == true) res=true
  else res=false
  this.all_filters.rezina=res;

  var element = <HTMLInputElement> document.getElementById("Checkbox_Der");
  if (element.checked == true) res=true
  else res=false
  this.all_filters.derevo=res;

  var element = <HTMLInputElement> document.getElementById("Checkbox_Mik");
  if (element.checked == true) res=true
  else res=false
  this.all_filters.mikarta=res;

  var element = <HTMLInputElement> document.getElementById("Checkbox_Pol");
  if (element.checked == true) res=true
  else res=false
  this.all_filters.polipropilen=res;

  var element = <HTMLInputElement> document.getElementById("Checkbox_Met");
  if (element.checked == true) res=true
  else res=false
  this.all_filters.metal=res;

  var element = <HTMLInputElement> document.getElementById("Checkbox_NK");
  if (element.checked == true) res=true
  else res=false
  this.all_filters.naturkoza=res;

  var element = <HTMLInputElement> document.getElementById("Checkbox_P");
  if (element.checked == true) res=true
  else res=false
  this.all_filters.plastic=res;

  var element = <HTMLInputElement> document.getElementById("Checkbox_K");
  if (element.checked == true) res=true
  else res=false
  this.all_filters.kordura=res;

  this.itemService.setFiltersToLocalStorage(this.all_filters);
}

}


