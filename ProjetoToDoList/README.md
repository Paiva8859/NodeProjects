# Projeto: Aplicação To-Do List

## Escopo do Projeto

**Funcionalidades Principais:**
1. **Cadastro e Login de Usuários:**
   - Autenticação segura com opções de recuperação de senha.
   - Perfis de usuário personalizados.

2. **Gerenciamento de Tarefas:**
   - Criação, edição e exclusão de tarefas.
   - Marcação de tarefas como concluídas.
   - Atribuição de categorias e prioridades.

4. **Interface Intuitiva:**
   - Design responsivo e amigável.

5. **Segurança:**
   - Proteção de dados com criptografia.
   - Controle de acesso baseado em permissões.

6. **Relatórios e Estatísticas:**
   - Visualização de tarefas concluídas e pendentes.

## Objetivos SMART

- **Específico:** Desenvolver uma aplicação de To-Do List que permita aos colaboradores da Escola SENAI criar, editar, excluir e categorizar tarefas, bem como configurar lembretes e receber notificações. A aplicação deve ser intuitiva, segura e acessível.

- **Mensurável:** A aplicação deve ser completada com todas as funcionalidades principais implementadas e testadas, incluindo criação, edição e exclusão de tarefas, configuração de lembretes e notificações. O sucesso será medido pela implementação completa e pela realização de testes funcionais e de segurança, com um objetivo de 100% de cobertura dos requisitos estabelecidos.

- **Atingível:** Utilizar tecnologias adequadas, como JavaScript (React), Node.js e banco de dados MongoDB, e uma equipe qualificada composta por desenvolvedores front-end e back-end, designers de UI/UX e especialistas em segurança. Garantir que todos os recursos e conhecimentos necessários estejam disponíveis e acessíveis para o desenvolvimento do projeto.

- **Relevante:** A aplicação deve melhorar significativamente a organização e a gestão das tarefas dos colaboradores da Escola SENAI, resultando em maior eficiência e produtividade. A solução atenderá às necessidades de gerenciamento de tarefas e ajudará a otimizar os processos internos da escola.

- **Tempo:** Concluir o desenvolvimento e os testes da aplicação em até 3 meses a partir do início do projeto. Após a conclusão, realizar o treinamento dos usuários e a implementação da aplicação em até 1 mês. A coleta de feedback e a implementação de melhorias contínuas devem ser concluídas em até 2 meses após a implementação inicial.


## Cronograma

1. **Planejamento e Pesquisa (2 semanas)**
   - Reunião inicial com stakeholders.
   - Definição de requisitos e análise de mercado.

2. **Design da Aplicação (3 semanas)**
   - Criação de wireframes e protótipos.
   - Revisão e aprovação do design.

3. **Desenvolvimento (8 semanas)**
   - Configuração do ambiente de desenvolvimento.
   - Implementação das funcionalidades principais.
   - Integração de segurança e banco de dados.
   - Desenvolvimento de APIs (se necessário).

4. **Testes e Ajustes (4 semanas)**
   - Testes funcionais e de segurança.
   - Correção de bugs e ajustes com base no feedback.

5. **Treinamento e Implementação (4 semanas)**
   - Desenvolvimento de material de treinamento.
   - Realização de sessões de treinamento.
   - Lançamento da aplicação para todos os colaboradores.

6. **Avaliação e Melhoria Contínua (2 meses)**
   - Coleta de feedback.
   - Implementação de melhorias baseadas no feedback.

## Análise de Risco

1. **Risco: Atrasos no Desenvolvimento**
   - **Probabilidade:** Moderada
   - **Impacto:** Alto
   - **Mitigação:** Estabelecer prazos claros e realizar reuniões semanais de acompanhamento.

2. **Risco: Problemas de Segurança**
   - **Probabilidade:** Baixa
   - **Impacto:** Alto
   - **Mitigação:** Realizar auditorias de segurança e testes de penetração.

3. **Risco: Resistência dos Usuários à Nova Ferramenta**
   - **Probabilidade:** Moderada
   - **Impacto:** Médio
   - **Mitigação:** Oferecer treinamento adequado e suporte contínuo.

4. **Risco: Bugs e Falhas na Aplicação**
   - **Probabilidade:** Alta
   - **Impacto:** Alto
   - **Mitigação:** Testar exaustivamente antes do lançamento e ter uma equipe de suporte disponível para correções rápidas.

5. **Risco: Falta de Adoção de Funcionalidades**
   - **Probabilidade:** Moderada
   - **Impacto:** Médio
   - **Mitigação:** Realizar pesquisas com usuários durante o desenvolvimento para garantir que as funcionalidades atendam às suas necessidades.

## Recursos

1. **Equipe de Desenvolvimento:**
   - Desenvolvedores front-end e back-end.
   - Designer de UI/UX.
   - Especialista em segurança.

2. **Tecnologias e Ferramentas:**
   - Linguagens de programação: JavaScript (React), Node.js.
   - Banco de Dados: MongoDB.

3. **Infraestrutura:**
   - Servidores para hospedar a aplicação.
   - Serviços de backup e recuperação.

4. **Custos:**
   - Custo de desenvolvimento (salários e honorários).
   - Licenças de software e ferramentas.
   - Treinamento e suporte.
  
# Diagramas:
## Classe:
```mermaid
classDiagram
 class Usuario {
     +int id
     +string nome
     +string email
     +string senha
     +string perfil
     +string recuperarSenha()
     +boolean autenticar(email: string, senha: string)
 }

 class Tarefa {
     +int id
     +string titulo
     +string descricao
     +Date dataCriacao
     +Date dataConclusao
     +boolean concluida
     +string categoria
     +string prioridade
     +criarTarefa(titulo: string, descricao: string, categoria: string, prioridade: string)
     +editarTarefa(titulo: string, descricao: string, categoria: string, prioridade: string)
     +concluirTarefa()
     +excluirTarefa()
 }

 %% Relacionamentos entre as classes
 Usuario "1" -- "0..*" Tarefa : "cria"
```
## Uso:
```mermaid
flowchart TD
    U[Usuário] --> UC1[Cadastrar Usuário]
    U --> UC2[Login]
    U --> UC3[Recuperar Senha]
    U --> UC4[Gerenciar Perfil]
    U --> UC5[Criar Tarefa]
    U --> UC6[Editar Tarefa]
    U --> UC7[Excluir Tarefa]
    U --> UC8[Concluir Tarefa]
    U --> UC9[Visualizar Tarefas]
    U --> UC10[Definir Categoria]
    U --> UC11[Definir Prioridade]
    U --> UC12[Visualizar Tarefas Concluídas]
    U --> UC13[Visualizar Tarefas Pendentes]

```
