import { TestBed, inject } from '@angular/core/testing';

import { DeeplearningMachineService } from './deeplearning-machine.service';

describe('DeeplearningMachineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeeplearningMachineService]
    });
  });

  it('should ...', inject([DeeplearningMachineService], (service: DeeplearningMachineService) => {
    expect(service).toBeTruthy();
  }));
});
