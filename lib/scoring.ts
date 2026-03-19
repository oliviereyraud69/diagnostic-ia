import { maturityLabels, questions } from './scorecard-data';

export type Answers = Record<number, number>;

export function computeResults(answers: Answers) {
  const totalAnswered = Object.keys(answers).length;
  const grouped = new Map<string, number[]>();

  questions.forEach((q, index) => {
    const value = answers[index];
    if (!grouped.has(q.pillar)) grouped.set(q.pillar, []);
    if (value) grouped.get(q.pillar)?.push(value);
  });

  const pillarScores = Array.from(grouped.entries()).map(([pillar, values]) => {
    const average = values.length
      ? Number((values.reduce((sum, v) => sum + v, 0) / values.length).toFixed(2))
      : 0;

    return {
      pillar,
      average,
      risk:
        average < 2 ? 'Critique' : average < 3 ? 'Élevé' : average < 4 ? 'Modéré' : 'Faible'
    };
  });

  const globalScore = pillarScores.length
    ? Number((pillarScores.reduce((sum, item) => sum + item.average, 0) / pillarScores.length).toFixed(2))
    : 0;

  const maturity = maturityLabels.find((item) => globalScore < item.max) ?? maturityLabels[maturityLabels.length - 1];

  const weakest = [...pillarScores].sort((a, b) => a.average - b.average)[0];
  const strongest = [...pillarScores].sort((a, b) => b.average - a.average)[0];

  return {
    totalAnswered,
    completionRate: Math.round((totalAnswered / questions.length) * 100),
    globalScore,
    maturity,
    pillarScores,
    weakest,
    strongest
  };
}
