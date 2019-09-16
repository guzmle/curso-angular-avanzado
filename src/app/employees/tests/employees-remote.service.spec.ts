import { TestBed } from '@angular/core/testing';

import { EmployeesRemoteService } from '../services/employees-remote.service';

describe('EmployeesRemoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeesRemoteService = TestBed.get(EmployeesRemoteService);
    expect(service).toBeTruthy();
  });
});
