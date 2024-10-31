import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoAviaComponent } from './main-info-avia.component';

describe('MainInfoAviaComponent', () => {
  let component: MainInfoAviaComponent;
  let fixture: ComponentFixture<MainInfoAviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainInfoAviaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInfoAviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
