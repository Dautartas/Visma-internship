export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public image: string,
    public onSale: boolean
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.onSale = onSale;
  }
}
