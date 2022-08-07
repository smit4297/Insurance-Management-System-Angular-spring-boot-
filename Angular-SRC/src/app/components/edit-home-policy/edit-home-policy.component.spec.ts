import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHomePolicyComponent } from './edit-home-policy.component';

describe('EditHomePolicyComponent', () => {
  let component: EditHomePolicyComponent;
  let fixture: ComponentFixture<EditHomePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHomePolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHomePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
