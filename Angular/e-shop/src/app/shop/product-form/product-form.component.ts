import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/core/resources/models/product.model';
import { ProductService } from 'src/app/core/resources/services/product.service';
import { IMAGE_NAMES } from 'src/app/shared/components/constants';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
@UntilDestroy()
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  product!: Product;

  imageNames: string[] = IMAGE_NAMES;
  images: string[] = this.appendImagePath(IMAGE_NAMES);
  private defaultImage: string = this.images[0];
  productImagePath: string = this.defaultImage;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params: Params) => {
      if (params['id']) {
        this.product = this.route.snapshot.data['product'];
      }
      this.loadForm(this.product);
    });
  }

  emptyProduct(): Product {
    return <Product>{
      name: 'Product',
      price: 0,
      image: this.images[0],
      onSale: false,
    };
  }

  loadForm(p: Product) {
    p = p ? p : this.emptyProduct();
    this.productImagePath = p.image;
    this.productForm = new FormGroup({
      name: new FormControl(p.name, [
        Validators.required,
        Validators.maxLength(100),
      ]),
      price: new FormControl(p.price, [
        Validators.required,
        Validators.min(0.01),
      ]),
      image: new FormControl(p.image, [Validators.required]),
      onSale: new FormControl(p.onSale),
    });
  }

  appendImagePath(names: string[]): string[] {
    return names.map((item) => `../../../assets/${item}.png`);
  }

  onImageChange(target: any) {
    this.productImagePath = this.images[target.value[0]];
  }

  onDelete() {
    if (confirm('Product will be deleted. Proceed?')) {
      this.productService
        .deleteProduct(this.product.id!)
        .pipe(untilDestroyed(this))
        .subscribe({
          next: (response) => {
            console.log('Successfully deleted product');
          },
          error: (error) => {
            console.error('Error while deleting the product.' + error);
          },
        });
      alert('Product deleted.');
      this.router.navigate(['..']);
    }
  }

  onSubmit() {
    if (!this.product) {
      alert('New product was added');
      this.productService
        .addProduct(this.productForm.value)
        .pipe(untilDestroyed(this))
        .subscribe({
          next: (response) => {
            console.log('successfully added product' + response);
          },
          error: (error) => {
            console.error('Error while adding the product.' + error);
          },
        });
    } else {
      alert('Product was updated');
      this.productService
        .updateProduct(this.productForm.value)
        .pipe(untilDestroyed(this))
        .subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (error) => {
            console.error('Error while updating the product data.' + error);
          },
        });
    }
    this.router.navigate(['/shop']);
  }
}
