import { TestBed, inject } from '@angular/core/testing';

import { EnviromentService } from './enviroment.service';

describe('EnviromentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnviromentService]
    });
  });

  it('should be created', inject([EnviromentService], (service: EnviromentService) => {
    expect(service).toBeTruthy();
  }));
});
