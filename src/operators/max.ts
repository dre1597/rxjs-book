import { of } from 'rxjs';
import { max } from 'rxjs/operators';

const stream$ = of(5, 4, 7, -1).pipe(max());

stream$.subscribe((value) => {
  console.log('Value', value);
});

function comparer(x: number, y: number) {
  if (x > y) {
    return 1;
  } else if (x < y) {
    return -1;
  } else return 0;
}

const stream$2 = of(5, 4, 7, -1).pipe(max(comparer));

stream$2.subscribe((value) => {
  console.log('Value', value);
});
