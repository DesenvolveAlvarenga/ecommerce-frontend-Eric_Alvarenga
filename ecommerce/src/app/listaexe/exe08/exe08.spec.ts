import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe08 } from './exe08';

describe('Exe08', () => {
  let component: Exe08;
  let fixture: ComponentFixture<Exe08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe08],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe08);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
