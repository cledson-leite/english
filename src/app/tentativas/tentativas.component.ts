import { Component, Input, OnChanges } from '@angular/core';
import { Coracao } from 'src/utils/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
  
export class TentativasComponent implements OnChanges {
  
  @Input() public tentativas: number = 3

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  ngOnChanges(): void {
    if (this.tentativas !== this.coracoes.length) {
      const indice: number = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].estaCheio = false
    }
  }
}
