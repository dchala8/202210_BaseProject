import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListarVehiculosComponent } from './listar-vehiculos.component';
import { Vehiculo } from '../vehiculo'
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import faker from '@faker-js/faker';

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
      ],
      declarations: [ ListarVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;


    let vehicles:Vehiculo[] = [];

    let vehiculo1 =  new Vehiculo(faker.datatype.number(),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100));

    let vehiculo2 =  new Vehiculo(faker.datatype.number(),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100));

    let vehiculo3 =  new Vehiculo(faker.datatype.number(),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100),
                                  faker.random.words(100));



    component.listaVehiculos.push(vehiculo1);
    component.listaVehiculos.push(vehiculo2);
    component.listaVehiculos.push(vehiculo3);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create 4 td elements for each vehicle ', () => {
    expect(debug.queryAll(By.css('td')).length).toEqual(12);
  });

  it('should create 4 th elements', () => {
    expect(debug.queryAll(By.css('th')).length).toEqual(4);
  });
});
