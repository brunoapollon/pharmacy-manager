import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne } from 'typeorm';

@Entity('tipos')
class TypeProducts {
  @PrimaryColumn()
  id: number;

  @Column()
  setor: string;
}

export { TypeProducts };
