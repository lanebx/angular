import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit, OnChanges {
  cars: {carName: string, carYear: number}[] = [
    {carName: 'audi', carYear: 2015},
    {carName: 'reno', carYear: 2004},
    {carName: 'lada', carYear: 2016},
  ]

  ngOnInit(): void {
  }

  addCar(car: any) {
    this.cars.push(car);
  }

  changeName() {
    this.cars[0].carName = 'New name';
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes cars :", changes)
  }
}
