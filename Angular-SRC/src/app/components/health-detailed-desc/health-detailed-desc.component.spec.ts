import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDetailedDescComponent } from './health-detailed-desc.component';

describe('HealthDetailedDescComponent', () => {
  let component: HealthDetailedDescComponent;
  let fixture: ComponentFixture<HealthDetailedDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthDetailedDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthDetailedDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
