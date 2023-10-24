import { of, onErrorResumeNext, throwError } from 'rxjs';

const badStream$ = throwError('crash');
const secondBadStream$ = throwError('bam');
const goodStream$ = of(1, 2, 3);

const emitSurviving = onErrorResumeNext(
  badStream$,
  secondBadStream$,
  goodStream$,
);

emitSurviving.subscribe({
  next: (data) => console.log(data),
  error: (err) => console.error(err),
  complete: () => console.log('Survival of the fittest, completed'),
});
