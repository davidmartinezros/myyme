import { TestBed, inject } from '@angular/core/testing';

import { CallingToInternetService } from './calling-to-internet.service';

describe('CallingToInternetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallingToInternetService]
    });
  });

  it('should ...', inject([CallingToInternetService], (service: CallingToInternetService) => {
    expect(service).toBeTruthy();
  }));
});
