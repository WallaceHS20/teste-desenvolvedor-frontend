[![](https://dotlib.com/theme/img/logos/logo.png)](https://www.dotlib.com)

# Teste para candidatos à vaga de Desenvolvedor Frontend Jr.

Olá caro desenvolvedor, nesse teste analisaremos seu conhecimento geral e inclusive velocidade de desenvolvimento. Abaixo explicaremos tudo o que será necessário.

## Instruções

O desafio consiste em desenvolver uma aplicação em React de um **bulário eletrônico**, que terá como finalidade apresentar e consultar bulas de medicamentos. O layout da página fica a seu critério, assim como a responsividade.

Sua aplicação deve:
 
- Possuir uma consulta por nome do medicamento ou laboratório farmacêutico e apresentar os resultados em uma listagem
- Possuir ordenação pela data de publicação do medicamento
- Possuir uma paginação de 10 em 10 items por página
- O conteúdo deverá ser lido por meio de uma api REST disponibilizada na pasta `api` deste repositório

## Preparação

Para iniciar o teste, faça um **fork** deste repositório, crie uma **branch** com o seu nome completo e depois envie-nos o **pull request**. Se você apenas clonar o repositório não vai conseguir fazer push e depois vai ser mais complicado fazer o pull request.

## API Rest

Para carregar a api, use o [json-server](https://github.com/typicode/json-server):

```sh
npm install -g json-server

json-server api/dotlib.json -s ./api/public
```

Utilize os seguintes endpoints para carregar as informações:

```sh
# retorna todos os items paginados de 10 em 10
GET http://localhost:3000/data

# retorna um determinado medicamento consultado pelo id
GET http://localhost:3000/data/:id

# retorna os items paginados
GET http://localhost:3000/data?_page=:number
```

### Exemplo da resposta:
```json
{
	"id": "9fd2789c-50f5-4743-857b-bbfa746ed631",
	"name": "AMOXICILINA",
	"published_at": "2022-12-16T18:24:24.000Z",
	"company": "MULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA",
	"documents": [
		{
			"id": "57a35a05-1615-491c-b5ae-48ad770cdd53",
			"expedient": "5064642229",
			"type": "PROFESSIONAL",
			"url": "http://localhost:3000/pdf_sample.pdf"
		},
		{
			"id": "dcc3ecc6-5b62-4236-8dfe-f61f4da93fac",
			"expedient": "5064642229",
			"type": "PATIENT",
			"url": "http://localhost:3000/pdf_sample.pdf"
		}
	],
	"active_principles": [
		{
			"id": "595aeb0d-5b0d-4a05-a6f6-574a291ad574",
			"name": "HIDROQUINONA"
		}
	]
}
```
### Dicionário de dados

| Campo| Descrição | Tipo |
|-|-|-| 
| `id` | identificador do medicamento | `string` |
| `name` | nome do medicamento | `string` |
| `published_at` | data de publicação | `string` |
| `company` | nome do laboratório | `string` |
| `documents.id` | identificador da bula profissional ou paciente | `string` |
| `documents.expedient` | registro da bula em orgãos responsáveis | `string` |
| `documents.type` | tipo da bula (PROFESSIONAL ou PATIENT) | `string` |
| `documents.url` | URL da bula | `string` |
| `active_principles.id` | identificador do princípio ativo encontrado no medicamento | `string` |
| `active_principles.name` | nome do princípio ativo encontrado no medicamento | `string` |

## O que iremos analisar

- Tempo de entrega do teste
- Organização e legibilidade do código
- Padronização de commits
- Separação de componentes
- Sugestões de novas funcionalidades. Ex: download do PDF da bula

## Boa sorte!
