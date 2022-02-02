import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTriggersControlaEstoqueAtualizaEstoque1643828582145
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TRIGGER trigger_controla_estoque AFTER INSERT OR UPDATE ON compras FOR EACH ROW EXECUTE PROCEDURE CONTROLA_ESTOQUE();

      CREATE TRIGGER trigger_atualiza_estoque AFTER INSERT OR UPDATE ON estoques FOR EACH ROW EXECUTE PROCEDURE ATUALIZA_ESTOQUE();
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      DROP TRIGGER trigger_controla_estoque ON compras;
      DROP TRIGGER trigger_atualiza_estoque ON estoques;
    `);
  }
}
