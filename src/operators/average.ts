import { of } from 'rxjs';
import { map, reduce } from 'rxjs/operators';

const stream$ = of(3, 6, 9).pipe(
  map((x) => {
    return { sum: x, counter: 1 };
  }),
  reduce((acc, curr) => {
    return { ...acc, sum: acc.sum + curr.sum, counter: acc.counter + 1 };
  }),
  map((x) => x.sum / x.counter),
);

stream$.subscribe((value) => {
  console.log('Value', value);
});
