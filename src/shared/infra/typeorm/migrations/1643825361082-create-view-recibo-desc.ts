import { MigrationInterface, QueryRunner } from 'typeorm';

export class createViewReciboDesc1643825361082 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE VIEW "recibo_desc" as
      (SELECT c.id as id_compra,
       f.nome as nome_funcionario,
       cli.nome as nome_cliente,
       p.nome as nome_produto,
       t.setor as setor_produto,
       p.preco as total
      FROM "compras" as c, "funcionarios" as f,
           "clientes" as cli, "produtos" as p,
           "tipos" as t
      WHERE c.id_produto=p.id and c.cpf_funcionario=f.cpf and c.cpf_cliente=cli.cpf and p.id_tipo=t.id)
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP VIEW IF EXISTS recibo_desc`);
  }
}
