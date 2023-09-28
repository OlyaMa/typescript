import Cart from "./service/Cart";
import Book from "./domain/Book";
import MusicAlbum from "./domain/MusicAlbum";
import Movie from "./domain/Movie";
import Phone from "./domain/Phone";

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
cart.add(
  new Movie(
    5000,
    "Крестный отец",
    "The Godfather",
    1972,
    "USA",
    "Настоящая сила не может быть дана, она может быть взята...",
    ["драма", "криминал"],
    "175 мин. / 02:55",
    "img.jpg",
    600
  )
);
cart.add(new Phone(5001, "Samsung", "Galaxy S10", 2020, "img1.jpg", 500));

console.log(cart.items);
cart.minusElementfromCart(5000);
console.log(cart.items);