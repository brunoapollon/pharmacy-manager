import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity('recibo_desc')
class ReceiptDesc {
  @ViewColumn()
  id_compra: number;

  @ViewColumn()
  nome_funcionario: string;

  @ViewColumn()
  nome_cliente: string;

  @ViewColumn()
  nome_produto: string;

  @ViewColumn()
  setor_produto: string;

  @ViewColumn()
  total: number;
}

export { ReceiptDesc };
