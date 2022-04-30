import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';import { VehiculosService } from './vehiculos.service';

describe('VehiculosService', () => {
  let service: VehiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[
      HttpClientTestingModule
    ]});
    service = TestBed.inject(VehiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
