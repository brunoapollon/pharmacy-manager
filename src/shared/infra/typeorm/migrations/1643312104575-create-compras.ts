import { MigrationInterface, QueryRunner } from 'typeorm';

export class createCompras1643312104575 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`CREATE TABLE IF NOT EXISTS "compras"
      ("id" integer, "cpf_cliente" varchar(14),
       "cpf_funcionario" varchar(14), "id_produto" integer,
       CONSTRAINT "compra_pkey" PRIMARY KEY (id))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS "compras"`);
  }
}
