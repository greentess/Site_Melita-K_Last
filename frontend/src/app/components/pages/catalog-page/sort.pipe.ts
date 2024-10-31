import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/shared/models/Item';
import { Observable } from 'rxjs';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(filter_items: Item[], sortBy: string): Item[] {
/*     var order = sortBy.charAt(0) == "-" ? 'desc' : "asc";
    if ( sortBy === undefined || sortBy === 'id') {
      filter_items.sort((e1, e2) => e1.id.localeCompare(e2.id));
      } else if ( sortBy === 'name') {
        filter_items.sort((e1, e2) => e1.name.localeCompare(e2.name));
      }
      console.log(filter_items)
      if (order==='desc')
      return filter_items.reverse();
      else
      return filter_items; */

      //var order = sortBy.charAt(0) == "-" ? 'desc' : "asc";

      if ( sortBy === undefined || sortBy === 'ALL') {

        const G_items=filter_items.filter(a=> a.tags!=undefined && a.tags[0]=='Гражданские ножи');
        const BHO_items=filter_items.filter(a=> a.tags!=undefined && a.tags[0]=='Боевое холодное оружие');
        const H_items=filter_items.filter(a=> a.tags!=undefined && a.tags[0]=='Хозяйственно-бытовые ножи');
        const U_items=filter_items.filter(a=> a.tags!=undefined && a.tags[0]=='Услуги');
        const P_items=filter_items.filter(a=> a.tags!=undefined && a.tags[0]=='Прочее');
        const ALL_items: Item[]=[...G_items,...BHO_items,...H_items,...P_items,...U_items]
        return ALL_items
        }
        else if ( sortBy === 'G') {
          filter_items=filter_items.filter(a=> a.tags!=undefined && a.tags[0]=='Гражданские ножи');
        }
        else if ( sortBy === 'BHO') {
          filter_items=filter_items.filter(a=> a.tags!=undefined && a.tags[0]=='Боевое холодное оружие');
        }
        else if ( sortBy === 'H') {
          filter_items=filter_items.filter(a=> a.tags!=undefined && a.tags[0]=='Хозяйственно-бытовые ножи');
        }
        else if ( sortBy === 'U') {
          filter_items=filter_items.filter(a=> a.tags!=undefined && a.tags[0]=='Услуги');

        }
        else if ( sortBy === 'P') {
          filter_items=filter_items.filter(a=> a.tags!=undefined && a.tags[0]=='Прочее');
        }
        //console.log(filter_items)
        //console.log(sortBy)

        return filter_items;
}
}
