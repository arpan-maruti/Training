import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-minitask',
  templateUrl: './minitask.component.html',
  styleUrls: ['./minitask.component.css'],
})
export class MinitaskComponent {
  elapsedTime = signal(0);
  showDate = signal('');
  private timerInterval: ReturnType<typeof setInterval> | null = null;
  private timerStarted: boolean = false; 
  yearDate = signal(0);
  monthDate = signal(0);
  dateDate = signal(0);
  hourTime = signal(0);
  minuteTime = signal(0);
  secondTime = signal(0);

  ngOnInit() {
    try {
      console.log('ngOnInit');
      const storedTime = localStorage.getItem('Time8');
      if (storedTime) {
        const storedDate = new Date(storedTime);
        this.elapsedTime.set(storedDate.getTime());
        this.setDateComponents(storedDate);
      } else {
        const currentTime = Date.now();
        this.elapsedTime.set(currentTime);
        this.setDateComponents(new Date(currentTime));
        this.saveElapsedTime(); 
      }
      this.updateDisplayedTime();

      if (!this.timerStarted) {
        this.startTimer();
        this.timerStarted = true;
      }
    } catch (e) {
      console.warn('LocalStorage operation failed:', e);
    }
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  } 

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  } 

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.stopTimer();
    this.saveElapsedTime();
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: BeforeUnloadEvent) {
    console.log('unload');
    this.saveElapsedTime();
    this.stopTimer();
  }

  private startTimer() {
    this.timerInterval = setInterval(() => {
      this.elapsedTime.set(this.elapsedTime() + 1000);
      this.updateDisplayedTime();
      this.setDateComponents(new Date(this.elapsedTime()));
    }, 1000);
  }

  private stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  private updateDisplayedTime() {
    const currentDate = new Date(this.elapsedTime());
    this.showDate.set(
      `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ` +
      `${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`
    );
  }

  private saveElapsedTime() {
    try {
      const currentDate = new Date(this.elapsedTime());
      const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ` +
                `${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`;
      localStorage.setItem('Time8', formattedDate);
    } catch (e) {
      console.warn('Failed to save elapsed time:', e);
    }
  }

  private setDateComponents(date: Date) {
    this.yearDate.set(date.getFullYear());
    this.monthDate.set(date.getMonth() + 1); 
    this.dateDate.set(date.getDate());
    this.hourTime.set(date.getHours());
    this.minuteTime.set(date.getMinutes());
    this.secondTime.set(date.getSeconds());
  }

 
}