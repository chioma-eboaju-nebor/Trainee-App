import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.scss']
})
export class TraineeComponent implements OnInit {
  @Input() trainees;
  @Output() selectedTrainee: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  traineeSelected(Item: any) {
    this.selectedTrainee.emit(Item);
  }
}
