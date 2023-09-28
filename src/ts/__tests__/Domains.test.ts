// ts ignore next
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Movie from "../domain/Movie";
import Phone from "../domain/Phone";

test.each([
  [
    "all classes",
    [
      new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225),
      new MusicAlbum(1008, "Meteora", "Linkin Park", 900),
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
      ),
      new Phone(11, "iPhone", "5", 2015, "img.jpg", 1000),
    ],
    [
      {
        id: 1001,
        name: "War and Piece",
        author: "Leo Tolstoy",
        price: 2000,
        pages: 1225,
      },
      {
        id: 1008,
        name: "Meteora",
        author: "Linkin Park",
        price: 900,
      },
      {
        id: 5000,
        name: "Крестный отец",
        engName: "The Godfather",
        year: 1972,
        countries: "USA",
        slogan: "Настоящая сила не может быть дана, она может быть взята...",
        genre: ["драма", "криминал"],
        time: "175 мин. / 02:55",
        cover: "img.jpg",
        price: 600,
      },
      {
        id: 11,
        name: "iPhone",
        model: "5",
        year: 2015,
        picture: "img.jpg",
        price: 1000,
      },
    ],
  ],
])("testing working status of %s", (_, imported, expected) => {
  expect(imported).toEqual(expected);
});