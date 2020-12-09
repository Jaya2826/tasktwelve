import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskeightComponent } from './taskeight.component';

describe('TaskeightComponent', () => {
  let component: TaskeightComponent;
  let fixture: ComponentFixture<TaskeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
