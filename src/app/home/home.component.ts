import { Component, OnInit } from '@angular/core';
import { TraineeService } from '../service/trainee.service';
import { ITrainee } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeTrainee;
  academy = [
    {
      name: 'Godwin', image: 'ayoodobada.jpg', complexion: 'black', hobbies: ['Singing','Watching Football']
     },
    {
       name: 'Chioma', image: 'broher.jpg', complexion: 'black', hobbies: ['Researching', 'Imagination'] 
     },
     {
       name: 'Mary', image: 'chipeter.jpg', complexion: 'black', hobbies: ['Playing Games','Clubbing'] 
     },
     {
      name: 'Rose', image: 'rontol.jpg', complexion: 'yellow', hobbies: ['Reading','Eating']
      },
     {
      name: 'Merci', image: 'waytorontol.jpg', complexion: 'Fair', hobbies: ['Chess','Playing Basketball'] 
    }
   ]; 
  
  constructor(private traineeServ: TraineeService) { }
   trainees: ITrainee[] = [];
  ngOnInit() {
    this.trainees = this.traineeServ.getTrainees();
  }
  traineeListener(trainee) {
    console.log(trainee);
    this.activeTrainee=trainee;
  }


}
