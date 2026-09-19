import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe09 } from './exe09';

describe('Exe09', () => {
  let component: Exe09;
  let fixture: ComponentFixture<Exe09>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe09],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe09);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
