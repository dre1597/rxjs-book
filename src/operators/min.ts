import { of } from 'rxjs';
import { max } from 'rxjs/operators';

function comparer(
  x: { name: string; age: number },
  y: { name: string; age: number },
) {
  if (x.age > y.age) {
    return 1;
  } else if (x.age < y.age) {
    return -1;
  } else return 0;
}

const stream$ = of(
  { name: 'chris', age: 37 },
  { name: 'chross', age: 32 },
).pipe(max(comparer));

stream$.subscribe((value) => {
  console.log('Value', value);
});
