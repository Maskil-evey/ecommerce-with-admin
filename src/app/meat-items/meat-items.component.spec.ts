import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatItemsComponent } from './meat-items.component';

describe('MeatItemsComponent', () => {
  let component: MeatItemsComponent;
  let fixture: ComponentFixture<MeatItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeatItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeatItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
