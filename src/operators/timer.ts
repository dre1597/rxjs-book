import { take, timer } from 'rxjs';

const moreThanOne$ = timer(2000, 500).pipe(take(3));

moreThanOne$.subscribe((data) => console.log('timer with args', data));
