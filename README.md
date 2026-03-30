# 🚀 Agência Planner — Site Institucional

> Site institucional da Agência Planner, desenvolvido com **Next.js 16**, **React 19**, **TypeScript** e **Tailwind CSS v4**.

---   vai ter mais 

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Páginas e Rotas](#páginas-e-rotas)
- [Componentes](#componentes)
- [Configurações](#configurações)
- [SEO e Metadados](#seo-e-metadados)
- [Como Contribuir](#como-contribuir)
- [Deploy](#deploy)

---

## 🌐 Visão Geral

O site da Agência Planner é uma aplicação web moderna e responsiva, projetada para apresentar os serviços, cases, equipe e soluções da agência. Foi construído com foco em:

- ⚡ **Performance**: Server Components pelo App Router do Next.js
- 🔍 **SEO**: Metadados, sitemap e robots.txt automáticos
- 📱 **Responsividade**: Layout adaptado para mobile, tablet e desktop
- ✨ **Animações**: Transições suaves com Framer Motion
- ♿ **Acessibilidade**: aria-labels, semântica HTML correta

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2.1 | Framework principal (App Router) |
| [React](https://react.dev) | 19.2.3 | Biblioteca de UI |
| [TypeScript](https://typescriptlang.org) | ^5 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com) | ^4.2.1 | Estilização utilitária |
| [Framer Motion](https://framer.com/motion) | ^12 | Animações |
| [Lucide React](https://lucide.dev) | ^0.563 | Ícones |

---

## ✅ Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

- **Node.js** — versão 18 ou superior ([download](https://nodejs.org))
- **npm** — versão 9 ou superior (vem com o Node.js)

Para verificar se você já tem:

```bash
node -v   # deve retornar v18.x.x ou superior
npm -v    # deve retornar 9.x.x ou superior
```

---

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/planner.git
cd planner
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Rode em modo de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### 4. Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento (hot reload) |
| `npm run build` | Gera o build otimizado para produção |
| `npm run start` | Inicia o servidor de produção (após o build) |
| `npm run lint` | Verifica erros de código com ESLint |

---

## 📁 Estrutura de Pastas

```
planner/
├── app/                          # Diretório principal do Next.js App Router
│   ├── layout.tsx                # Layout raiz (Header + Footer aplicados aqui)
│   ├── page.tsx                  # Página inicial (/)
│   ├── globals.css               # Estilos globais e variáveis CSS
│   ├── favicon.ico               # Ícone do site
│   ├── sitemap.ts                # Sitemap gerado automaticamente pelo Next.js
│   ├── robots.ts                 # Regras para crawlers (Google, etc.)
│   │
│   ├── components/               # Componentes reutilizáveis
│   │   ├── header/
│   │   │   ├── header.tsx        # Navegação desktop com dropdowns
│   │   │   └── footer.tsx        # Rodapé do site
│   │   ├── header-mobile/
│   │   │   └── index.tsx         # Navegação flutuante para mobile
│   │   └── home/                 # Componentes da página inicial
│   │       ├── banner/
│   │       │   └── banner.tsx    # Seção hero (título + formulário de email)
│   │       ├── carrossel/
│   │       │   └── carrossel.tsx # Carrossel de cases
│   │       ├── clientes/
│   │       │   └── cliente.tsx   # Logos de clientes em loop infinito
│   │       ├── depoimentos/
│   │       │   └── Depoimentos.tsx # Slider de depoimentos
│   │       ├── frentes/
│   │       │   └── frentes.tsx   # Cards das 4 frentes de trabalho
│   │       ├── historia/
│   │       │   └── historia.tsx  # Seção "15 anos de história"
│   │       ├── integrar/
│   │       │   └── integrar.tsx  # Seção "Por que integrar com a Planner?"
│   │       └── number/
│   │           └── number.tsx    # Contadores animados (15 anos, 150 projetos...)
│   │
│   ├── pages/                    # Páginas secundárias
│   │   ├── Quem-Somos/           # Página "Quem Somos"
│   │   ├── brandings/            # Página de serviços de branding
│   │   ├── cases/                # Página de portfólio/cases
│   │   └── contato/              # Página de contato
│   │
│   ├── blog/                     # Seção de blog
│   │   ├── page.tsx              # Listagem de posts
│   │   ├── [slug]/               # Página dinâmica de cada post
│   │   ├── components/           # Componentes específicos do blog
│   │   └── typagem/              # Types/interfaces TypeScript do blog
│   │
│   ├── services/                 # (Área de serviços específicos)
│   │   ├── Brandings/
│   │   └── teste/
│   │
│   └── unicos/                   # Componentes usados em múltiplas páginas
│       ├── faq/                  # Componente de perguntas frequentes
│       └── formulario-pages/
│           └── form.tsx          # Formulário de contato/proposta
│
├── public/                       # Arquivos estáticos (servidos diretamente)
│   ├── LOGO PLANNER.webp         # Logo da agência
│   ├── IMAGEM BANNER SITE PLANNER.webp  # Imagem do banner
│   └── HENRIQUE - QUEM SOMOS.webp      # Foto da equipe
│
├── next.config.ts                # Configuração do Next.js
├── tailwind.config.ts            # Configuração do Tailwind CSS
├── tsconfig.json                 # Configuração do TypeScript
├── postcss.config.mjs            # Configuração do PostCSS
├── eslint.config.mjs             # Configuração do ESLint
└── package.json                  # Dependências e scripts
```

---

## 🗺️ Páginas e Rotas

| Rota | Arquivo | Tipo | Descrição |
|---|---|---|---|
| `/` | `app/page.tsx` | Estático | Página inicial com todos os blocos |
| `/blog` | `app/blog/page.tsx` | Estático | Listagem de artigos do blog |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Dinâmico | Artigo individual |
| `/pages/Quem-Somos` | `app/pages/Quem-Somos/` | Estático | Página institucional "Quem somos" |
| `/pages/brandings` | `app/pages/brandings/` | Estático | Serviços de branding |
| `/pages/cases` | `app/pages/cases/` | Estático | Portfólio de cases |
| `/pages/contato` | `app/pages/contato/` | Estático | Formulário de contato |
| `/sitemap.xml` | `app/sitemap.ts` | Gerado | Mapa do site para buscadores |
| `/robots.txt` | `app/robots.ts` | Gerado | Permissões para crawlers |

> **Tipos:**
> - **Estático**: gerado em build time, carrega mais rápido
> - **Dinâmico**: gerado no servidor a cada requisição

---

## 🧩 Componentes

### `layout.tsx` — Layout Raiz
Aplicado em **todas as páginas**. Contém:
- Import da fonte **Raleway** (Google Fonts)
- Metadados globais (título, descrição, URL base)
- Renderiza o `<Header>`, o `<HeaderMobile>` e o `<Footer>` automaticamente

```tsx
// Toda página herda esse layout automaticamente
<html lang="pt-BR">
  <body>
    <Headertop />       {/* Navegação desktop */}
    <HeaderMobile />    {/* Navegação mobile */}
    {children}          {/* Conteúdo da página */}
    <Footer />
  </body>
</html>
```

---

### `header/header.tsx` — Navegação Desktop
- Visível apenas em telas **md (768px) ou maiores**
- Possui dropdowns ao hover nos itens **Soluções** e **Sobre**
- O dropdown de **Soluções** tem 4 colunas com submenus expansíveis
- Botão flutuante de **voltar ao topo** aparece após rolar 400px
- Link de **WhatsApp** fixo no canto inferior direito

**Estados gerenciados:**
```tsx
const [active, setActive] = useState<string | null>(null)      // qual dropdown está ativo
const [accordionOpen, setAccordionOpen] = useState<string | null>(null)  // qual accordion está aberto
const [showScrollButton, setShowScrollButton] = useState(false) // botão "voltar ao topo"
```

---

### `header-mobile/index.tsx` — Navegação Mobile
- Visível apenas em telas **menores que lg (1024px)**
- Barra fixa flutuante na parte inferior da tela
- Menu expansível com animação ao clicar no ícone de hamburguer
- Se desloca para cima automaticamente quando o footer aparece na tela (usando `IntersectionObserver`)
- Usa ícones do `lucide-react` (não depende de servidores externos)

**Links do menu:**
```tsx
const navItems = [
  { label: 'Quem somos', href: '/pages/Quem-Somos' },
  { label: 'Portfólio',  href: '/pages/cases' },
  { label: 'Serviços',   href: '/pages/brandings' },
  { label: 'Blog',       href: '/blog' },
];
```

---

### `home/banner/banner.tsx` — Seção Hero
- Título principal animado com **Framer Motion** (fade + slide)
- Parágrafo descritivo com delay de animação
- Formulário de email para captação de leads

---

### `home/carrossel/carrossel.tsx` — Carrossel de Cases
- Exibe **2 cards** no desktop e **1 card** no mobile
- Navegação com botões (anterior/próximo)
- Animação de entrada/saída com `AnimatePresence` do Framer Motion
- Detecta tamanho da tela com `window.innerWidth` via `useEffect`

---

### `home/number/number.tsx` — Contadores Animados
- Exibe 3 métricas: **+15 anos**, **+150 projetos**, **+40 especialistas**
- A animação dispara apenas quando o elemento entra na tela (`useInView`)
- Usa `animate()` do Framer Motion para contagem suave

---

### `home/depoimentos/Depoimentos.tsx` — Slider de Depoimentos
- Funciona igual ao carrossel de cases
- 4 depoimentos, mostra 2 por vez no desktop e 1 no mobile
- Cada card tem: empresa (como card colorido), nome, cargo e texto do depoimento

---

### `home/clientes/cliente.tsx` — Logo dos Clientes
- Carrossel com scroll automático e infinito
- A lista de logos é duplicada para criar efeito de loop sem buracos
- Efeito de degrade nas laterais para suavizar a entrada/saída
- Logos exibidos em escala de cinza, coloridos ao hover

---

### `home/frentes/frentes.tsx` — Frentes de Trabalho
- 4 cards em grid (1 coluna mobile → 2 tablet → 4 desktop)
- Borda muda para preta no hover
- Cada card tem: imagem, título, e botões de ação

---

### `home/historia/historia.tsx` — Seção de História
- **Server Component** (sem interatividade, renderiza no servidor)
- Layout de 2 colunas: texto à esquerda, barra colorida à direita
- Barra colorida `#432CF3` visível apenas em desktop

---

### `home/integrar/integrar.tsx` — Por que integrar?
- Texto explicativo sobre a proposta de valor da agência
- Espaço reservado para um card futuro

---

### `unicos/formulario-pages/form.tsx` — Formulário CTA
- **Server Component** (sem interatividade cliente)
- Fundo azul `#432CF3`
- Input de email + botão de proposta

---

### `header/footer.tsx` — Rodapé
- Grid responsivo 4 colunas (1 no mobile)
- Coluna 1: Logo + tagline
- Coluna 2: Links da empresa
- Coluna 3: Links de serviços
- Coluna 4: Redes sociais
- Copyright com `new Date().getFullYear()` (atualiza o ano automaticamente)

---

## ⚙️ Configurações

### `next.config.ts`
Define quais domínios externos podem fornecer imagens:

```ts
images: {
  remotePatterns: [
    { hostname: 'casa-dos-transformadores.s3.us-east-1.amazonaws.com' },
    { hostname: 'images.unsplash.com' },
    { hostname: 'head.agenciaplanner.dev' },
  ],
}
```

> ⚠️ Se precisar usar imagens de um novo domínio externo, adicione-o aqui.

### `globals.css`
Configuração do Tailwind CSS v4 com:
- `@import "tailwindcss"` — carrega o Tailwind
- `@source` — diz ao Tailwind onde procurar classes usadas
- `@theme inline` — define variáveis CSS globais
- `.scrollbar-hide` — utilitário para ocultar scrollbar
- `@keyframes slideDown` — animação usada nos accordions do header

### `tsconfig.json`
TypeScript configurado com o path alias `@/*` mapeando para a raiz do projeto, permitindo imports como:
```ts
import Component from '@/components/...'
```

---

## 🔍 SEO e Metadados

### Metadados Globais (`layout.tsx`)
```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://agenciaplanner.com"),
  title: {
    default: "Agência Planner",
    template: "%s | Agência Planner",  // Ex: "Blog | Agência Planner"
  },
  description: "...",
  openGraph: { siteName: "Agência Planner", locale: "pt_BR" },
};
```

### Metadados por Página
Cada página pode definir seus próprios metadados:
```ts
// app/page.tsx
export const metadata: Metadata = {
  title: "Home",
  alternates: { canonical: "/" },
};
```
O título final será: `"Home | Agência Planner"`.

### Sitemap (`sitemap.ts`)
Gerado automaticamente em `/sitemap.xml`. Lista todas as URLs públicas com:
- `changeFrequency` — com que frequência a página muda
- `priority` — importância relativa (0 a 1)

### Robots (`robots.ts`)
Gerado em `/robots.txt`. Controla o que os crawlers podem indexar.

---

## 🎨 Paleta de Cores

| Cor | Valor Hex | Uso |
|---|---|---|
| Roxo Principal | `#432CF3` | Botões, destaques, carrossel ativo |
| Cinza Fundo | `#F3F7FA` | Backgrounds de seções |
| Borda | `#DADADA` | Divisores e borders |
| Verde WhatsApp | `#25D366` | Botão do WhatsApp |
| Preto | `#000000` | Botões secundários, textos |

---

## 🤝 Como Contribuir

1. Crie uma branch para sua feature:
   ```bash
   git checkout -b feat/nome-da-feature
   ```

2. Faça suas alterações e commite:
   ```bash
   git commit -m "feat: adiciona nova seção X"
   ```

3. Envie para o repositório:
   ```bash
   git push origin feat/nome-da-feature
   ```

4. Abra um Pull Request descrevendo as mudanças.

---

## 🚢 Deploy

O projeto está configurado para deploy fácil na **Vercel** (plataforma oficial do Next.js):

1. Acesse [vercel.com](https://vercel.com) e conecte seu repositório GitHub
2. A Vercel detecta automaticamente o Next.js e configura tudo
3. Cada push na branch `main` gera um novo deploy automático

**Variáveis de ambiente necessárias:** nenhuma no momento.

---

## 📌 Pendências / Próximos Passos

- [ ] Substituir número de WhatsApp `5511000000000` pelo número real da agência
- [ ] Implementar conteúdo real nos cards de "Frentes de Trabalho" (imagens reais)
- [ ] Implementar conteúdo do card placeholder em `integrar.tsx`
- [ ] Criar/integrar CMS para o Blog (ex: Sanity, Contentful, Notion)
- [ ] Adicionar formulários funcionais com backend (email ou webhook)
- [ ] Substituir logos placeholder dos clientes pelos logos reais

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo `LICENSE` para mais informações.

---

<div align="center">
  <p>Feito com ❤️ pela equipe da Agência Planner</p>
</div>
