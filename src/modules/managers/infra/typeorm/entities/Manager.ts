import { Functionary } from '../../../../functionaries/infra/typeorm/entities/Functionary';
import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne } from 'typeorm';

@Entity('gerentes')
class Manager {
  @PrimaryColumn()
  id_gerente: number;

  @JoinColumn({ name: 'cpf_funcionario' })
  @OneToOne(() => Functionary, { eager: true })
  cpf_funcionario: string;
}

export { Manager };
