import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service'

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent implements OnInit {

  constructor(private vehiculosService: VehiculosService) { }


  listaVehiculos:Vehiculo[]= [];
  listaMarcas: String[]= [];
  listaInstances: Number[]= [];

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe((response:Vehiculo[]) =>{
      this.listaVehiculos = response;
      this.listaVehiculos.forEach((vehiculo:Vehiculo) => {
        let found =this.listaMarcas.find((element:String) => element == vehiculo.marca)
        if(found){

        }else{
          this.listaMarcas.push(vehiculo.marca);
          this.listaInstances.push(this.getTotalMarca(vehiculo.marca));
        }
      })
    })
  }

  getTotalMarca(marca:String){
    let listaApariciones = this.listaVehiculos.filter((vehicleToFind:Vehiculo) => vehicleToFind.marca == marca)
    return listaApariciones.length
  }

}
