import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitaskComponent } from './minitask.component';

describe('MinitaskComponent', () => {
  let component: MinitaskComponent;
  let fixture: ComponentFixture<MinitaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinitaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinitaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
