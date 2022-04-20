import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCardComponent } from './pcard.component';

describe('PCardComponent', () => {
  let component: PCardComponent;
  let fixture: ComponentFixture<PCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
