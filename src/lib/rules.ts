export type RuleKind = "do" | "avoid";

export type Rule = {
  id: string;
  kind: RuleKind;
  title: string;
  body: string;
};

export const RULES: Rule[] = [
  {
    id: "do-1",
    kind: "do",
    title: "Um objetivo por trimestre",
    body: "Tudo que não empurra o norte entra em Depois. Dez metas é zero meta.",
  },
  {
    id: "do-2",
    kind: "do",
    title: "Dinheiro no piloto automático",
    body: "No dia do pagamento: contas, reserva, investimento. Sem decidir. Decisão é o inimigo.",
  },
  {
    id: "do-3",
    kind: "do",
    title: "Trabalho em sprints",
    body: "25 ou 50 minutos. Começar feio. Terminar o suficiente. Perfeição é procrastinação.",
  },
  {
    id: "do-4",
    kind: "do",
    title: "Ambiente, não força de vontade",
    body: "Celular longe. Distração bloqueada. Mesa limpa. Roupa de modo trabalho.",
  },
  {
    id: "do-5",
    kind: "do",
    title: "Corpo como base",
    body: "Sono no horário. Caminhada. Proteína de manhã. TDAH sem sono vira caos financeiro.",
  },
  {
    id: "do-6",
    kind: "do",
    title: "Carreira que pague o cérebro",
    body: "Resultado visível, prazo real, novidade. Dinheiro atrelado a entrega, não a horas sentado.",
  },
  {
    id: "do-7",
    kind: "do",
    title: "Alguém cobrando",
    body: "Mentor, sócio, terapeuta, amigo. Toda semana: o que prometeu / o que entregou.",
  },
  {
    id: "do-8",
    kind: "do",
    title: "Uma skill cara",
    body: "Vendas, escrita, ofício técnico, negociação. Uma skill boa paga o resto da vida.",
  },
  {
    id: "do-9",
    kind: "do",
    title: "Tratar o TDAH de verdade",
    body: "Avaliação, possível medicação, terapia. Não romantizar o caos. Cérebro tratado rende mais.",
  },
  {
    id: "do-10",
    kind: "do",
    title: "Tudo fora da cabeça",
    body: "Calendário, lista, alarme, captura. Se não está escrito, não existe.",
  },
  {
    id: "av-1",
    kind: "avoid",
    title: "Confiar em motivação",
    body: "Motivação some. Rotina pequena e chata vence.",
  },
  {
    id: "av-2",
    kind: "avoid",
    title: "Vários projetos incríveis",
    body: "Isso é fuga. Um projeto até gerar dinheiro. Só então o próximo.",
  },
  {
    id: "av-3",
    kind: "avoid",
    title: "Trabalho sem prazo nem feedback",
    body: "E-mail infinito, planilha sem dono, reunião sem decisão. Empobrece.",
  },
  {
    id: "av-4",
    kind: "avoid",
    title: "Consumo como recompensa",
    body: "TDAH gasta para regular emoção. Impulso espera 48 horas.",
  },
  {
    id: "av-5",
    kind: "avoid",
    title: "Cursos infinitos sem aplicar",
    body: "Aprender sem vender ou entregar é hobby caro.",
  },
  {
    id: "av-6",
    kind: "avoid",
    title: "Rede no começo do dia",
    body: "Primeira hora = a uma coisa. Scroll é veneno.",
  },
  {
    id: "av-7",
    kind: "avoid",
    title: "Tudo ou nada",
    body: "Vinte minutos feios valem mais que o plano perfeito abandonado.",
  },
  {
    id: "av-8",
    kind: "avoid",
    title: "Promessas gigantes",
    body: "Não promete quatro horas. Promete trinta minutos e cumpre.",
  },
  {
    id: "av-9",
    kind: "avoid",
    title: "Ambientes caóticos",
    body: "Quem normaliza atraso e “depois a gente vê” te puxa para baixo.",
  },
  {
    id: "av-10",
    kind: "avoid",
    title: "Atalhos milagrosos",
    body: "TDAH ama novidade. Golpe também. Sem day trade mágico, sem pirâmide.",
  },
];
