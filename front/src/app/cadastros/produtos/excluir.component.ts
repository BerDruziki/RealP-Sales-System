import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from 'src/app/cadastro.service';
import { Produto } from 'src/models/produto.model';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  produto : Produto = new Produto();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private cadastro: CadastroService) { 
      console.log("----------> O constructor() foi executado!");
    }

  ngOnInit(): void {
    console.log("----------> O ngOnInit() foi executado!");
    const str = this.route.snapshot.paramMap.get('id');
    this.cadastro.buscarPorId(Number(str)).subscribe( (produto) => {
      this.produto = produto;
    });
  }

  excluirProduto(){
    console.log("----------> O excluirProduto() foi executado!");
    this.cadastro.excluir(this.produto.id).subscribe(() => {
      this.router.navigate(['/cadastros/produtos']);
    });
  }

}
