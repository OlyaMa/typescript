import Buyable from "../domain/Buyable";

interface CartItem {
  content: Buyable;
  count: number;
}

// Товары, которые могут быть только в одном экземпляре
const oneItemProducts: string[] = ["Book", "MusicAlbum", "Movie"];

export default class Cart {
  private _items: CartItem[] = [];

  add(item: Buyable): void {
    if (
      this._items.find((cartItem: CartItem) => cartItem.content.id === item.id)
    ) {
      if (oneItemProducts.includes(item.constructor.name)) {
        return;
      }
      this._items.map((cartItem: CartItem): void => {
        if (cartItem.content.id === item.id) {
          cartItem.count++;
        }
      });
    } else {
      this._items.push({ content: item, count: 1 });
    }
  }

  get items(): CartItem[] {
    return [...this._items];
  }

  sum(): number {
    return this._items.reduce(
      (sum: number, item: CartItem): number => sum + item.content.price,
      0
    );
  }

  sumWithDiscount(discount: number): number {
    const sum: number = this._items.reduce(
      (sum: number, item: CartItem) => sum + item.content.price,
      0
    );
    return sum - sum * (discount / 100);
  }

  delElementfromCart(id: number): void {
    this._items = this._items.filter(
      (item: CartItem): boolean => item.content.id !== id
    );
  }

  minusElementfromCart(id: number): void {
    const findCartItem = this._items.find(
      (item: CartItem): boolean => item.content.id === id
    );
    if (findCartItem && this._items.includes(findCartItem)) {
      this._items.map((cartItem: CartItem): void => {
        if (cartItem.content.id === id && cartItem.count > 1) {
          cartItem.count--;
        } else {
          this.delElementfromCart(id);
        }
      });
    }
  }
}