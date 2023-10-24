import { BehaviorSubject } from 'rxjs';

const behaviorSubject = new BehaviorSubject(42);

behaviorSubject.subscribe((value) => console.log('behaviour subject', value));
console.log('Behaviour current value', behaviorSubject.getValue());
behaviorSubject.next(1);
console.log('Behaviour current value', behaviorSubject.getValue());
behaviorSubject.next(2);
console.log('Behaviour current value', behaviorSubject.getValue());
behaviorSubject.next(3);
console.log('Behaviour current value', behaviorSubject.getValue());

// emits 42
// current value 42
// emits 1
// current value 1
// emits 2
// current value 2
// emits 3
// current value 3
