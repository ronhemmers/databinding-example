import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  // property.. read from outside this component
  @Output() intervalFired = new EventEmitter<number>();

  // property
  interval: ReturnType<typeof setInterval>;

  // property
  lastNumber: number = 0;

  onStartGame(): void {
    // start the interval emitter that is read by the app-component
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame(): void {
    // turn off the interval emitter
    clearInterval(this.interval);
  }
}
