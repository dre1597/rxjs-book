import { of } from 'rxjs';

const stream$ = of(1, 2, 3, 4, 5);

stream$.subscribe((value) => {
  console.log('Value', value);
});
