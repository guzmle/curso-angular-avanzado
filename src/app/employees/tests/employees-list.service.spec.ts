import { TestBed } from '@angular/core/testing';

import { EmployeesListService } from '../views/employees-list/employees-list.service';

describe('EmployeesListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeesListService = TestBed.get(EmployeesListService);
    expect(service).toBeTruthy();
  });
});
