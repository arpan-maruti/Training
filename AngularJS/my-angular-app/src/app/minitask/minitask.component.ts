import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-minitask',
  templateUrl: './minitask.component.html',
  styleUrls: ['./minitask.component.css'],
})
export class MinitaskComponent {
  elapsedTime: number = 0;
  showDate: any;
  private timerInterval: any;
  private timerStarted: boolean = false;

  ngOnInit() {
    try {
      console.log('ngOnInit');
      const storedTime = localStorage.getItem('Time4');
      if (storedTime) {
        this.elapsedTime = parseInt(storedTime, 10);
      } else {
        this.elapsedTime = Date.now();
        localStorage.setItem('Time4', this.elapsedTime.toString());
      }
      this.showDate = new Date(this.elapsedTime).toLocaleTimeString();

      if (!this.timerStarted) {
        this.startTimer();
        this.timerStarted = true;
      }

    } catch (e) {
      console.warn('LocalStorage operation failed:', e);
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    clearInterval(this.timerInterval);
    this.saveElapsedTime();
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: BeforeUnloadEvent) {
    console.log('unload');
    this.saveElapsedTime();
    clearInterval(this.timerInterval);
  }

  private startTimer() {
    this.timerInterval = setInterval(() => {
      this.elapsedTime += 1000;
      this.showDate = new Date(this.elapsedTime).toLocaleTimeString();
    }, 1000);
  }

  private saveElapsedTime() {
    try {
      localStorage.setItem('Time4', this.elapsedTime.toString());
    } catch (e) {
      console.warn('Failed to save elapsed time:', e);
    }
  }
}
