import { Functionary } from '@modules/functionaries/infra/typeorm/entities/Functionary';
import { Entity, PrimaryColumn, Column, JoinColumn, OneToMany } from 'typeorm';

@Entity('gerentes')
class Manager {
  @PrimaryColumn()
  id_gerente: number;

  @Column()
  cpf_funcionario: string;

  @JoinColumn({ name: 'cpf_funcionario' })
  @OneToMany(() => Functionary, functionary => functionary.cpf)
  functionary: Functionary;
}

export { Manager };
