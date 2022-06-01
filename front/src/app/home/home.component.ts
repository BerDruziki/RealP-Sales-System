import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produtos';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaDeProdutos = Produtos;

  constructor(private cadastro: CadastroService) { }

  ngOnInit(): void {
    this.cadastro.listarProdutos().subscribe( produtos => {
      console.log(produtos);
    });
  }

}
