import { interval, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

const source$ = interval(500).pipe(take(3));
const proxySubject = new Subject();
proxySubject.next(3);
source$.subscribe(proxySubject);

proxySubject.subscribe((value) => console.log('proxy subscriber', value));

proxySubject.next(3);

const sharedService = {
  getDispatcher: () => {
    return proxySubject;
  },
  dispatch: (value: any) => {
    proxySubject.next(value);
  },
};

console.log(sharedService.getDispatcher());

sharedService.dispatch(4);
