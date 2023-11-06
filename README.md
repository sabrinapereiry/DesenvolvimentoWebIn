# Todo List

## Visão Geral

 Este é um aplicativo simples de lista de tarefas construído com React. O aplicativo permite aos usuários criar tarefas, categorizá-las, marcá-las como concluídas e buscar tarefas específicas. Ele utiliza o React Router para navegação e o localStorage para persistir as tarefas.
 
---
## Estrutura do Projeto
O projeto está organizado em vários componentes e páginas:

### Componentes:

- `Navebar`: Componente da barra de navegação com links para criar tarefas e visualizar a lista de tarefas.
- `Search`: Componente para buscar tarefas com base na entrada do usuário.
- `Todo`: Componente que representa uma tarefa individual, com opções para marcá-la como concluída ou removê-la.
- `TodoForm`: Componente de formulário para criar novas tarefas.

### Páginas:

- `CreateTask`: Página para criar novas tarefas. Utiliza o TodoForm para adicionar tarefas à lista.
- `ListTask`: Página que exibe a lista de tarefas. Utiliza o componente Search e mapeia as tarefas usando o componente Todo.

### App:

- `App.css`: Folha de estilo contendo a estilização para a aplicação.
- `App.jsx`: Componente principal da aplicação, onde as Routes e a navegação (Navebar) são definidas.

### Ponto de Entrada:

- `index.jsx`: Ponto de entrada da aplicação, renderizando o componente App dentro de um BrowserRouter.
---
## Recursos

- **Criar Tarefa:** Os usuários podem criar novas tarefas fornecendo um título e selecionando uma categoria.
- **Listar Tarefas:** O aplicativo exibe uma lista de tarefas, incluindo seus títulos, categorias e status de conclusão.
- **Concluir Tarefa:** Os usuários podem marcar tarefas como concluídas, alterando a representação visual da tarefa.
- **Remover Tarefa:** Tarefas podem ser removidas da lista ao clicar no botão "x".
- **Buscar Tarefas:** Os usuários podem buscar tarefas específicas digitando no campo de busca.
