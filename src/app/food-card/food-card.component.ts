import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent implements OnInit {

    @Input()
  public total: number = 0;
  itemName: string = 'name';
  description: string = 'desc';
  currency: string = 'curreny';
  quantity: string = 'qty';
  price: string = 'price';

  constructor() { }

  ngOnInit(): void {
  }

}
