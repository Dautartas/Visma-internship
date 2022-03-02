import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/core/resources/models/product.model';
import { ProductService } from 'src/app/core/resources/services/product.service';
import { IMAGE_NAMES } from 'src/app/shared/constants';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CanComponentDeactivate } from 'src/app/core/resources/services/can-deacticate-guard.service';
import { Observable } from 'rxjs';
@UntilDestroy()
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {
  productForm!: FormGroup;
  product!: Product;

  imageNames: string[] = IMAGE_NAMES;
  images: string[] = this.appendImagePath(IMAGE_NAMES);
  private defaultImage: string = this.images[0];
  productImagePath: string = this.defaultImage;

  private changesSaved: boolean = false;

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
      price: 1,
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
        Validators.max(10000),
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
          next: () => {},
          error: (error) => {
            console.error('Error while deleting the product.' + error);
          },
          complete: () => {
            alert('Product deleted.');
          },
        });
      this.changesSaved = true;
      this.router.navigate(['..']);
    }
  }

  addProduct() {
    this.productService
      .addProduct(this.productForm.value)
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (response) => {},
        error: (error) => {
          console.error('Error while adding the product.' + error);
        },
        complete: () => {
          alert('New product was added');
        },
      });
  }

  updateProduct() {
    this.productService
      .updateProduct(Number(this.product.id), this.productForm.value)
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (response) => {},
        error: (error) => {
          console.error('Error while updating the product data.' + error);
        },
        complete: () => {
          alert('Product updated.');
        },
      });
  }

  onSubmit() {
    if (!this.productForm.valid) {
      alert('Please fix invalid fields');
    } else {
      if (!this.product) {
        this.addProduct();
      } else {
        this.updateProduct();
      }
      this.changesSaved = true;
      this.router.navigate(['/shop']);
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.changesSaved) {
      return confirm(
        'You are about to leave the page with unsaved changes. Proceed?'
      );
    } else {
      return true;
    }
  }
}
