import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamhomeComponent } from './teamhome.component';

describe('TeamhomeComponent', () => {
  let component: TeamhomeComponent;
  let fixture: ComponentFixture<TeamhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
