import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart : Array<IProducts> = [];
  constructor() { }

  addToCart(product : IProducts){
    this.cart.push(product)
  }
  getCart () {
    return this.cart;
  }
  clearCart() {
    this.cart=[];
    return this.cart;
  }
  cartTotal(){
    let tAmount: number = 0;
    for(let val of this.cart){
      tAmount = val.price + tAmount;
    }
    return tAmount;
  }

  itemsLength(){
    return this.cart.length;
  }
  getItems() {

    return this.cart;
  }
}

