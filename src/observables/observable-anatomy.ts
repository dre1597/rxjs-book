import { Observable } from 'rxjs';

const stream$ = new Observable((observer) => {
  let i = 0;
  const id = setInterval(() => {
    observer.next(i++);
  }, 500);

  return function () {
    clearInterval(id);
  };
});

const subscription = stream$.subscribe((value) => {
  console.log('Value', value);
});

setTimeout(() => {
  subscription.unsubscribe(); // here we invoke the cleanup function
}, 3000);
