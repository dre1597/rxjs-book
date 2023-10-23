import { combineLatest, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

const source1 = interval(100).pipe(
  map((val) => 'source1 ' + val),
  take(5),
);

const source2 = interval(50).pipe(
  map((val) => 'source2 ' + val),
  take(2),
);

const stream$ = combineLatest([source1, source2]);

stream$.subscribe((data) => console.log(data));
