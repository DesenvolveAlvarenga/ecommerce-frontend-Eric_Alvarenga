import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe02 } from './exe02';

describe('Exe02', () => {
  let component: Exe02;
  let fixture: ComponentFixture<Exe02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe02],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
