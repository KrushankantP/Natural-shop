import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {ShoppingCartService} from "./shopping-cart.service";
import {map} from "rxjs/operators";
import {Order} from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private db: AngularFireDatabase,
    private _cartService: ShoppingCartService
  ) {}

  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this._cartService.clearCart();
    return result;
  }

  getOrders() {
    return this.db.list('/orders')
      .snapshotChanges()
      .pipe(map(actions=>{
        return actions.map(action=>({
          key: action.key, ...action.payload.val() as Order
        }));
      }))
  }

  getOrderByUser(userId: string) {
    return this.db.list('/orders', ref => ref.orderByChild('userId').equalTo(userId)).snapshotChanges()
      .pipe(map(actions => {
        return actions.map(action => ({
          key: action.key, ...action.payload.val() as Order
        }));
      }));
  }

  getSingleOrder(id: any) {
    return this.db.object('/orders/' + id).valueChanges();
  }
}
