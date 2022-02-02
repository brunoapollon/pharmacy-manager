import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { TypeProducts } from '../../../../typesProducts/infra/typeorm/entities/TypeProduct';

@Entity('produtos')
class Product {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;

  @JoinColumn({ name: 'id_tipo' })
  @OneToOne(() => TypeProducts, { eager: true })
  id_tipo: number;
}

export { Product };
