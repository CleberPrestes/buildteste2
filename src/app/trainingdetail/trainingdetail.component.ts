import { TrainingResolver } from './resolvers/training.resolver';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from '../training.model';
import { TrainingserviceService } from '../trainingservice.service';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trainingdetail',
  templateUrl: './trainingdetail.component.html',
  styleUrls: ['./trainingdetail.component.css']
})
export class TrainingdetailComponent implements OnInit {

  trainingListSave: Training[] = []
  trainingListDetails: Training[]=[]
  localTraining!: Training;

  treinoteste: Observable<Training> = this.route.data.pipe(
    map(data => data.TrainingResolver)
  )

  constructor(private route: ActivatedRoute, private trainingService: TrainingserviceService) {   }



  ngOnInit(): void {

    let idParam: any = this.route.snapshot.params.id
    let trainingListLocal = JSON.parse(localStorage.getItem('listaTreino')!) as Training[];
    trainingListLocal = trainingListLocal.filter((t) => {
      return t.id === idParam})
      this.localTraining = trainingListLocal[0]

  }



}
