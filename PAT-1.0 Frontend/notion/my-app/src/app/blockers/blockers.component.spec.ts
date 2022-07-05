import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockersComponent } from './blockers.component';

describe('BlockersComponent', () => {
  let component: BlockersComponent;
  let fixture: ComponentFixture<BlockersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
