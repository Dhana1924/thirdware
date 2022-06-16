import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInprogressComponent } from './task-inprogress.component';

describe('TaskInprogressComponent', () => {
  let component: TaskInprogressComponent;
  let fixture: ComponentFixture<TaskInprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInprogressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
