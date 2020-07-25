import {ShoppingCart} from "./shopping-cart";
import {ShippingAddress} from "./shipping-address";

export class Order {
  datePlaced: number;
  items: any[];

  constructor(
    public userId: string,
    public shipping: ShippingAddress,
    _shoppingCart: ShoppingCart
  ) {
    this.datePlaced = new Date().getTime();
    this.items = _shoppingCart.items.map(item => {
      return {
        product: {
          title: item.title,
          imageUrl: item.imageUrl,
          price: item.price
        },
        quantity: item.quantity,
        totalPrice: item.totalPrice
      };
    });
  }
}
