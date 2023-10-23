import { range } from 'rxjs';

const stream$ = range(1, 10);

stream$.subscribe((value) => {
  console.log('Value', value);
});
