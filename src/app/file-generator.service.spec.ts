import { TestBed, inject } from '@angular/core/testing';

import { FileService } from './file-generator.service';

describe('FileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileService]
    });
  });

  it('should ...', inject([FileService], (service: FileService) => {
    expect(service).toBeTruthy();
  }));
});
