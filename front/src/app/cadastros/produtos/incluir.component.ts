import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/cadastro.service';
import { Produto } from 'src/models/produto.model';


@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {


  produto : Produto = new Produto();

  constructor(private router: Router,
    private cadastro: CadastroService) { 
      console.log("----------> O constructor() foi executado!");
    }

  ngOnInit(): void {
    console.log("----------> O ngOnInit() foi executado!");
  }

  salvarProduto(){
    console.log("----------> O salvarProduto() foi executado!");
    this.cadastro.incluir(this.produto).subscribe(() => {
      this.router.navigate(['/cadastros/produtos']);
    });
  }

}
