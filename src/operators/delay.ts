import { interval } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const start = new Date();
const stream$ = interval(500).pipe(take(3));

stream$.pipe(delay(300)).subscribe((x) => {
  console.log('val', x);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  console.log(new Date() - start);
});
