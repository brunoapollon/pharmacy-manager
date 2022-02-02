import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { Product } from '../../../../products/infra/typeorm/entities/Product';

@Entity('estoques')
class Stock {
  @PrimaryColumn()
  id: number;

  @JoinColumn({ name: 'id_produto' })
  @OneToOne(() => Product, { eager: true })
  id_produto: number;

  @Column()
  quantidade: number;
}

export { Stock };
