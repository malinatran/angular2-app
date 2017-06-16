import { Output, EventEmitter, Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
  <input 
    #myInput 
    type="text" 
    [(ngModel)]="message" 
    [ngClass]="{mousedown: isMouseDown}"
    (mousedown)="isMouseDown = true"
    (mouseup)="isMouseUp = false"
    (mouseleave)="isMouseDown = false">
  <button class="white bg-black code-font" (click)="updateText({text: message})">Click me!</button>
  `,
  styles: [`
  .mousedown {
    border: 2px solid green;
  }
  :host { 
    display: flex; 
    flex-direction: column; 
  }
  input:focus {
    font-weight: bold;
    outline: none;
  }
  button {
    border: none;
  }
  `]
})
export class SimpleFormComponent implements OnInit {

  isMouseDown;

  @Input() message;

  @Output() update = new EventEmitter();

  updateText(message) {
    this.update.emit(message);
  }

  constructor() { 
    // setInterval(() => this.message = Math.random().toString(), 1000);
  }

  ngOnInit() {
  }
}