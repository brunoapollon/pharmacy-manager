import { MigrationInterface, QueryRunner } from 'typeorm';

export class addingForeignKeysInAllTables1643312885392
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      ALTER TABLE IF EXISTS "farmaceuticos" ADD FOREIGN KEY(cpf_funcionario) REFERENCES funcionarios(cpf);
      ALTER TABLE IF EXISTS "gerentes" ADD FOREIGN KEY(cpf_funcionario) REFERENCES funcionarios(cpf);
      ALTER TABLE IF EXISTS "produtos" ADD FOREIGN KEY(id_tipo) REFERENCES tipos(id);
      ALTER TABLE IF EXISTS "produtos" ADD FOREIGN KEY(id_estoque) REFERENCES estoques(id);
      ALTER TABLE IF EXISTS "estoques" ADD FOREIGN KEY(id_produto) REFERENCES produtos(id);
      ALTER TABLE IF EXISTS "compras" ADD FOREIGN KEY(cpf_cliente) REFERENCES clientes(cpf);
      ALTER TABLE IF EXISTS "compras" ADD FOREIGN KEY(cpf_funcionario) REFERENCES funcionarios(cpf);
      ALTER TABLE IF EXISTS "compras" ADD FOREIGN KEY(id_produto) REFERENCES produtos(id);
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      ALTER TABLE IF EXISTS "farmaceuticos" DROP FOREIGN KEY(cpf_funcionario) REFERENCES funcionarios(cpf);
      ALTER TABLE IF EXISTS "gerentes" DROP FOREIGN KEY(cpf_funcionario) REFERENCES funcionarios(cpf);
      ALTER TABLE IF EXISTS "produtos" DROP FOREIGN KEY(id_tipo) REFERENCES tipos(id);
      ALTER TABLE IF EXISTS "produtos" DROP FOREIGN KEY(id_estoque) REFERENCES estoques(id);
      ALTER TABLE IF EXISTS "estoques" DROP FOREIGN KEY(id_produto) REFERENCES produtos(id);
      ALTER TABLE IF EXISTS "compras" DROP FOREIGN KEY(cpf_cliente) REFERENCES clientes(cpf);
      ALTER TABLE IF EXISTS "compras" DROP FOREIGN KEY(cpf_funcionario) REFERENCES funcionarios(cpf);
      ALTER TABLE IF EXISTS "compras" DROP FOREIGN KEY(id_produto) REFERENCES produtos(id);
    `);
  }
}
