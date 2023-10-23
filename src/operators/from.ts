import { from } from 'rxjs';

from([2, 3, 4, 5]).subscribe((value) => {
  console.log('Value', value);
});
