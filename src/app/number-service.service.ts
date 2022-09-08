import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberServiceService {

  constructor() { };

  getFirst100() : Observable<number[]>{

    var numbers = [];

    for(let i = 0; i<=99 ; i++){
      numbers.push(i);
    }

    return of(numbers);

  }

}
