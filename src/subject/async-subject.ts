import { AsyncSubject } from 'rxjs';

const asyncSubject = new AsyncSubject();
asyncSubject.subscribe({
  next: (value) => console.log('async next', value),
  error: (error) => console.error('async error', error),
  complete: () => console.log('async completed'),
});

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.next(4);
asyncSubject.complete();
asyncSubject.next(5);
asyncSubject.complete();

// only 4 is emitted
