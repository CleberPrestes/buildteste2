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
  treinoteste: Observable<Training> = this.route.data.pipe(
    map(data => data.TrainingResolver)
  )
  
  constructor(private route: ActivatedRoute, private trainingService: TrainingserviceService) {   }



  ngOnInit(): void {

  }



}
