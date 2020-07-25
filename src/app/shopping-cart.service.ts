import { Injectable } from '@angular/core';
import {AngularFireDatabase } from "@angular/fire/database";
import {IProduct} from "./shared/models/IProduct";
import {take,map} from "rxjs/operators";
import {ShoppingCart} from "./shared/models/shopping-cart";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) {}

  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db
      .object('/shopping-carts/' + cartId)
      .snapshotChanges()
      .pipe(
        map(changes => {
          const newCart: any = changes.payload.val();
          return new ShoppingCart(newCart && newCart.items);
        })
      );
  }
  //async
  addToCart(product: IProduct) {
    this.updateItemQuantity(product, 1);
  }
  //async
  removeFromCart(product: IProduct) {
    this.updateItemQuantity(product, -1);
  }

  async clearCart() {
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private async updateItemQuantity(product: IProduct, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ =  this.getItem(cartId, product.key);
    item$
      .snapshotChanges()
      .pipe(take(1))
      .subscribe((item:any) => {
        let value = item.payload.val();
        let quantity = (value ? value.quantity : 0) + change;

        if (quantity === 0) item$.remove();
        else {
          item$.update({
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: quantity
          });
        }
      });
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId')

    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);

    return result.key;
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }


}
