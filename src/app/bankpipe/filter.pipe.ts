import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(transactionArray: any[], searchTerm: string, searchKey: string): any[] {
    //variable to store the output data
    const result: any = []
    if (!transactionArray || !searchTerm || !searchKey) {
      return transactionArray
    }
    else {
      transactionArray.forEach(item => {
        if (item[searchKey].includes(searchTerm)) {
          result.push(item)
        }
      })
      return result
    }
  }

}
