import { Injectable } from '@angular/core';
import { TrainingserviceService } from '../../trainingservice.service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Training } from 'src/app/training.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainingResolver implements Resolve<Training | undefined> {

  constructor(private trainingService: TrainingserviceService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Training | undefined>  {

   const training = this.trainingService.getByIdLocal(route.paramMap.get('id'))

    return this.trainingService.getTrainingById(route.paramMap.get('id')).pipe(

      catchError(err => of(training))

    );
  }
}
