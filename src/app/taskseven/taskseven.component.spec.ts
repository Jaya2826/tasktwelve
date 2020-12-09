import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksevenComponent } from './taskseven.component';

describe('TasksevenComponent', () => {
  let component: TasksevenComponent;
  let fixture: ComponentFixture<TasksevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
