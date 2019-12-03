import { TestBed } from '@angular/core/testing';

import { EmployeService } from './Employee.Service';

describe('EmployesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeService = TestBed.get(EmployeService);
    expect(service).toBeTruthy();
  });
});
