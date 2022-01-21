import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  carName: string = '';
  carYear: string = '';

  @Output() takeCarInfo = new EventEmitter();

  ngOnInit(): void {
  }

  addCar() {
    this.takeCarInfo.emit({carName:this.carName, carYear: this.carYear});

    this.carName = '';
    this.carYear = '';
  }
}
