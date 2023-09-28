import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly engName: string,
    readonly year: number,
    readonly countries: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly time: string | number,
    readonly cover: string,
    readonly price: number
  ) {}
}