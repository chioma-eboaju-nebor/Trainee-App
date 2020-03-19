import { Injectable } from '@angular/core';
import { ITrainee } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  trainees: ITrainee[];
  constructor(private httpclient: HttpClient) { }
  addTrainee(trainee: ITrainee):
  Observable<any>
  {
    return this.httpclient.post(environment.firebaseConfig.databaseURL + '/trainees.json', trainee)
  }
  // we get trainee info
  getTrainees(): Array<ITrainee> {
    return this.trainees;
  }
}
// 1. service help to share data  ( providedIn: 'root')
//  2. to abstract functionalities
