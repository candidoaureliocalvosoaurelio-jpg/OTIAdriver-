// data/simbolos-painel.ts

export type CorSimbolo = "vermelho" | "amarelo" | "verde" | "azul";

export type SimboloPainel = {
  id: string;
  nome: string;
  sistema: string;
  cor: CorSimbolo;
  severidade: string;
  acaoRecomendada: string;
  descricao: string;
  image: string; // caminho em /public
};

export const simbolosPainelDemo: SimboloPainel[] = [
  {
    id: "esc",
    nome: "ESC – Controle de Estabilidade",
    sistema: "Segurança ativa / Estabilidade",
    cor: "amarelo",
    severidade: "Advertência importante (atenção imediata)",
    acaoRecomendada:
      "Reduza a velocidade, dirija com cautela e evite manobras bruscas. Se a luz permanecer acesa, procure a manutenção.",
    descricao:
      "Sistema que auxilia o motorista a manter o controle do veículo em situações de risco, como derrapagens ou manobras bruscas. Ele pode reduzir a potência do motor e/ou acionar individualmente os freios das rodas para restaurar a estabilidade.",
    // ajuste este caminho para o nome REAL do arquivo que você salvar em /public
    image: "/images/simbolos/esc-controle-estabilidade.png",
  },
  {
    id: "tc",
    nome: "TC – Controle de Tração",
    sistema: "Segurança ativa / Tração",
    cor: "amarelo",
    severidade: "Advertência moderada",
    acaoRecomendada:
      "Dirija com cautela em piso escorregadio. Em terrenos soltos (areia, cascalho), o sistema pode ser desligado conforme orientação do fabricante.",
    descricao:
      "O Controle de Tração impede que as rodas patinem em arrancadas ou acelerações, especialmente em superfícies escorregadias. Monitora a rotação das rodas e, quando detecta patinagem, atua nos freios e reduz a potência do motor para restaurar a tração.",
    image: "/images/simbolos/tc-controle-tracao.png",
  },
  {
    id: "ldws",
    nome: "LDWS – Aviso de Saída de Faixa",
    sistema: "Assistência ao motorista",
    cor: "amarelo",
    severidade: "Advertência preventiva",
    acaoRecomendada:
      "Mantenha o veículo centralizado na faixa. Se os avisos ocorrerem com frequência, ajuste sua condução e verifique fadiga.",
    descricao:
      "O sistema LDWS utiliza uma câmera atrás do para-brisa para detectar as faixas de sinalização horizontal. Emite avisos sonoros quando o veículo sai da faixa de forma não intencional, ajudando a evitar acidentes por distração ou sonolência.",
    image: "/images/simbolos/ldws-saida-faixa.png",
  },
  {
    id: "aebs",
    nome: "AEBS – Frenagem Avançada de Emergência",
    sistema: "Segurança ativa / Frenagem automática",
    cor: "amarelo",
    severidade: "Advertência alta",
    acaoRecomendada:
      "Mantenha distância segura do veículo à frente. Se a luz permanecer acesa, o sistema pode estar desativado ou com falha – procure a manutenção.",
    descricao:
      "Sistema que utiliza radar frontal para detectar risco de colisão com veículos à frente. Emite alertas sonoros e visuais e, se necessário, pode acionar a frenagem automática para reduzir a gravidade do impacto ou evitar o acidente.",
    image: "/images/simbolos/aebs-frenagem-emergencia.png",
  },
];
