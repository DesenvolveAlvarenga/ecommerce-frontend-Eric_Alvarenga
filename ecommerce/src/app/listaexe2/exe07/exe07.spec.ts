import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe07 } from './exe07';

describe('Exe07', () => {
  let component: Exe07;
  let fixture: ComponentFixture<Exe07>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe07],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe07);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
