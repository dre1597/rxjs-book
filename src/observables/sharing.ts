import { Observable, share } from 'rxjs';

const stream$ = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
}).pipe(share());

stream$.subscribe({
  next: (data) => console.log('subscriber 1', data),
  error: (err) => console.error(err),
  complete: () => console.log('completed'),
});

stream$.subscribe({
  next: (data) => console.log('subscriber 2', data),
  error: (err) => console.error(err),
  complete: () => console.log('completed'),
});
