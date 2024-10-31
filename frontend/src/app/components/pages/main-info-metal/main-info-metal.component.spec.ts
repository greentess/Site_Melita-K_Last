import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoMetalComponent } from './main-info-metal.component';

describe('MainInfoMetalComponent', () => {
  let component: MainInfoMetalComponent;
  let fixture: ComponentFixture<MainInfoMetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainInfoMetalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainInfoMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
