import { Manager } from '@modules/managers/infra/typeorm/entities/Manager';
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

  // @ManyToOne(() => Manager, manager => manager.cpf_funcionario)
  // manager: Manager;
}

export { Functionary };
