import { from } from 'rxjs';

// observable

const stream$ = from([1, 2, 3]);

stream$.subscribe((value) => {
  console.log('Value', value);
});

// promise

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve([1, 2, 3]);
  });
});

promise.then((value) => {
  console.log('Value', value);
});
