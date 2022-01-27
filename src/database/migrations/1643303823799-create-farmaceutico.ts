import { MigrationInterface, QueryRunner } from 'typeorm';

export class createFarmaceutico1643303823799 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`CREATE TABLE IF NOT EXISTS farmaceuticos
      ("id_farmaceutico" integer, "cpf_funcionario" varchar(14),
       CONSTRAINT "farmaceutico_pkey" PRIMARY KEY (id_farmaceutico))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS "farmaceuticos"`);
  }
}
