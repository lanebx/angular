import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() carItem!: { carName: string, carYear: number };

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changes car:", changes)
  }
}
