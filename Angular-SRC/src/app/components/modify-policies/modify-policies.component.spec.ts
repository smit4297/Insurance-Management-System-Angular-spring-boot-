import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPoliciesComponent } from './modify-policies.component';

describe('ModifyPoliciesComponent', () => {
  let component: ModifyPoliciesComponent;
  let fixture: ComponentFixture<ModifyPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
