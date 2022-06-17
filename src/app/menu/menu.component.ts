import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../IProducts';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products:IProducts[] = products;

  product : any;

  constructor(private route : ActivatedRoute, private CS : CartService) { }

  addToCart(prod : any) {
    this.CS.addToCart(prod);
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id : any = params.get("id");
      this.product = products[id];
    })
  }

}
