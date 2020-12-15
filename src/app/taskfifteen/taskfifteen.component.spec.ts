import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskfifteenComponent } from './taskfifteen.component';

describe('TaskfifteenComponent', () => {
  let component: TaskfifteenComponent;
  let fixture: ComponentFixture<TaskfifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskfifteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskfifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
