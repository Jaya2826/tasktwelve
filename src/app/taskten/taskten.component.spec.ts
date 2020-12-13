import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasktenComponent } from './taskten.component';

describe('TasktenComponent', () => {
  let component: TasktenComponent;
  let fixture: ComponentFixture<TasktenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasktenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasktenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
