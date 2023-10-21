import { of } from 'rxjs';

const stream$ = of(1, 2, 3);
//subscriber 1: 1,2,3
stream$.subscribe({
  next: (data) => console.log(data),
  error: (err) => console.error(err),
  complete: () => console.log('completed'),
});

//subscriber 2: 1,2,3
stream$.subscribe({
  next: (data) => console.log(data),
  error: (err) => console.error(err),
  complete: () => console.log('completed'),
});
