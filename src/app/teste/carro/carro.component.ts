import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  car = {} as Car;
  cars: Car[] = [];

  // Ordenação
  key: string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  // Define se um carro será criado ou atualizado
  saveCar(form: NgForm) {
    if (this.car.id !== undefined) {
      this.carService.updateCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.carService.saveCar(this.car).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obter todos os carros
  getCars() {
    this.carService.getCars().subscribe((cars: Car[]) => {
      this.cars = cars;
    });
  }

  // Deleta um carro
  deleteCar(car: Car) {
    this.carService.deleteCar(car).subscribe(() => {
      this.getCars();
    });
  }

  // Copia o carro para ser editado
  editCar(car: Car) {
    this.car = { ...car };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCars();
    form.resetForm();
    this.car = {} as Car;
  }

}
