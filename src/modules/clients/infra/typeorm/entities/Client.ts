import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';

@Entity('clientes')
class Client {
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

export { Client };
