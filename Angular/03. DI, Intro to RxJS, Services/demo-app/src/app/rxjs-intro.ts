import { interval, map } from "rxjs";
// function interval(intervalValue: number) {
//   return new Observable<number>((observer) => {
//     // observer.next(1000);
//     // observer.next(2000);
//     // observer.next(3000);


//     let counter = 0;
//     const timer = setInterval(() => {
//       observer.next(counter++);
//     }, intervalValue);

//     //this code is invoked on destroy
//     return () => {
//       clearInterval(timer);
//     };
//   });
// }

// const stream$ = interval(3000).subscribe((data) => {
//   console.log('data from server', data);
// });

//interval from RxJS
const stream$ = interval(3000).pipe(map((x) => x * 2));

setTimeout(() => {
  stream$.subscribe({
    next: (x) => console.log('data', x),
    error: (err) => console.error(`Error occured: ${err}`),
    complete: () => console.log(`Stream has been completed!`),
  });
}, 3000);