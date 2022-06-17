import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../IProducts';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {
  cartx: Array<IProducts> = [];
  total : number = 0;
  service : number = 0;
  discount : number = 0;
  final : number = 0;
  count: number = 0;

  constructor(private CS : CartService) { }

  ngOnInit(): void {
    this.cartx = this.CS.getCart();
  }
  ngDoCheck(): void {
    this.count = this.CS.itemsLength();
    this.sum();
  }

  sum() {
    for(let val of this.cartx) {
        this.total += val.price;
      }
      this.final = this.total;
      if(this.total > 40 ) {
        this.discount = this.total * 0.15;
      }
      this.service = this.total * 0.1;
      this.final = this.final - this.discount;
  }

}
