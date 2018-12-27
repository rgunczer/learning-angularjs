import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

const button: HTMLElement = document.querySelector('button');

// button.addEventListener('click', (event: MouseEvent) => {
//   console.log('button click event: ', event);
// });


fromEvent(button, 'click')
  .pipe(
    throttleTime(1000),
    map((input: MouseEvent) => {
      return input.clientY;
    })
  )
  .subscribe((coordinate: number) => {
    console.log('mouse event coordinate: ', coordinate);
  });