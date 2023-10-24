import { interval, take } from 'rxjs';

interval(1000)
  .pipe(take(3))
  .subscribe({
    next: (data) => console.log(data),
  });
