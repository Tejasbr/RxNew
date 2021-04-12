import { TestBed } from '@angular/core/testing';

import { FileUplDowlService } from './file-upl-dowl.service';

describe('FileUplDowlService', () => {
  let service: FileUplDowlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUplDowlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
