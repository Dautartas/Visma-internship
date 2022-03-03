import { Directive, Host, Inject, OnInit, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, EMPTY, merge } from 'rxjs';
import { FORM_ERRORS } from './form-errors';
import { FormSubmitDirective } from './form-submit.directive';

@Directive({
  selector: '[formControl], [formControlName]',
})
export class FormErrorDirective implements OnInit {
  submit$: Observable<Event>;

  constructor(
    private controlDir: NgControl,
    @Optional() @Host() private form: FormSubmitDirective,
    @Inject(FORM_ERRORS) private errors: any
  ) {
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit(): void {
    // merge(this.submit$, this.controlDir.valueChanges)
    //   .pipe(untilDestroyed(this))
    //   .subscribe(() => {
    //     const controlErrors = this.controlDir.errors;
    //     if (controlErrors) {
    //       const firstKey = Object.keys(controlErrors)[0];
    //       const getError = this.errors[firstKey];
    //       const text = getError(controlErrors[firstKey]);
    //     }
    //   });
  }
}
