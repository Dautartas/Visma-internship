import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let editButton: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it(`is edit product edit button is rendered only in product list'`, () => {
  // const fixture = TestBed.createComponent(ProductComponent);
  // const product = fixture.componentInstance;
  // editButton = fixture.nativeElement.querySelector('.product__edit');
  // expect(product).toEqual();
  // });
});
