import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { TypeProducts } from '@modules/typesProducts/infra/typeorm/entities/TypeProduct';
import { Stock } from '@modules/stock/infra/typeorm/entities/Stock';

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
