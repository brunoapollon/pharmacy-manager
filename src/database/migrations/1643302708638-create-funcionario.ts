import { MigrationInterface, QueryRunner } from 'typeorm';

export class createFuncionario1643302708638 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS "funcionarios"
      ("cpf" varchar(14), "nome" varchar(50), "email" varchar(50),
       "endereco" varchar(50), "telefone" varchar(20),
       CONSTRAINT "func_pkey" PRIMARY KEY (cpf))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS "funcionarios"`);
  }
}
