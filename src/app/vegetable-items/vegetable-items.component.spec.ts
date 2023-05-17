import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableItemsComponent } from './vegetable-items.component';

describe('VegetableItemsComponent', () => {
  let component: VegetableItemsComponent;
  let fixture: ComponentFixture<VegetableItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetableItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegetableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
