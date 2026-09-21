import { Component } from '@angular/core';

@Component({
  selector: 'app-exe13',
  standalone: false,
  templateUrl: './exe13.html',
  styleUrl: './exe13.scss',
})
export class Exe13 {
  tarefas = [
    { id: 1, titulo: 'Desenvolver a API', responsavel: 'Carlos', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Criar telas do Dashboard', responsavel: 'Ana', prioridade: 'alta', concluida: true },
    { id: 3, titulo: 'Configurar banco de dados', responsavel: 'Marcos', prioridade: 'media', concluida: false },
    { id: 4, titulo: 'Escrever documentação', responsavel: 'Beatriz', prioridade: 'baixa', concluida: true },
    { id: 5, titulo: 'Testar autenticação', responsavel: 'Carlos', prioridade: 'media', concluida: false },
    { id: 6, titulo: 'Corrigir bugs de estilo', responsavel: 'Ana', prioridade: 'baixa', concluida: false }
  ];

  alternarSituacao(tarefa: any): void {
    tarefa.concluida = !tarefa.concluida;
  }

  get totalTarefas(): number {
    return this.tarefas.length;
  }

  get concluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }

  get pendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }
}