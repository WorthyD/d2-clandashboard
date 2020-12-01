import {
  trigger,
  sequence,
  state,
  stagger,
  animate,
  transition,
  style,
  query,
  animateChild
} from '@angular/animations';

export const rowsAnimation = trigger('rowsAnimation', [
  transition('void => *', [
    style({ opacity: '0', transform: 'translateY(-5%)' }),
    animate('0.2s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
  ])
]);
