import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksixComponent } from './tasksix.component';

describe('TasksixComponent', () => {
  let component: TasksixComponent;
  let fixture: ComponentFixture<TasksixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
