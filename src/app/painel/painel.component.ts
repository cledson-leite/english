import { Component, EventEmitter, Output } from '@angular/core';
import { FRASES } from 'src/utils/frases-mock';
import { Frases } from 'src/utils/frases.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  public frases: Frases[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public fraseDaRodada: Frases = [] as unknown as Frases

  public progresso: number = 0

  public tentativas: number = 3
  
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaFrase()
  };

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }
  public atualizaFrase(): void {
    this.fraseDaRodada = this.frases[this.rodada]
    this.resposta = ""
  }
  
  public verificarResposta(): void {
    const fraseCorreta: boolean =
      this.fraseDaRodada.frasePtBr.toLowerCase() === this.resposta.toLowerCase()
    if (fraseCorreta) {
      
      this.progresso += 100 / this.frases.length
      this.rodada++

      if (this.rodada === this.frases.length) {
        this.encerrarJogo.emit('vitoria')
      }

      this.atualizaFrase()
      
    } else {
     
      this.tentativas--
      if (this.tentativas < 0) {
        this.encerrarJogo.emit('derrota')
      }
    }

  }

}
