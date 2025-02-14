import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleParentComponent } from './lifecycle-parent.component';

describe('LifecycleParentComponent', () => {
  let component: LifecycleParentComponent;
  let fixture: ComponentFixture<LifecycleParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
