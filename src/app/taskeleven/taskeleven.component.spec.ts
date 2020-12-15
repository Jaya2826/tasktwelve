import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskelevenComponent } from './taskeleven.component';

describe('TaskelevenComponent', () => {
  let component: TaskelevenComponent;
  let fixture: ComponentFixture<TaskelevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskelevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskelevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
