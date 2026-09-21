import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe14 } from './exe14';

describe('Exe14', () => {
  let component: Exe14;
  let fixture: ComponentFixture<Exe14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe14],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
