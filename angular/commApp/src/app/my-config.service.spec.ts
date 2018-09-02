import { TestBed, inject } from '@angular/core/testing';

import { MyConfigService } from './my-config.service';

describe('MyConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyConfigService]
    });
  });

  it('should be created', inject([MyConfigService], (service: MyConfigService) => {
    expect(service).toBeTruthy();
  }));
});
