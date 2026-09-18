import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe04 } from './exe04';

describe('Exe04', () => {
  let component: Exe04;
  let fixture: ComponentFixture<Exe04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe04],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe04);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
