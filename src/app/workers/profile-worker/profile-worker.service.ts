import { Injectable } from '@angular/core';
import { MemberProfile } from 'bungie-models';
import { fromWorker } from 'observable-webworker';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileWorkerService {
  constructor() {}

  doTheThing(): Observable<MemberProfile[]> {
    return fromWorker(() => new Worker('./profile.worker', { type: 'module' }), null);
  }
}

// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker(new URL('./profile.worker', import.meta.url));
//   worker.onmessage = ({ data }) => {
//     console.log(`page got message: ${data}`);
//   };
//   worker.postMessage('hello');
// } else {
//   // Web Workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
// }
