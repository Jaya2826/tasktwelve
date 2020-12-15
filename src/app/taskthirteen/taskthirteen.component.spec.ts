import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskthirteenComponent } from './taskthirteen.component';

describe('TaskthirteenComponent', () => {
  let component: TaskthirteenComponent;
  let fixture: ComponentFixture<TaskthirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskthirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskthirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
