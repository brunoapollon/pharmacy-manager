import { MigrationInterface, QueryRunner } from 'typeorm';

export class createViewMaterializedEstoqueInfo1643826599628
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`CREATE MATERIALIZED VIEW "estoque_info" as
      (SELECT p.nome as "nome_produto",
              t.setor as "setor_produto",
              e.quantidade as "quantidade_produto"
      FROM produtos as p, tipos as t, estoques as e
      WHERE p.id_tipo=t.id)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP VIEW MATERIALIZED IF EXISTS estoque_info`);
  }
}
