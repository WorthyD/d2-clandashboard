import { MemberProfile } from 'bungie-models';
import { DoWork, runWorker } from 'observable-webworker';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ProfileWorkerInput {}

export class HelloWorker implements DoWork<ProfileWorkerInput, MemberProfile[]> {
  public work(input$: Observable<ProfileWorkerInput>): Observable<MemberProfile[]> {
    return input$.pipe(
      map((message) => {
        console.log(message); // outputs 'Hello from main thread'
        return null;
      })
    );
  }
}

runWorker(HelloWorker);
