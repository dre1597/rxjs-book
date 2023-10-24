import { of, retry } from 'rxjs';
import { map } from 'rxjs/operators';

const stream$ = of(1, 2, 3).pipe(
  map((value) => {
    if (value > 2) {
      throw 'error';
    }
    return value;
  }),
  retry(5),
);

stream$.subscribe({
  next: (data) => console.log(data),
  error: (err) => console.log(err),
});
