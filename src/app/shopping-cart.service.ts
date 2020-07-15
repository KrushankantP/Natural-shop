import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {IProduct} from "./models/IProduct";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) {
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId);
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    return this.getCart(cartId);

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(product: IProduct) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);
    item$.pipe(take(1)).subscribe(item => {
      if (item.$exists()) item$.update({quantity: item.quantity + 1});
      else item$.set({product: product, quantity: 1});
    });
  }
}
