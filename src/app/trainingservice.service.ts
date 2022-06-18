import { Injectable } from '@angular/core';
import { Training } from './training.model';
import{ HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingserviceService {

  private apiUrl ='http://localhost:3000/trainings'

  trainingListSave: Training[] = JSON.parse(localStorage.getItem('listaTreino')!) as Training[];

  constructor(private http: HttpClient) { }

/*
  removeTraining(training: Training){
    console.log('removendo treino no service')
    this.trainingListSave.splice(this.trainingListSave.indexOf(training) , 1)
    let jsonKeyList = JSON.stringify(this.trainingListSave)
    localStorage['listaTreino'] =jsonKeyList;

  }
*/

  removeTraining(id: number){
    return this.http.delete<Training>(`${this.apiUrl}/${id}`);
  }


  getAll(): Observable<Training[]>{

   return this.http.get<Training[]>(this.apiUrl);
  }


  adddTraining(training: Training){
    return this.http.post<Training>(this.apiUrl, training);
  }


  getTraininigWithPromise(): Promise<Training[]> {
    return this.http.get<Training[]>(this.apiUrl).toPromise();
  }

  getTraininigWithObservable():Observable<Training[]>{
    return this.http.get<Training[]>(this.apiUrl)
  }



}
