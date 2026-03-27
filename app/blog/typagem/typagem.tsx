export type WPPost = {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;

  slug: string;
  status: 'publish' | 'draft' | string;
  type: string;
  link: string;
  template: string;

  guid: {
    rendered: string;
  };

  title: {
    rendered: string;
  };

  content: {
    rendered: string;
    protected: boolean;
  };

  meta: {
    title_?: string;
    image?: string;
    nome_da_criacao_do_post?: string;
    minutos_de_leitura?: string;
    introducion?: string;
    conclusao?: string;

    // FAQ
    pergunta1?: string;
    resposta1?: string;

    perguntafaq2?: string;
    perguntafaq2_633?: string;

    perguntafaq3?: string;
    resposta3?: string;

    p3?: string;
    r3?: string;
    _p2?: string;
    r2?: string;
    p1r1?: string;
    p1r2?: string;

    p4?: string;
    r4?: string;
  };

  class_list: string[];

  _links: {
    self: { href: string }[];
    collection: { href: string }[];
    about: { href: string }[];
    'wp:attachment': { href: string }[];
    'wp:featuredmedia'?: { href: string }[];
    curies: {
      name: string;
      href: string;
      templated: boolean;
    }[];
  };
};