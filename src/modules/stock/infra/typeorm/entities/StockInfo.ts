import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity('estoque_info')
class StockInfo {
  @ViewColumn()
  nome_produto: string;

  @ViewColumn()
  setor_produto: string;

  @ViewColumn()
  quantidade_produto: number;
}

export { StockInfo };
