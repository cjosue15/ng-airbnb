import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWorldComponent } from './live-world.component';

describe('LiveWorldComponent', () => {
  let component: LiveWorldComponent;
  let fixture: ComponentFixture<LiveWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
