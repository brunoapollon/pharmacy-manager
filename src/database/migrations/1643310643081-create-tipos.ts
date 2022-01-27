import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTipos1643310643081 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`CREATE TABLE IF NOT EXISTS "tipos"
      ("id" integer, "setor" varchar(25),
       CONSTRAINT "tipo_pkey" PRIMARY KEY (id))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE IF EXISTS "tipos"`);
  }
}
