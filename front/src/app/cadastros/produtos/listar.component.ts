import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/cadastro.service';
import { Produto } from 'src/models/produto.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private cadastro: CadastroService) { }

  ngOnInit(): void {
    this.cadastro.listarProdutos().subscribe( produtos => {
      //console.log(produtos);
      this.listaDeProdutos = produtos;
    });
  }

  listaDeProdutos : Produto[] = [];

  colunas: string[] = ['id', 'nome', 'descricao', 'acoes'];

}
