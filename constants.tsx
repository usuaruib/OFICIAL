
import React from 'react';
import { 
  Zap, 
  Target, 
  Smartphone, 
  Flame, 
  BookOpen,
  DollarSign,
  GraduationCap,
  Music,
  User,
  Coffee
} from 'lucide-react';

export const FEATURES = [
  { icon: <Zap className="text-brand-orange" />, title: "Geração Instantânea", description: "Roteiros otimizados em segundos para você nunca perder o timing." },
  { icon: <Target className="text-brand-orange" />, title: "Fórmulas Comprovadas", description: "Baseado em AIDA, PAS e as melhores técnicas de retenção do mercado." },
  { icon: <Smartphone className="text-brand-orange" />, title: "Templates por Nicho", description: "Estruturas prontas para educação, vendas, estilo de vida e mais." },
  { icon: <Flame className="text-brand-orange" />, title: "Ganchos que Prendem", description: "Biblioteca de hooks testados para explodir seus números." },
  { icon: <BookOpen className="text-brand-orange" />, title: "Stories e Reels", description: "Formatos distintos para viralizar no feed ou conectar nos stories." },
];

export const REELS_TEMPLATES = [
  { title: "Antes & Depois", nicho: "Transformação", objetivo: "Mostrar resultados incríveis" },
  { title: "Tutorial Express", nicho: "Educação", objetivo: "Ensinar algo rápido e útil" },
  { title: "Desmistificando Mitos", nicho: "Nicho Específico", objetivo: "Quebrar objeções comuns" },
  { title: "Storytelling Pessoal", nicho: "Experiência", objetivo: "Gerar conexão através de uma história" },
  { title: "Review de Produto", nicho: "Vendas", objetivo: "Mostrar os benefícios de um item" },
];

export const STORIES_TEMPLATES = [
  { title: "Bom Dia Motivacional", tema: "Começo do dia", objetivo: "Inspirar e dar o tom do dia" },
  { title: "Indicação do Dia", tema: "Recomendação", objetivo: "Compartilhar algo útil com o link" },
  { title: "Bastidores", tema: "Backstage", objetivo: "Mostrar o que ninguém vê" },
  { title: "Enquete de Decisão", tema: "Interação", objetivo: "Deixar o público escolher algo" },
  { title: "Dica Rápida", tema: "Conhecimento", objetivo: "Ensinar algo em 30 segundos" },
];

export const HOOKS_REELS = [
  { category: "Vendas", hook: "Você está jogando dinheiro fora se não faz isso...", retention: "89%" },
  { category: "Educação", hook: "Ninguém te contou isso sobre X, mas eu vou...", retention: "92%" },
  { category: "Fitness", hook: "X coisas que mudaram meu corpo em Y dias...", retention: "85%" },
  { category: "Moda", hook: "Pare de usar X se você quer parecer Y...", retention: "88%" },
  { category: "Curiosidade", hook: "O segredo que os profissionais escondem sobre...", retention: "94%" },
];

export const HOOKS_STORIES = [
  { category: "Início", hook: "Gente, preciso contar uma coisa que aconteceu...", style: "Conversa Casual" },
  { category: "Dica", hook: "Muitos de vocês me perguntaram sobre isso e...", style: "Dica Útil" },
  { category: "Bastidor", hook: "Olha como as coisas estão por aqui hoje...", style: "Vida Real" },
  { category: "Opinião", hook: "Eu sei que isso é polêmico, mas eu penso que...", style: "Hot Take" },
  { category: "Novidade", hook: "Vocês não estão preparados para o que vem aí...", style: "Anúncio" },
];
