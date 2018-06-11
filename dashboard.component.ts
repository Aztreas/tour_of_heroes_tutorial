import { Component, OnInit } from '@angular/core';
import { Enviroment } from '../enviroment';
import { ENVIROMENTS } from "../mock-enviroments";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  enviroments: Enviroment[] = ENVIROMENTS;

  rows: Enviroment[][];

  constructor() { }

  ngOnInit() {
  }

  
}
