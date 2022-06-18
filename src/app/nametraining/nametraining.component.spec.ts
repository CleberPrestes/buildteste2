import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NametrainingComponent } from './nametraining.component';

describe('NametrainingComponent', () => {
  let component: NametrainingComponent;
  let fixture: ComponentFixture<NametrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NametrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NametrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
