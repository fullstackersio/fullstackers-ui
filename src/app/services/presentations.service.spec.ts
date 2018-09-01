import { TestBed, inject } from '@angular/core/testing';

import { PresentationsService } from './presentations.service';

describe('PresentationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresentationsService]
    });
  });

  it('should be created', inject([PresentationsService], (service: PresentationsService) => {
    expect(service).toBeTruthy();
  }));
});
