import { map } from 'rxjs/operators';
import { from } from 'rxjs';

const person$ = from(
  fetch('https://swapi.dev/api/films/1/').then((res) => res.json()),
).pipe(
  map((e: { url: string; title: string }) => {
    return {
      url: e.url,
      response: e.title,
    };
  }),
);

person$.subscribe((res) => {
  console.log(res);
});
