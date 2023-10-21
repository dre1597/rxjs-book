import { Observable } from 'rxjs';

class Producer {
  i: number;

  constructor() {
    this.i = 0;
  }

  nextValue() {
    return this.i++;
  }
}

const stream$ = new Observable((observer) => {
  const producer = new Producer();
  observer.next(producer.nextValue());
  observer.next(producer.nextValue());
});

stream$.subscribe({
  next(value) {
    console.log('Value', value);
  },
});
