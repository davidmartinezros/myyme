import { TestBed, inject } from '@angular/core/testing';

import { HowDoYouLearnService } from './how-do-you-learn.service';

describe('FileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HowDoYouLearnService]
    });
  });

  it('should ...', inject([HowDoYouLearnService], (service: HowDoYouLearnService) => {
    expect(service).toBeTruthy();
  }));
});
