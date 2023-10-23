import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

const stream$ = of(1, 2, 3).pipe(
  tap((value) => {
    console.log('emits every value', value);
  }),
);

stream$.subscribe((value) => {
  console.log('Value', value);
});
