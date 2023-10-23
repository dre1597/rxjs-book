import { of, zip } from 'rxjs';

// column based

const stream$ = zip(Promise.resolve(1), of(2, 3, 4), of(7));

stream$.subscribe({
  next: (data) => console.log(data),
});

const stream2$ = zip(of(1, 5), of(2, 3, 4), of(7, 9));

stream2$.subscribe({
  next: (data) => console.log(data),
});
