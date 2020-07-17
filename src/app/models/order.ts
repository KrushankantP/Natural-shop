import {ShoppingCart} from "./shopping-cart";
import {ShippingAddress} from "./shipping-address";

export class Order {
  datePlaced: number;
  items: any[];

  constructor(
    public userId: string,
    public shipping: ShippingAddress,
    shoppingCart: ShoppingCart
  ) {
    this.datePlaced = new Date().getTime();
    this.items = shoppingCart.items.map(item => {
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
