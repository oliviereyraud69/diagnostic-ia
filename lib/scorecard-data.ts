export type Question = {
  pillar: string;
  subDimension: string;
  question: string;
  guide: string;
};

export const pillars = [
  "Vision & Gouvernance",
  "Data & Knowledge",
  "Usage & Adoption IA",
  "Engineering & Delivery",
  "Platform & Scaling"
] as const;

export const questions: Question[] = [
  {
    "pillar": "Vision & Gouvernance",
    "subDimension": "Stratégie",
    "question": "L’organisation dispose d’une stratégie IA explicite, alignée avec ses priorités business et traduite en objectifs concrets à 12 mois.",
    "guide": "1 = aucune vision formalisée ; 3 = ambitions évoquées mais non traduites ; 5 = vision documentée, sponsorisée et reliée à des priorités métier."
  },
  {
    "pillar": "Vision & Gouvernance",
    "subDimension": "Cadre d’usage",
    "question": "Les collaborateurs savent précisément quels usages de l’IA sont autorisés, interdits ou soumis à conditions, et cette règle est cohérente entre les équipes.",
    "guide": "1 = flou total ; 3 = règles partielles / selon les équipes ; 5 = cadre clair, documenté et compris."
  },
  {
    "pillar": "Vision & Gouvernance",
    "subDimension": "Gestion des risques",
    "question": "Les risques liés à l’IA (fuite de données, confidentialité, conformité, hallucinations, propriété intellectuelle) sont pris en compte avec des garde-fous opérationnels.",
    "guide": "1 = non traité ; 3 = sensibilisation ou règles partielles ; 5 = cadre de contrôle et pratiques en place."
  },
  {
    "pillar": "Vision & Gouvernance",
    "subDimension": "Sponsorship",
    "question": "La direction soutient activement l’adoption de l’IA par des arbitrages, de la communication, des moyens et des priorités assumées.",
    "guide": "1 = pas de sponsor ; 3 = sponsor informel ; 5 = sponsor exécutif visible et engagé."
  },
  {
    "pillar": "Vision & Gouvernance",
    "subDimension": "Ownership",
    "question": "Les rôles et responsabilités autour de l’IA sont clairs (métier, data, sécurité, IT, juridique, pilotage).",
    "guide": "1 = aucun ownership ; 3 = responsabilités partielles ; 5 = gouvernance claire et connue."
  },
  {
    "pillar": "Data & Knowledge",
    "subDimension": "Accessibilité",
    "question": "Les données nécessaires aux cas d’usage sont faciles à trouver et à obtenir sans parcours long ni dépendance forte à quelques experts.",
    "guide": "1 = difficile et lent ; 3 = accessible avec effort ; 5 = accès fluide et documenté."
  },
  {
    "pillar": "Data & Knowledge",
    "subDimension": "Qualité",
    "question": "Les données utilisées sont suffisamment fiables, complètes et à jour pour être exploitées en analyse ou dans des usages IA.",
    "guide": "1 = qualité faible ; 3 = qualité variable ; 5 = qualité maîtrisée."
  },
  {
    "pillar": "Data & Knowledge",
    "subDimension": "Silos",
    "question": "Les données critiques sont peu silotées entre outils, équipes et fonctions, ou au moins fédérées de façon exploitable.",
    "guide": "1 = silos forts ; 3 = fédération partielle ; 5 = vue unifiée ou facilement fédérée."
  },
  {
    "pillar": "Data & Knowledge",
    "subDimension": "Gouvernance",
    "question": "Des data owners / stewards sont identifiés pour les domaines de données clés, avec des responsabilités de qualité et d’accès.",
    "guide": "1 = aucun owner ; 3 = ownership partiel ; 5 = ownership clair et actif."
  },
  {
    "pillar": "Data & Knowledge",
    "subDimension": "Time-to-data",
    "question": "Lorsqu’une équipe a besoin d’une donnée clé pour décider ou construire un use case, elle peut l’obtenir rapidement.",
    "guide": "1 = plusieurs jours / semaines ; 3 = quelques heures ; 5 = moins d’une heure dans la plupart des cas."
  },
  {
    "pillar": "Usage & Adoption IA",
    "subDimension": "Adoption réelle",
    "question": "L’IA est effectivement utilisée dans les équipes sur des tâches réelles, au-delà des démonstrations ou des tests ponctuels.",
    "guide": "1 = usage rare ; 3 = usage occasionnel ; 5 = usage régulier et installé."
  },
  {
    "pillar": "Usage & Adoption IA",
    "subDimension": "Cas d’usage métier",
    "question": "Les usages IA sont reliés à des cas d’usage concrets avec un impact attendu sur productivité, qualité, revenu, délai ou satisfaction client.",
    "guide": "1 = pas de cas d’usage clair ; 3 = quelques POCs ; 5 = cas d’usage priorisés et reliés à des objectifs métier."
  },
  {
    "pillar": "Usage & Adoption IA",
    "subDimension": "Mesure de la valeur",
    "question": "Les gains apportés par l’IA sont mesurés ou au moins suivis avec des indicateurs crédibles.",
    "guide": "1 = aucun suivi ; 3 = appréciation qualitative ; 5 = mesure structurée et partagée."
  },
  {
    "pillar": "Usage & Adoption IA",
    "subDimension": "Compétences",
    "question": "Les équipes savent utiliser l’IA de manière pertinente : formulation de demandes, vérification, intégration dans les processus, esprit critique.",
    "guide": "1 = faible maturité ; 3 = compétence hétérogène ; 5 = bonnes pratiques diffusées."
  },
  {
    "pillar": "Usage & Adoption IA",
    "subDimension": "Contexte interne",
    "question": "Les outils IA peuvent exploiter du contexte interne utile (documents, FAQ, code, référentiels, procédures) de manière maîtrisée.",
    "guide": "1 = aucun contexte ; 3 = accès partiel ; 5 = contexte interne accessible et utile."
  },
  {
    "pillar": "Engineering & Delivery",
    "subDimension": "Versioning",
    "question": "Les artefacts importants (code, configuration, scripts, prompts, règles, documentation utile) sont versionnés de manière rigoureuse.",
    "guide": "1 = versioning partiel ; 3 = versioning correct mais incomplet ; 5 = couverture robuste."
  },
  {
    "pillar": "Engineering & Delivery",
    "subDimension": "Petits lots",
    "question": "Les équipes savent découper les changements en petits lots, plus faciles à tester, relire, déployer et corriger.",
    "guide": "1 = gros lots ; 3 = découpage irrégulier ; 5 = petits lots fréquents."
  },
  {
    "pillar": "Engineering & Delivery",
    "subDimension": "Rollback",
    "question": "En cas de problème, il est simple et rapide de revenir à un état stable sans forte mobilisation collective.",
    "guide": "1 = rollback difficile ; 3 = possible mais coûteux ; 5 = rollback rapide et maîtrisé."
  },
  {
    "pillar": "Engineering & Delivery",
    "subDimension": "Stabilité",
    "question": "L’augmentation de vitesse liée à l’IA n’entraîne pas de dégradation notable de la qualité, de la stabilité ou de la sécurité.",
    "guide": "1 = instabilité forte ; 3 = stabilité variable ; 5 = vitesse maîtrisée."
  },
  {
    "pillar": "Engineering & Delivery",
    "subDimension": "Intégration IA",
    "question": "L’IA est intégrée de façon utile dans le cycle de delivery (analyse, dev, test, documentation, support, ops) sans créer de chaos.",
    "guide": "1 = non intégrée ; 3 = usages ponctuels ; 5 = intégration utile et cadrée."
  },
  {
    "pillar": "Platform & Scaling",
    "subDimension": "Plateforme",
    "question": "L’organisation met à disposition des outils, composants ou services facilitant l’usage de l’IA de manière homogène et sécurisée.",
    "guide": "1 = rien de structuré ; 3 = briques partielles ; 5 = socle clair et utilisé."
  },
  {
    "pillar": "Platform & Scaling",
    "subDimension": "Industrialisation",
    "question": "Les cas d’usage IA ne restent pas à l’état de POC : ils peuvent être mis en production, maintenus et pilotés.",
    "guide": "1 = POCs isolés ; 3 = industrialisation partielle ; 5 = passage en production maîtrisé."
  },
  {
    "pillar": "Platform & Scaling",
    "subDimension": "Self-service",
    "question": "Les équipes accèdent relativement facilement aux outils, environnements ou jeux de données nécessaires sans dépendance excessive.",
    "guide": "1 = forte dépendance ; 3 = autonomie partielle ; 5 = self-service crédible."
  },
  {
    "pillar": "Platform & Scaling",
    "subDimension": "Intégration SI",
    "question": "Les outils IA sont intégrés au SI et aux workflows existants plutôt que superposés de manière opportuniste.",
    "guide": "1 = outils isolés ; 3 = intégrations partielles ; 5 = intégration cohérente."
  },
  {
    "pillar": "Platform & Scaling",
    "subDimension": "Scalabilité",
    "question": "Les solutions IA peuvent être répliquées à plus grande échelle (équipes, métiers, pays, cas d’usage) sans explosion de complexité.",
    "guide": "1 = non scalable ; 3 = extension limitée ; 5 = scaling possible et gouverné."
  }
];


export const maturityLabels = [
  { max: 2, label: "1 - Exploratoire", description: "Les fondations limitent fortement la création de valeur par l’IA." },
  { max: 3, label: "2 - Expérimentation", description: "La dynamique existe, mais elle reste fragmentée et peu pilotée." },
  { max: 4, label: "3 - Structuré", description: "L’organisation avance avec des bases sérieuses, mais plusieurs accélérateurs restent à consolider." },
  { max: 4.5, label: "4 - Industriel", description: "Les capacités clés sont en place pour déployer l’IA à l’échelle." },
  { max: 5.1, label: "5 - AI-driven", description: "L’IA est pilotée comme un levier stratégique et opérationnel au quotidien." }
] as const;

export const defaultCta = {
  title: "Recevez votre débrief personnalisé",
  subtitle: "Laissez vos coordonnées pour obtenir une lecture experte de votre score et identifier vos 3 priorités d’action.",
  button: "Être recontacté"
};
