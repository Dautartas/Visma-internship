import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/core/resources/models/product.model';
import { ProductService } from 'src/app/core/resources/services/product.service';
import { IMAGE_NAMES } from 'src/app/shared/components/constants';
import { EDIT_FORM, ADD_FORM } from 'src/app/shared/components/constants';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  currentForm!: string; //  remove
  editForm: string = EDIT_FORM;
  addForm: string = ADD_FORM;
  addClicked = false;
  productForm!: FormGroup;
  imageNames: string[] = IMAGE_NAMES;
  images: string[] = this.appendImagePath(IMAGE_NAMES);
  private defaultImage: string = this.images[0];
  productImagePath: string = this.defaultImage;
  private routeSub!: Subscription;
  private productId!: number;
  //product
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.productId = +params['id'];
        this.loadEditForm(+params['id']); //TODO: pass product so no two functions are needed
      } else {
        this.loadAddForm();
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  loadEditForm(id: number) {
    this.currentForm = EDIT_FORM;
    let p: Product = this.productService.getProduct(id); //TODO: navigate to error page if not found

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

  loadAddForm() {
    this.currentForm = ADD_FORM;
    this.productForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(100),
      ]),
      price: new FormControl(null, [Validators.required, Validators.min(0.01)]),
      image: new FormControl(this.defaultImage, [Validators.required]),
      onSale: new FormControl(false),
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
      this.productService.deleteProduct(this.productId);
      alert('Product deleted.');
      this.router.navigate(['..']);
    }
  }

  onUpdate() {
    // Useless now
    this.addClicked = false;
  }

  onAdd() {
    this.addClicked = true;
  }

  onSubmit() {
    if (this.addClicked) {
      alert('New product was added');
      this.productService.addProduct(this.productForm.value);
      this.router.navigate(['/shop']);
    } else {
      alert('Product was updated');
      this.productService.updateProduct(this.productForm.value);
      this.router.navigate(['/shop']);
    }
  }
}
