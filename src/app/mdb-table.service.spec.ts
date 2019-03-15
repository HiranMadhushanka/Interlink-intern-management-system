import { TestBed, inject } from '@angular/core/testing';

import { MdbTableService } from './mdb-table.service';

describe('MdbTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdbTableService]
    });
  });

  it('should be created', inject([MdbTableService], (service: MdbTableService) => {
    expect(service).toBeTruthy();
  }));
});
