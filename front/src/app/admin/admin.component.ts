import { Component, OnInit } from '@angular/core';

const LIST = [
  {
    id: 1,
    nome: "João"
  },
  {
    id: 2,
    nome: "Maria"
  }
]

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  pessoas = LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
