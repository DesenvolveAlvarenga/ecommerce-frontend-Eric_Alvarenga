import { Component } from '@angular/core';

@Component({
  selector: 'app-exe12',
  standalone: false,
  templateUrl: './exe12.html',
  styleUrl: './exe12.scss',
})
export class Exe12 {
  novoNome: string = '';
  novaQuantidade: number | null = null;
  
  mensagemErro: string = '';

  produtos = [
    { id: 1, nome: 'Notebook Gamer', preco: 4500.00, quantidade: 5 },
    { id: 2, nome: 'Mouse Sem Fio', preco: 120.50, quantidade: 12 }
  ];

  cadastrarProduto(): void {
    if (!this.novoNome || this.novoNome.trim() === '') {
      this.mensagemErro = 'Erro: O nome do produto deve ser preenchido.';
      return;
    }

    if (this.novaQuantidade === null || this.novaQuantidade < 0) {
      this.mensagemErro = 'Erro: A quantidade deve ser igual ou maior que zero.';
      return;
    }

    this.mensagemErro = '';

    const novoId = this.produtos.length > 0 ? Math.max(...this.produtos.map(p => p.id)) + 1 : 1;

    this.produtos.push({
      id: novoId,
      nome: this.novoNome.trim(),
      preco: 0.00,
      quantidade: Number(this.novaQuantidade)
    });

    this.limparCampos();
  }

  limparCampos(): void {
    this.novoNome = '';
    this.novaQuantidade = null;
  }

  excluirProduto(index: number): void {
    this.produtos.splice(index, 1);
  }
}