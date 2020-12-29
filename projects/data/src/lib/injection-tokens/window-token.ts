import { InjectionToken } from '@angular/core';

// tslint:disable-next-line:variable-name
export const WindowToken = new InjectionToken('Window');
export function windowProvider() {
  return window;
}
