export class Product {
  constructor(
    public name: string,
    public price: number,
    public imagePath: string,
    public onSale: boolean
  ) {
    this.name = name;
    this.price = price;
    this.imagePath = imagePath;
    this.onSale = onSale;
  }
}
