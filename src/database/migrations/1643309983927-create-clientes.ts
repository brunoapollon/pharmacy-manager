import { MigrationInterface, QueryRunner } from 'typeorm';

export class createClientes1643309983927 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "cliente"
      ("cpf" varchar(14), "nome" varchar(50), "email" varchar(50),
       "endereco" varchar(50), "telefone" varchar(20),
       CONSTRAINT "cliente_pkey" PRIMARY KEY (cpf))
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS "clientes"`);
  }
}
