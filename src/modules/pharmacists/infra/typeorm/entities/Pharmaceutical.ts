import { Functionary } from '@modules/functionaries/infra/typeorm/entities/Functionary';
import { Entity, PrimaryColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity('farmaceuticos')
class Pharmaceutical {
  @PrimaryColumn()
  id_farmaceutico: number;

  @JoinColumn({ name: 'cpf_funcionario' })
  @OneToOne(() => Functionary, { eager: true })
  cpf_funcionario: string;
}

export { Pharmaceutical };
