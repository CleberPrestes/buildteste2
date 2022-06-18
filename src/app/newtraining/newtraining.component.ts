import { AppModule } from './../app.module';
import { Training } from './../training.model';
import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import * as M from 'materialize-css'
import { TrainingserviceService } from '../trainingservice.service';

@Component({
  selector: 'app-newtraining',
  templateUrl: './newtraining.component.html',
  styleUrls: ['./newtraining.component.css']
})
export class NewtrainingComponent implements OnInit,  AfterViewInit{

  training: Training = new Training;



 // name = this.training.name;
 // day = this.training.day;
 // exercise = this.training.exercise;
 // serie = this.training.serie;
 // repetition = this.training.repetition;
 // weight = this.training.weight

  nameTraining: string ='treino teste saida'

  trainingList=[{}]

  saveStorage(name: string, day: string, exercise: string, serie: number, repetition: number, weight: number){

    this.training.name = name;
    this.training.day = day;
    this.training.exercise = exercise;
    this.training.serie = serie;
    this.training.repetition = repetition;
    this.training.weight =weight;

    this.saveListLocal()

    alert('Treino Salvo')
  }


  saveListLocal(){


    if( JSON.parse(localStorage.getItem('listaTreino')!)){
      this.trainingList = JSON.parse(localStorage.getItem('listaTreino')!);
      this.trainingList.push(this.training)
      let jsonKeyList = JSON.stringify(this.trainingList)
      localStorage['listaTreino'] =jsonKeyList;
     }

        let jsonKeyList = JSON.stringify(this.trainingList)
        localStorage['listaTreino'] =jsonKeyList;

  }


  onSubmit() {


  }

  onSelectChange(event: Event){
    this.training.day = (event.target as HTMLInputElement).value;

  }


  constructor(private trainingService: TrainingserviceService) {


   }
 ngAfterViewInit(): void {
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems, {});
  }

  // ngAfterViewInit() {
  //  var elems = document.querySelectorAll('select');
  //   M.FormSelect.init(elems, {});
  // }


  ngOnInit(): void {


  }

  addTraining(training: Training){

    this.trainingService.adddTraining(training).subscribe();
  }

}
