import { firstValueFrom, of } from 'rxjs';

// const promise = of(1, 2).toPromise(); // old way

const promise = firstValueFrom(of(1, 2)); // new way
promise.then((data) => console.log('Promise', data));
