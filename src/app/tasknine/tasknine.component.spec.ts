import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasknineComponent } from './tasknine.component';

describe('TasknineComponent', () => {
  let component: TasknineComponent;
  let fixture: ComponentFixture<TasknineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasknineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasknineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
