import { Observable } from 'rxjs';

const stream = new Observable((observer) => {
  const request = new XMLHttpRequest();

  request.open('GET', 'url');
  request.onload = () => {
    if (request.status === 200) {
      observer.next(request.response);
      observer.complete();
    } else {
      observer.error('error happened');
    }
  };

  request.onerror = () => {
    observer.error('error happened');
  };

  request.send();
});

stream.subscribe((data) => console.log(data));
