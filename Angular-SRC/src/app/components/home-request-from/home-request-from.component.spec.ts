import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRequestFromComponent } from './home-request-from.component';

describe('HomeRequestFromComponent', () => {
  let component: HomeRequestFromComponent;
  let fixture: ComponentFixture<HomeRequestFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRequestFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRequestFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
