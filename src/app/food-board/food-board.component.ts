import { AfterViewInit, Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FoodCardComponent } from '../food-card/food-card.component';

@Component({
  selector: 'app-food-board',
  templateUrl: './food-board.component.html',
  styleUrls: ['./food-board.component.css']
})
export class FoodBoardComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('orderedViewContainer', { read: ViewContainerRef, static: true }) public orderedViewContainer!:ViewContainerRef;
  public componentRefs: ComponentRef<FoodCardComponent>[] = [];
  private count: number = 0;
  private total: number = 0;


  constructor() { }
  ngOnDestroy(): void {
    for (const componentRef of this.componentRefs) {
      if (componentRef && componentRef.destroy) {
        componentRef.destroy()
      }
    }

  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

  addItem() {
    this.count = this.count + 1;
    const componentRef = this.orderedViewContainer.createComponent(FoodCardComponent);
    componentRef.instance.currency = "NTD";
    componentRef.instance.description = "demo";
    componentRef.instance.itemName = "demo" + this.count;
    componentRef.instance.price = "" + this.count;
    this.total = this.total + this.count;
    componentRef.instance.total = this.total;
    this.componentRefs.push(componentRef);
  }


}
