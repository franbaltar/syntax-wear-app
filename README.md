# SyntaxWear

Aplicação frontend de uma loja virtual de calçados, desenvolvida para apresentar um catálogo de produtos, páginas institucionais, autenticação visual e um fluxo básico de compras. O projeto utiliza dados mockados e assets locais, sem backend ou banco de dados.

## Funcionalidades

- Página inicial com hero, categorias e galeria de produtos.
- Catálogo com 10 produtos mockados.
- Página de detalhes do produto com descrição, preço, desconto para pagamento via PIX e parcelamento.
- Filtro de produtos por categoria.
- Carrinho lateral com:
  - adição de produtos;
  - alteração de quantidade;
  - remoção de produtos;
  - persistência no `localStorage`;
  - abertura e fechamento por drawer e overlay.
- Contagem de itens no carrinho.
- Alternância entre tema claro e escuro, também persistida no `localStorage`.
- Consulta de endereço e cálculo de frete por CEP usando a API ViaCEP.
- Formulário de cadastro com validação de e-mail, senha, confirmação de senha, CPF, data de nascimento e telefone.
- Páginas de login e cadastro com opção visual de login pelo Google.
- Menu responsivo para dispositivos móveis.
- Páginas institucionais sobre a marca e suas lojas.
- Newsletter e links para redes sociais na área inferior da aplicação.

## Tecnologias

- React 19
- TypeScript
- Vite
- TanStack React Router, com rotas baseadas em arquivos
- Tailwind CSS 4
- React Hook Form
- Zod
- `@hookform/resolvers`
- React Icons
- ESLint
- Ubuntu, carregada a partir de fontes locais

## Pré-requisitos

- Node.js instalado
- npm instalado

## Como rodar

1. Clone o repositório e acesse a pasta do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra no navegador a URL exibida pelo Vite, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando           | Descrição                                                |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento do Vite.            |
| `npm run build`   | Verifica os tipos TypeScript e gera o build de produção. |
| `npm run lint`    | Executa o ESLint em todo o projeto.                      |
| `npm run preview` | Serve localmente o build de produção.                    |

## Rotas

| Rota                           | Conteúdo                                       |
| ------------------------------ | ---------------------------------------------- |
| `/`                            | Página inicial com hero, categorias e galeria. |
| `/products`                    | Catálogo completo de produtos.                 |
| `/products/:productId`         | Detalhes de um produto.                        |
| `/products/category/:category` | Produtos filtrados por categoria.              |
| `/about`                       | Informações sobre a SyntaxWear.                |
| `/our-stores`                  | Informações sobre as lojas físicas.            |
| `/sign-in`                     | Tela de login.                                 |
| `/sign-up`                     | Tela de cadastro.                              |

## Organização do projeto

```text
src/
├── assets/       imagens e fontes locais
├── components/   componentes reutilizáveis da interface
├── contexts/     estado global do carrinho
├── interfaces/   tipos de produto, categoria e endereço
├── mocks/        produtos e categorias estáticos
├── pages/        páginas e rotas da aplicação
├── styles/       estilos globais e temas
└── utils/        formatador de moeda e validador de CPF
```

O arquivo `src/App.tsx` registra o roteador e envolve a aplicação com o `CartProvider`. A configuração do Vite integra React, Tailwind CSS e o plugin do TanStack Router. O alias `@` aponta para a pasta `src`.

## Dados e integrações

- Os produtos e categorias ficam em `src/mocks` e não são carregados de um servidor.
- As imagens e fontes utilizadas pela interface ficam em `src/assets`.
- O carrinho é salvo com a chave `@SyntaxWear:cart`.
- O tema escuro é salvo com a chave `dark-mode`.
- A busca de CEP consulta `https://viacep.com.br/ws/{cep}/json/`.
- O custo de entrega é calculado localmente conforme a região retornada pela ViaCEP.

## Estado atual

Este é um projeto demonstrativo de frontend. Login, cadastro, login pelo Google, newsletter e finalização do pedido ainda não possuem integração com serviços reais. Não há backend, autenticação persistente, banco de dados ou testes automatizados configurados.

As categorias exibidas na home são uma seleção visual de `Casual`, `Esporte`, `Moderno` e `Futurista`. Já os produtos mockados utilizam as categorias `Masculino`, `Feminino`, `Outlet`, `Futurista` e `Moderno`.
