import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './interfaces/Product';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: Product): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.title.indexOf(filter.title) !== -1);
    }
}