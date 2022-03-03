import { InjectionToken } from '@angular/core';

type Length = {
  requiredLength: number;
  actualLength: number;
};

export const defaultErrors = {
  required: (error: Error) => `This field is required ${error}`,
  length: ({ requiredLength, actualLength }: Length) =>
    `Expect ${requiredLength} but got ${actualLength}`,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
