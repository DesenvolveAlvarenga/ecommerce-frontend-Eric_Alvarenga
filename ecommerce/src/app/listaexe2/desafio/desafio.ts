import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio',
  standalone: false,
  templateUrl: './desafio.html',
  styleUrl: './desafio.scss',
})
export class Desafio {
  mostrarConcluidos: boolean = true;

  projetos = [
    { id: 1, titulo: 'Sistema de E-commerce', equipe: 'Equipe Alpha', nota: 8.5, status: 'concluído', entregue: true },
    { id: 2, titulo: 'Aplicativo Mobile Fitness', equipe: 'Equipe Beta', nota: 6.5, status: 'desenvolvimento', entregue: false },
    { id: 3, titulo: 'Portal de Gestão Escolar', equipe: 'Equipe Gamma', nota: 5.0, status: 'planejamento', entregue: false },
    { id: 4, titulo: 'Dashboard Financeiro', equipe: 'Equipe Delta', nota: 9.2, status: 'testes', entregue: true },
    { id: 5, titulo: 'Chatbot de Atendimento', equipe: 'Equipe Omega', nota: null, status: 'planejamento', entregue: false }
  ];

  get projetosExibidos() {
    if (this.mostrarConcluidos) {
      return this.projetos;
    }
    return this.projetos.filter(p => p.status !== 'concluído');
  }

  get totalProjetos(): number {
    return this.projetos.length;
  }

  get totalConcluidos(): number {
    return this.projetos.filter(p => p.status === 'concluído').length;
  }

  alternarVisualizacaoConcluidos() {
    this.mostrarConcluidos = !this.mostrarConcluidos;
  }
}