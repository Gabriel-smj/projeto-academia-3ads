# PowerFit

Projeto integrador entre Front-end e Programacao Web. A aplicacao permite cadastrar e consultar membros de uma academia.

## Tecnologias

- Backend: Java 21, Spring Boot, JdbcTemplate e MySQL.
- Frontend: React 19 e Vite.
- Banco de dados: MySQL.

## Estrutura

```text
Backend/backend   API REST
Frontend/meu-projeto-academia   Cliente React
```

## Pre-requisitos

- Java 21 ou superior.
- MySQL Server.
- Node.js e npm.

## Configuracao do banco

1. Abra o MySQL Workbench, o cliente MySQL ou outro cliente SQL.
2. Execute o arquivo `Backend/backend/src/main/resources/schema.sql`.
3. O script cria o banco `powerfit` e a tabela `membro`.

O backend le as credenciais pelas variaveis de ambiente abaixo:

```text
DB_URL=jdbc:mysql://localhost:3306/powerfit
DB_USERNAME=root
DB_PASSWORD=sua_senha
```

No PowerShell, configure-as antes de iniciar a API:

```powershell
$env:DB_URL="jdbc:mysql://localhost:3306/powerfit"
$env:DB_USERNAME="root"
$env:DB_PASSWORD="sua_senha"
```

Como alternativa para desenvolvimento local, copie `application-local.properties.sample` para `application-local.properties` e preencha as credenciais. O arquivo `application-local.properties` e ignorado pelo Git e nao deve ser enviado ao repositorio.

## Executar o backend

Na raiz do repositorio:

```powershell
cd Backend/backend
./mvnw.cmd spring-boot:run
```

A API sera iniciada em `http://localhost:8080`.

Para executar os testes do backend:

```powershell
./mvnw.cmd test
```

## Executar o frontend

Em outro terminal:

```powershell
cd Frontend/meu-projeto-academia
npm install
npm run dev
```

O frontend sera disponibilizado normalmente em `http://localhost:5173`.

Comandos adicionais:

```powershell
npm run lint
npm run build
```

## Integracao

O frontend consome a API em `http://localhost:8080/membro`. O backend permite requisicoes do frontend executado em `http://localhost:5173`.

### Listar membros

```http
GET http://localhost:8080/membro
```

Resposta `200 OK`:

```json
[
	{
		"id": 1,
		"nome": "Ana Souza",
		"dataNascimento": "2000-01-15",
		"email": "ana@example.com",
		"telefone": "11999999999",
		"plano": "BASICO"
	}
]
```

### Cadastrar membro

```http
POST http://localhost:8080/membro
Content-Type: application/json
```

Requisicao:

```json
{
	"nome": "Ana Souza",
	"dataNascimento": "2000-01-15",
	"email": "ana@example.com",
	"telefone": "11999999999",
	"plano": "BASICO"
}
```

Resposta `201 Created`:

```json
{
	"id": 1,
	"nome": "Ana Souza",
	"dataNascimento": "2000-01-15",
	"email": "ana@example.com",
	"telefone": "11999999999",
	"plano": "BASICO"
}
```

### Buscar membro por ID

```http
GET http://localhost:8080/membro/{id}
```

Retorna `200 OK` quando encontrado, `400 Bad Request` para ID invalido e `404 Not Found` quando o membro nao existe.

### Buscar por nome ou e-mail

```http
GET http://localhost:8080/membro/nome/{nome}
GET http://localhost:8080/membro/email/{email}
```

As consultas retornam `200 OK` com uma lista de membros.

### Atualizar membro

```http
PUT http://localhost:8080/membro/{id}
Content-Type: application/json
```

Usa o mesmo formato JSON do cadastro. Retorna `200 OK`, `400 Bad Request` ou `404 Not Found`.

### Excluir membro

```http
DELETE http://localhost:8080/membro/{id}
```

Retorna `200 OK` quando o membro e excluido, `400 Bad Request` para ID invalido e `404 Not Found` quando o membro nao existe.

## Formato dos dados

- `dataNascimento`: formato `yyyy-MM-dd`.
- `plano`: `BASICO`, `PRO` ou `VIP`.
- `id`: gerado automaticamente pelo banco.

## Observacao sobre credenciais

Nunca publique senhas no repositorio. Use variaveis de ambiente ou o arquivo local `Backend/backend/src/main/resources/application-local.properties`, que ja esta protegido pelo `.gitignore`.