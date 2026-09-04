import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe11 } from './exe11';

describe('Exe11', () => {
  let component: Exe11;
  let fixture: ComponentFixture<Exe11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe11],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
