import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

const stream$ = of(1, 2, 3, 4).pipe(
  reduce((accumulated, current) => accumulated + current),
);

stream$.subscribe((value) => {
  console.log('Value', value);
});

const objectStream$ = of({ name: 'chris' }, { age: 11 }).pipe(
  reduce((acc, curr) => ({ ...acc, ...curr })),
);

objectStream$.subscribe((value) => {
  console.log('Value', value);
});
