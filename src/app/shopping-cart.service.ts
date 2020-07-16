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

  async getCart() {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(product: IProduct) {
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: IProduct) {
    this.updateItemQuantity(product, -1);
  }
  private async updateItemQuantity(product: IProduct, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ =  this.getItem(cartId, product.key);
    item$.snapshotChanges().pipe(take(1)).subscribe(item => {
      item$.update({ product: product, quantity: (item['quantity'] || 0) + change });
    });
  }
}
