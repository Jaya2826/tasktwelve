import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskfourteenComponent } from './taskfourteen.component';

describe('TaskfourteenComponent', () => {
  let component: TaskfourteenComponent;
  let fixture: ComponentFixture<TaskfourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskfourteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskfourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
