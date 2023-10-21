import { interval, take } from 'rxjs';

const liveStreaming$ = interval(1000).pipe(take(5));

liveStreaming$.subscribe({
  next: () => console.log('subscriber from first minute'),
  error: (err) => console.log(err),
  complete: () => console.log('completed'),
});

setTimeout(() => {
  liveStreaming$.subscribe({
    next: () => console.log('subscriber from 2nd minute'),
    error: (err) => console.log(err),
    complete: () => console.log('completed'),
  });
}, 2000);
