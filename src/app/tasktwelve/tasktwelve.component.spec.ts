import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasktwelveComponent } from './tasktwelve.component';

describe('TasktwelveComponent', () => {
  let component: TasktwelveComponent;
  let fixture: ComponentFixture<TasktwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasktwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasktwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
