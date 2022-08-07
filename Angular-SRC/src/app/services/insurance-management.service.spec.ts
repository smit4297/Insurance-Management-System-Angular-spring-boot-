import { TestBed } from '@angular/core/testing';

import { InsuranceManagementService } from './insurance-management.service';

describe('InsuranceManagementService', () => {
  let service: InsuranceManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
