import { ReplaySubject } from 'rxjs';

const replaySubject = new ReplaySubject(2);

replaySubject.next(0);
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.next(4);

// 3, 4
replaySubject.subscribe((value) => {
  console.log('replay subscription', value);
});
