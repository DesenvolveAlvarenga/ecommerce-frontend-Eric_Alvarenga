import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe05 } from './exe05';

describe('Exe05', () => {
  let component: Exe05;
  let fixture: ComponentFixture<Exe05>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe05],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe05);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
