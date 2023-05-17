import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiceItemsComponent } from './spice-items.component';

describe('SpiceItemsComponent', () => {
  let component: SpiceItemsComponent;
  let fixture: ComponentFixture<SpiceItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiceItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
