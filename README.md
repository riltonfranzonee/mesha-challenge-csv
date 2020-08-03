# Atividade 02 - Visualização de dados CSV

Esse repositório contém o código referente à aplicação web da atividade 02 do processo seletivo da Mesha.

## :information_source: Instruções
É necessário ter instalado Node.js e git.

Para rodar a aplicação, basta seguir os seguintes passos:

```bash
# Clone o repositório
$ git clone https://github.com/riltonfranzonee/mesha-challenge-csv

# Entre na pasta
$ cd mesha-challenge-csv

# Mude para a branch da versão final
$ git checkout final-version

# Instale as dependências
$ yarn

# Inicialize o servidor
$ yarn dev
```

Agora é possível acessar a aplicação em [localhost:8080](http://localhost:8080)

## Exemplo de arquivo CSV

Nessa aplicação é possível importar qualquer tipo de dado em formato CSV. Para gerar a tabela corretamente, lembre-se de passar na primeira linha o nome de cada campo (eles serão as colunas da tabela gerada).
Exemplo de arquivo CSV:

```bash
Usuário;Identificação;Aniversário
booker12;9012;10/01/2000
grey07;2070;20/08/1987
johnson81;4081;15/03/1987
jenkins46;9346;06/08/1976
smith79;5079;27/10/1985
```
