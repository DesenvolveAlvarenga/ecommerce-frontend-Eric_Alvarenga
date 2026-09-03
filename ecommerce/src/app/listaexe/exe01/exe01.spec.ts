import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe01 } from './exe01';

describe('Exe01', () => {
  let component: Exe01;
  let fixture: ComponentFixture<Exe01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe01],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
