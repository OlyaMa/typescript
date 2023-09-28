// ts ignore next
import Cart from "../service/Cart";
import Movie from "../domain/Movie";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Phone from "../domain/Phone";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("add item to cart", () => {
  const cart = new Cart();
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
  expect(cart.items.length).toBe(1);
});

test("sum should be 3500", () => {
  const cart = new Cart();
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
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  expect(cart.sum()).toBe(3500);
});

test("sumWithDiscount should be 3000", () => {
  const cart = new Cart();
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
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  expect(cart.sumWithDiscount(10)).toBe(3150);
});

test("remove item from cart", () => {
  const cart = new Cart();
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
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.delElementfromCart(5000);
  expect(cart.items.length).toBe(1);
});

test("add element to cart with max one count", () => {
  const cart = new Cart();
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
  expect(cart.items.find((item) => item.content.id === 5000)?.count).toBe(1);
});

test("minus element from cart", () => {
  const cart = new Cart();
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
  cart.add(new Phone(5001, "Samsung", "Galaxy S10", 2020, "img1.jpg", 500));
  cart.minusElementfromCart(5000);
  cart.minusElementfromCart(5001);
  expect(cart.items.find((item) => item.content.id === 5001)?.count).toBe(1);
});