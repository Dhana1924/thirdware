import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistHomeComponent } from './tasklist-home.component';

describe('TasklistHomeComponent', () => {
  let component: TasklistHomeComponent;
  let fixture: ComponentFixture<TasklistHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasklistHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
