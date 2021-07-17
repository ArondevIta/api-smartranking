import { Document } from 'mongoose';
import { Jogador } from 'src/jogadores/interfaces/jogador.interface';

export interface Evento {
  nome: string;
  operação: string;
  valor: number;
}

export interface Categoria extends Document {
  readonly categoria: string;
  descticao: string;
  eventos: Array<Evento>;
  jogadores: Array<Jogador>;
}
