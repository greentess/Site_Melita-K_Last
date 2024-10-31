import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMetalComponent } from './company-metal.component';

describe('CompanyMetalComponent', () => {
  let component: CompanyMetalComponent;
  let fixture: ComponentFixture<CompanyMetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyMetalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
