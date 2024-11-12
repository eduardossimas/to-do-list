# To-Do List App

Este é um aplicativo de lista de tarefas simples construído com Vite, TypeScript, React e Tailwind CSS.

## Tecnologias Utilizadas

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/to-do-list-app.git
cd to-do-list-app
```

2. Instale as dependências

```bash
npm install
```

3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

4. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

```plaintext
.
├── public
│   └── favicon.ico
├── src
│   ├── assets
│   │   └── Logo.svg
│   ├── components
│   │   ├── CurrentTasks.tsx
│   │   ├── NewTask.tsx
│   │   └── Task.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .eslintrc.cjs
├── [index.html](http://_vscodecontentref_/0)
├── [package.json](http://_vscodecontentref_/1)
├── postcss.config.cjs
├── tailwind.config.cjs
├── [tsconfig.json](http://_vscodecontentref_/2)
└── [vite.config.ts](http://_vscodecontentref_/3)
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria uma versão de produção do aplicativo.
- `npm run serve`: Serve a versão de produção do aplicativo.
- `npm run lint`: Executa o linter para verificar problemas no código.

## Configuração do Tailwind CSS

O Tailwind CSS está configurado no arquivo `tailwind.config.cjs`:

```js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Excluir tarefas

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.