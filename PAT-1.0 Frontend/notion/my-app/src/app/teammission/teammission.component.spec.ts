import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammissionComponent } from './teammission.component';

describe('TeammissionComponent', () => {
  let component: TeammissionComponent;
  let fixture: ComponentFixture<TeammissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeammissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
