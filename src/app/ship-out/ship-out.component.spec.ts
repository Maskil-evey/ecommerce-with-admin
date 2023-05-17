import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipOutComponent } from './ship-out.component';

describe('ShipOutComponent', () => {
  let component: ShipOutComponent;
  let fixture: ComponentFixture<ShipOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
