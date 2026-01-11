
export type Format = 'reels' | 'stories';

export interface ReelScript {
  gancho: string;
  ganchoDica: string;
  desenvolvimento: string;
  desenvolvimentoDica: string;
  cta: string;
  ctaDica: string;
  guiaProducao: {
    enquadramento: string;
    cortes: string;
    trilha: string;
    iluminacao: string;
  };
  hashtags: string[];
  legenda: string;
}

export interface StoryScriptItem {
  numero: number;
  tema: string;
  falar: string;
  gravar: string;
  elementos: string[];
  vibe: string;
  cta?: string;
}

export interface StoryScript {
  stories: StoryScriptItem[];
  dicasExtras: {
    timing: string;
    autenticidade: string;
    visual: string;
    interacao: string;
  };
}

export interface ScriptEntry {
  id: string;
  formato: Format;
  nicho: string;
  tipoConteudo?: string;
  objetivo: string;
  timestamp: number;
  favorito: boolean;
  roteiro: ReelScript | StoryScript;
}

export interface GeneratorState {
  nicho: string;
  tipoConteudo: string;
  duracao: string;
  tom: string;
  objetivo: string;
  cta: string;
  palavrasChave: string;
  quantidadeStories: string;
  elementosStories: string[];
}
