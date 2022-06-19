import { Injectable } from '@angular/core';
import { TrainingserviceService } from '../../trainingservice.service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Training } from 'src/app/training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingResolver implements Resolve<Training> {

  constructor(private trainingService: TrainingserviceService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Training> {
    return this.trainingService.getTrainingById(route.paramMap.get('id'));
  }
}
