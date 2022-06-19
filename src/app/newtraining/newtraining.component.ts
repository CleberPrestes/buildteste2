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


  jsonOrigin: boolean = true
  localOrigin: boolean= false

  trainingList=[{}]

  saveStorage(id: any, name: string, day: string, exercise: string, serie: number, repetition: number, weight: number){

    this.training.id = id;
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


  onSubmit() { }

  onSelectChange(event: Event){
    this.training.day = (event.target as HTMLInputElement).value;

  }


  constructor(private trainingService: TrainingserviceService) { }
 ngAfterViewInit(): void {
  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems, {});
  }


  ngOnInit(): void {


    this.trainingService
    .getTraininigWithPromise()
    .then()
    .catch((e) => {
      //erro ao pegar do json-server
      this.jsonOrigin= false
      this.localOrigin= true

    });




  }

  addTraining(training: Training){
    this.trainingService.addTraining(training).subscribe();
  }

}
