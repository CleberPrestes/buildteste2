//import { Component, OnInit } from '@angular/core';

import { AfterViewInit, Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css']
})
export class LandpageComponent implements OnInit {


  // Uso do ngif
  showButtons = false;

  showButton(){
    this.showButtons = true;
  }

  hideButton(){
    this.showButtons = false;
  }


  constructor() { }

  ngOnInit(): void {


  }

}
