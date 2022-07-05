import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamobjectivesComponent } from './teamobjectives.component';

describe('TeamobjectivesComponent', () => {
  let component: TeamobjectivesComponent;
  let fixture: ComponentFixture<TeamobjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamobjectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamobjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
