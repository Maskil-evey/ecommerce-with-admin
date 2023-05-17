import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyItemsComponent } from './dairy-items.component';

describe('DairyItemsComponent', () => {
  let component: DairyItemsComponent;
  let fixture: ComponentFixture<DairyItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DairyItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
