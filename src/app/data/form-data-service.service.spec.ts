import { TestBed, inject } from '@angular/core/testing';

import { FormDataServiceService } from './form-data-service.service';

describe('FormDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormDataServiceService]
    });
  });

  it('should be created', inject([FormDataServiceService], (service: FormDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
