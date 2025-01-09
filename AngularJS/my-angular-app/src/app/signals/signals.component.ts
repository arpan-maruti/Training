import { Component, computed, signal, effect, untracked } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
    count = signal(0);
    colours = signal(['red', 'green', 'blue']);
    compSignal = signal({id:1, name:"Arpan"})
    l = signal(5);
    w = signal(10);
    area = computed(() => this.l() * this.w());
    constructor(){
      effect(()=>{
        console.log(`Count: ${this.count()}, Colours:${untracked(this.colours)}`);
      });
    }
    ngOnInit() {
      console.log(this.count());
    }
    increase()
    {
      this.count.set(this.count() + 1);
      this.colours.update(value => [...value, 'yellow']);
      console.log(`${this.colours()}`);
    }

    updateSignalByKey(key: string, value: unknown): void {
      this.compSignal.update((current) => ({
        ...current,
        [key]: value 
      }));
    }
}
