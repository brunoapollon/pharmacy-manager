import { MigrationInterface, QueryRunner } from 'typeorm';

export class createFunctionControlaEstoque1643827269559
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE or replace FUNCTION CONTROLA_ESTOQUE()
        RETURNS TRIGGER
        LANGUAGE PLPGSQL
      AS $$
      DECLARE
          quant_prod integer;
      BEGIN
          SELECT e.quantidade INTO quant_prod FROM estoques as e WHERE e.id_produto=NEW.id_produto;
          IF quant_prod > 0
          THEN
              UPDATE "estoques"
              SET quantidade = quantidade-1
              WHERE id_produto=NEW.id_produto;
              REFRESH MATERIALIZED VIEW estoque_info;
              RAISE NOTICE 'Estoque atualizado!!!';
              RETURN NEW;
          ELSE
              DELETE FROM "compras" WHERE id=NEW.id;
              REFRESH MATERIALIZED VIEW estoque_info;
              RETURN NULL;
          END IF;
      END;
      $$;

      CREATE or replace FUNCTION ATUALIZA_ESTOQUE()
          RETURNS TRIGGER
          LANGUAGE PLPGSQL
      AS $$
      BEGIN
          REFRESH MATERIALIZED VIEW estoque_info;
          RAISE NOTICE 'Estoque atualizado!!!';
          RETURN NEW;
      END;
      $$;

    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP FUNCTION IF EXISTS CONTROLA_ESTOQUE`);
  }
}
