import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';

@Entity('compras')
class Sale {
  @PrimaryColumn()
  id: number;

  @Column()
  cpf_cliente: string;

  @Column()
  cpf_funcionario: string;

  @Column()
  id_produto: number;
}

export { Sale };
