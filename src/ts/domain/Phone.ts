import Buyable from "./Buyable";

export default class Phone implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly model: string,
    readonly year: number,
    readonly picture: string,
    readonly price: number
  ) {}
}