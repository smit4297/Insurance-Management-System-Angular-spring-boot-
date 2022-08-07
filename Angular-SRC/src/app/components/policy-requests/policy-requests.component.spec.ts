import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyRequestsComponent } from './policy-requests.component';

describe('PolicyRequestsComponent', () => {
  let component: PolicyRequestsComponent;
  let fixture: ComponentFixture<PolicyRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
