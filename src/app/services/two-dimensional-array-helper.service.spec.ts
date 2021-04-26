import { TestBed } from '@angular/core/testing';

import { TwoDimensionalArrayHelperService } from './two-dimensional-array-helper.service';

describe('TwoDimensionalArrayHelperService', () => {
  let service: TwoDimensionalArrayHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwoDimensionalArrayHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
