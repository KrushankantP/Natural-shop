import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {IProduct} from "../models/IProduct";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }
  getAllProducts() {
    return this.db.list('/products')
      .snapshotChanges()
      .pipe(
        map(actions=>{
           return actions.map(action=>
                  ({key: action.key, ...action.payload.val() as IProduct}));
    }));
  }
  getProduct(productId) {
    return this.db.object('/products/' + productId)
      .valueChanges() as Observable<IProduct>;
  }
  updateProduct(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  deleteProduct(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
