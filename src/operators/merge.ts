import { delay, merge, of } from 'rxjs';

const merged$ = merge(
  of('source 1: ' + 1).pipe(delay(500)),
  of('source 2: ' + 3, 'source 2: ' + 2, 'source 2: ' + 5),
);

merged$.subscribe({
  next: (data) => console.log(data),
});
