import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // name = 'Chioma Jesus';
  //  tvShow = '24 Jack Bauer';
   academy = [
    {
      name: 'Tosin', image: 'ayoodobada.jpg', complexion: 'black', hobbies: ['Singing','Watching Football']
     },
    {
       name: 'Chioma', image: 'broher.jpg', complexion: 'black', hobbies: ['Researching', 'Imagination'] 
     },
     {
       name: 'Zino', image: 'chipeter.jpg', complexion: 'black', hobbies: ['Playing Games','Clubbing'] 
     },
     {
      name: 'Sarah', image: 'rontol.jpg', complexion: 'yellow', hobbies: ['Reading','Eating']
      },
     {
      name: 'Charles', image: 'waytorontol.jpg', complexion: 'black', hobbies: ['Swimming','Playing Basketball'] 
    }
   ]; 
  traineeListener(trainee) {
    console.log(trainee);
    
  }
}
