export class Product {
  public name: string;
  public price: number;
  public imagePath: string;
  public onSale: boolean;

  constructor(name: string, price: number, imagePath: string, onSale: boolean) {
    this.name = name;
    this.price = price;
    this.imagePath = imagePath;
    this.onSale = onSale;
  }
}
