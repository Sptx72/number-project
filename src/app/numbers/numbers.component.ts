import { Component, OnInit } from '@angular/core';
import { NumberServiceService } from '../number-service.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  firstNumbers : number[] = [];

  constructor( private numbersService : NumberServiceService ) { };

  ngOnInit() : void{
    this.first100Numbers();
  }

  first100Numbers() : void{
    this.numbersService.getFirst100()
                        .subscribe(firstNumbers => this.firstNumbers = firstNumbers)
  }

}
