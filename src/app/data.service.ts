import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sdata="hello hi"
  constructor() { }
  smethod(){
    alert('service method')
  }
}
