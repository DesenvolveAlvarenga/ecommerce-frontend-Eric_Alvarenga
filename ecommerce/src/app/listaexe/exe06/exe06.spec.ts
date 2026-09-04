import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe06 } from './exe06';

describe('Exe06', () => {
  let component: Exe06;
  let fixture: ComponentFixture<Exe06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe06],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe06);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
