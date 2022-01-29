import { MigrationInterface, QueryRunner } from 'typeorm';

export class createGerentes1643309284713 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`CREATE TABLE IF NOT EXISTS "gerentes"
      ("id_gerente" integer, "cpf_funcionario" varchar(14),
       CONSTRAINT "gerente_pkey" PRIMARY KEY (id_gerente))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS "gerentes"`);
  }
}
