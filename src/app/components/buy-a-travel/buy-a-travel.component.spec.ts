import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyATravelComponent } from './buy-a-travel.component';

describe('BuyATravelComponent', () => {
  let component: BuyATravelComponent;
  let fixture: ComponentFixture<BuyATravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyATravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyATravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
