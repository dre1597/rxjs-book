import { interval, timer } from 'rxjs';
import { buffer } from 'rxjs/operators';

const breakWhen$ = timer(1000);

const stream$ = interval(200).pipe(buffer(breakWhen$));

stream$.subscribe((data) => console.log('values', data));
