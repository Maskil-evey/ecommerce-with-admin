import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitItemsComponent } from './fruit-items.component';

describe('FruitItemsComponent', () => {
  let component: FruitItemsComponent;
  let fixture: ComponentFixture<FruitItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
