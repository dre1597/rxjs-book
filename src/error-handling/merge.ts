import { catchError, merge, of, throwError } from 'rxjs';

const badStream$ = throwError('crash');
const goodStream$ = of(1, 2, 3);

const merged$ = merge(badStream$, goodStream$).pipe(
  catchError((err) => of(err)),
);

merged$.subscribe({
  next: (data) => console.log(data),
  error: (err) => console.error(err),
  complete: () => console.log('merge completed'),
});
