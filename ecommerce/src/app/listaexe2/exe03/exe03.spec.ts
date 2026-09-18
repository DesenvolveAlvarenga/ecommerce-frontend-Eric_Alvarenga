import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe03 } from './exe03';

describe('Exe03', () => {
  let component: Exe03;
  let fixture: ComponentFixture<Exe03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe03],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
