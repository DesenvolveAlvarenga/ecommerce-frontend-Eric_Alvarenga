import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe10 } from './exe10';

describe('Exe10', () => {
  let component: Exe10;
  let fixture: ComponentFixture<Exe10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe10],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
