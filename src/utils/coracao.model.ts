export class Coracao {
  constructor(
    public estaCheio: boolean,
    public urlCheio: string = '/assets/coracao_cheio.png',
    public urlVazio: string = '/assets/coracao_vazio.png',
  ) { };
  
  public exibeCoracao(): string{
    return this.estaCheio ? this.urlCheio : this.urlVazio
  }
}