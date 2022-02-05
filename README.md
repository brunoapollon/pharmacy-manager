# pharmacy-manager

## Tecnologias

- [Node](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org)
- [Typescript](https://www.typescriptlang.org)
- [Typeorm](https://typeorm.io/#/)

## Projeto

Esse projeto é uma API desenvolvida para consumir um banco de dados criado na disciplina de fundamentos de banco de dados. O projeto consiste em um gerenciador de uma fármacia local.

## Instruções

- Para instalar todas as dependências utilizadas do projeto basta rodar o comando `yarn`.
- Você irá precisar de um banco postgres para utilizar o projeto.
- depois de configurar os arquivos de conexão com o banco, para rodar as migrations, basta executar o comando `yarn typeorm migration:run`.
- O servidor pode ser iniciado com `yarn dev`, onde se tem acesso pelo `http://localhost:3333`
- A maneira de utilizar e as informações necessárias estão descritas em cada rota da aplicação.

# Rotas da aplicação

## Funcionários

- `http://localhost:3333/functionary/create` (`POST`) Rota de criação de funcionários.

```JSON
Dados requeridos:

  {
    "cpf": string,
    "nome": string,
    "endereco": string,
    "telefone": string,
    "email": string
  }

```

- `http://localhost:3333/functionary/update` (`PATCH`) Rota de atualização de funcionários, apenas gerentes podem atualizar dados de funcionários.

```JSON
  Dados requeridos: cpf e o cpf do gerente são obrigatórios.
  {
    "cpf": string,
    "nome": string,
    "endereco": string,
    "telefone": string,
    "email": string,
    "cpf_gerente": string
  }

```

- `http://localhost:3333/functionary/show` (`GET`) Rota de vizualização de funcionários.

```JSON
  Dados requeridos:
  {
    "cpf": string
  }

```

- `http://localhost:3333/functionary/delete` (`DELETE`) Rota de deletar de funcionários.

```JSON
  Dados requeridos:
  {
    "cpf": string
  }

```

- `http://localhost:3333/functionary/list` (`GET`) Rota de listagem de funcionários.

## Gerente - apenas gerentes tem acesso

- `http://localhost:3333/manager/create` (`POST`) Rota de criar de gerentes.

```JSON
  Dados requeridos:
  {
    "id_gerente": number,
    "cpf_funcionario": string,
    "cpf_gerente": string
  }

```

- `http://localhost:3333/manager/delete` (`DELETE`) Rota de deletar de gerentes.

```JSON
  Dados requeridos:
  {
    "cpf_funcionario": string,
    "cpf_gerente": string
  }

```

- `http://localhost:3333/manager/show` (`GET`) Rota de vizualização de gerentes.

```JSON
  Dados requeridos:
  {
    "cpf_funcionario": string,
    "cpf_gerente": string
  }

```

## Farmacêutico

- `http://localhost:3333/pharmaceutical/create` (`POST`) Rota de criar de farmacêutico.

```JSON
  Dados requeridos:
  {
    "id_farmaceutico": number,
    "cpf_funcionario": string,
    "cpf_gerente": string
  }

```

- `http://localhost:3333/pharmaceutical/show` (`GET`) Rota de vizualizar de farmacêutico.

```JSON
  Dados requeridos:
  {
    "cpf_funcionario": string,
  }

```

- `http://localhost:3333/pharmaceutical/delete` (`DELETE`) Rota de deletar de farmacêutico.

```JSON
  Dados requeridos:
  {
    "cpf_funcionario": string,
  }

```

## Clientes

- `http://localhost:3333/client/create` (`POST`) Rota de criação de clientes.

```JSON
Dados requeridos:

  {
    "cpf": string,
    "nome": string,
    "endereco": string,
    "telefone": string,
    "email": string
  }

```

- `http://localhost:3333/client/update` (`PATCH`) Rota de atualização de clientes, apenas gerentes podem atualizar dados de clientes.

```JSON
  Dados requeridos: cpf é obrigatórios.

  {
    "cpf": string,
    "nome": string,
    "endereco": string,
    "telefone": string,
    "email": string,
  }

```

- `http://localhost:3333/client/show` (`GET`) Rota de vizualização de clientes.

```JSON
  Dados requeridos:
  {
    "cpf": string
  }

```

- `http://localhost:3333/client/delete` (`DELETE`) Rota de deletar de clientes.

```JSON
  Dados requeridos:
  {
    "cpf": string
  }

```

- `http://localhost:3333/client/list` (`GET`) Rota de listagem de clientes.

## Tipo produto

- `http://localhost:3333/type_product/create` (`POST`) Rota de criação de tipos de produtos.

```JSON
Dados requeridos:

  {
    "id": number,
    "setor": string
  }

```

- `http://localhost:3333/type_product/update` (`PATCH`) Rota de atualização de tipos de produtos.

```JSON
  Dados requeridos:

  {
    "id": number,
    "setor": string
  }

```

- `http://localhost:3333/type_product/show/:id` (`GET`) Rota de vizualização de tipos de produtos.

- `http://localhost:3333/type_product/delete/:id` (`DELETE`) Rota de deletar de tipos de produtos.

- `http://localhost:3333/type_product/list` (`GET`) Rota de listagem de tipos de produtos.

## Produto

- `http://localhost:3333/product/create` (`POST`) Rota de criação de produtos.

```JSON
Dados requeridos:

  {
    "id": number,
    "nome": string,
    "preco": number,
    "id_tipo": number
  }

```

- `http://localhost:3333/product/update` (`PATCH`) Rota de atualização de produtos, apenas um gerente pode atualizar um produto.

```JSON
  Dados requeridos:

  {
    "id": number,
    "nome": string,
    "preco": number,
    "id_tipo": number,
    "cpf_gerente": string
  }

```

- `http://localhost:3333/product/show/:id` (`GET`) Rota de vizualização de produtos.

- `http://localhost:3333/product/delete/:id` (`DELETE`) Rota de deletar de produtos.

## Estoque

- `http://localhost:3333/stock/create` (`POST`) Rota de criação de estoque.

```JSON
Dados requeridos:

  {
    "id": number,
    "id_produto": number,
    "quantidade": number
  }

```

- `http://localhost:3333/stock/update` (`PATCH`) Rota de atualização de estoque.

```JSON
Dados requeridos:

  {
    "id": number,
    "id_produto": number,
    "quantidade": number
  }

```

- `http://localhost:3333/stock/delete` (`DELETE`) Rota de exclusão de estoque.

```JSON
Dados requeridos:

  {
    "id": number
  }

```

- `http://localhost:3333/stock/show` (`GET`) Rota de vizualização de estoque.

```JSON
Dados requeridos:

  {
    "id": number
  }

```

- `http://localhost:3333/stock/list` (`GET`) Rota de listagem de estoque.

- `http://localhost:3333/stock/info` (`GET`) Rota de informações do estoque.

## venda

- `http://localhost:3333/sale/create` (`POST`) Rota de criação de venda.

```JSON
Dados requeridos:

  {
    "id": number,
    "cpf_cliente": string,
    "cpf_funcionario": string,
    "id_produto": number,
    "valor_recebido": number
  }

```

- `http://localhost:3333/sale/update` (`PATCH`) Rota de atualização de venda.

```JSON
Dados requeridos:

  {
    "id": number,
    "cpf_cliente": string,
    "cpf_funcionario": string,
    "id_produto": number,
    "valor_recebido": number
  }

```

- `http://localhost:3333/sale/show` (`GET`) Rota de vizualização de venda.

```JSON
Dados requeridos:

  {
    "id": number
  }

```

- `http://localhost:3333/sale/delete` (`DELETE`) Rota de exclusão de venda.

```JSON
Dados requeridos:

  {
    "id": number
  }

```

- `http://localhost:3333/sale/list` (`GET`) Rota de listagem de venda.

- `http://localhost:3333/sale/receipt/show/:id` (`GET`) Rota de informações do recibo de uma venda.

- `http://localhost:3333/sale/receipt/list` (`GET`) Rota de listagem de recibos de vendas.
