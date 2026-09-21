import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe12 } from './exe12';

describe('Exe12', () => {
  let component: Exe12;
  let fixture: ComponentFixture<Exe12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe12],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
