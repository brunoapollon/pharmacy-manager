import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';

@Entity('funcionarios')
class Functionary {
  @PrimaryColumn()
  cpf: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;
}

export { Functionary };
