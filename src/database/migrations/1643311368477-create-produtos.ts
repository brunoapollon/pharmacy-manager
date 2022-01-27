import { MigrationInterface, QueryRunner } from 'typeorm';

export class createProdutos1643311368477 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`CREATE TABLE IF NOT EXISTS "produtos"
      ("id" integer, "nome" varchar(50), "preco" real,
       "id_tipo" integer, "id_estoque" integer,
       CONSTRAINT "produto_pkey" PRIMARY KEY (id))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS "produtos"`);
  }
}
