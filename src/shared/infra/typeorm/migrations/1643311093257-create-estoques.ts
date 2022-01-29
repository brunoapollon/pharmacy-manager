import { MigrationInterface, QueryRunner } from 'typeorm';

export class createEstoques1643311093257 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`CREATE TABLE IF NOT EXISTS "estoques"
      ("id" integer, "id_produto" integer, "quantidade" integer,
       CONSTRAINT "estoque_pkey" PRIMARY KEY (id))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS "estoques"`);
  }
}
