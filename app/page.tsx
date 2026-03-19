'use client';

import { useMemo, useState } from 'react';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';
import { questions } from '@/lib/scorecard-data';
import { computeResults, type Answers } from '@/lib/scoring';

const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'Votre cabinet';
const callUrl = process.env.NEXT_PUBLIC_CTA_URL || process.env.NEXT_PUBLIC_CALENDLY_URL || '';

export default function HomePage() {
  const [answers, setAnswers] = useState<Answers>({});

  const results = useMemo(() => computeResults(answers), [answers]);
  const isComplete = results.totalAnswered === questions.length;
  const summaryText = [
    `Score global: ${results.globalScore}/5`,
    `Niveau: ${results.maturity.label}`,
    `Complétion: ${results.completionRate}%`,
    ...results.pillarScores.map((item) => `${item.pillar}: ${item.average}/5 (${item.risk})`)
  ].join(' | ');

  return (
    <main>
      <section className="hero">
        <div className="heroCopy">
          <span className="eyebrow">Lead magnet B2B</span>
          <h1>Évaluez en 7 minutes la maturité IA de votre organisation</h1>
          <p className="lede">
            Une landing page pensée pour convertir des prospects en rendez-vous qualifiés.
            Le visiteur répond à 25 questions, découvre son niveau de maturité et laisse ses coordonnées
            pour obtenir un débrief personnalisé.
          </p>
          <div className="heroPoints">
            <span>✓ Positionnement premium</span>
            <span>✓ Diagnostic immédiat</span>
            <span>✓ CTA orienté rendez-vous</span>
          </div>
          <a href="#assessment" className="primaryCta">Commencer l’auto-évaluation</a>
        </div>
        <div className="heroCard">
          <p className="miniTitle">Promesse</p>
          <h2>Transformez un simple visiteur en lead qualifié</h2>
          <ul>
            <li>Score global sur 5</li>
            <li>Lecture par pilier</li>
            <li>Détection des points faibles</li>
            <li>Capture des coordonnées après valeur perçue</li>
          </ul>
        </div>
      </section>

      <section className="proof">
        <div>
          <strong>25 questions</strong>
          <span>basées sur votre scorecard</span>
        </div>
        <div>
          <strong>5 piliers</strong>
          <span>gouvernance, data, usage, delivery, scale</span>
        </div>
        <div>
          <strong>1 CTA</strong>
          <span>débrief personnalisé / prise de rendez-vous</span>
        </div>
      </section>

      <section id="assessment" className="assessmentSection">
        <div className="sectionHeading">
          <span className="eyebrow">Auto-évaluation</span>
          <h2>Répondez aux questions et obtenez votre score</h2>
          <p>Barème simple : 1 = très faible maturité, 5 = niveau très structuré.</p>
        </div>

        <div className="assessmentLayout">
          <div className="questionsPanel">
            {questions.map((item, index) => (
              <article key={`${item.pillar}-${index}`} className="questionCard">
                <div className="questionMeta">
                  <span>{item.pillar}</span>
                  <span>{item.subDimension}</span>
                </div>
                <h3>{index + 1}. {item.question}</h3>
                <p className="guide">{item.guide}</p>
                <div className="scoreRow">
                  {[1, 2, 3, 4, 5].map((score) => (
                    <label key={score} className={answers[index] === score ? 'scoreOption active' : 'scoreOption'}>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={score}
                        checked={answers[index] === score}
                        onChange={() => setAnswers((current) => ({ ...current, [index]: score }))}
                      />
                      <span>{score}</span>
                    </label>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="resultsPanel">
            <div className="stickyCard">
              <span className="eyebrow">Résultat instantané</span>
              <h3>{results.globalScore ? `${results.globalScore}/5` : '—'}</h3>
              <p className="maturityLabel">{results.maturity.label}</p>
              <p>{results.maturity.description}</p>
              <div className="progressBlock">
                <div className="progressText">
                  <span>Complétion</span>
                  <strong>{results.completionRate}%</strong>
                </div>
                <div className="progressBar"><span style={{ width: `${results.completionRate}%` }} /></div>
              </div>

              <div className="pillarList">
                {results.pillarScores.map((item) => (
                  <div key={item.pillar} className="pillarItem">
                    <div>
                      <strong>{item.pillar}</strong>
                      <span>{item.risk}</span>
                    </div>
                    <strong>{item.average}/5</strong>
                  </div>
                ))}
              </div>

              {results.weakest ? (
                <div className="insightBox">
                  <p><strong>Priorité n°1 :</strong> {results.weakest.pillar}</p>
                  <p><strong>Point fort :</strong> {results.strongest?.pillar}</p>
                </div>
              ) : null}

              <LeadCaptureForm resultSummary={summaryText} callUrl={callUrl} />

              {!isComplete ? (
                <p className="note">Pour une expérience optimale, répondez aux 25 questions avant de soumettre le formulaire.</p>
              ) : null}
            </div>
          </aside>
        </div>
      </section>

      <section className="footerBand">
        <div>
          <span className="eyebrow">Personnalisation</span>
          <h2>Prêt à être déployé pour {brandName}</h2>
          <p>
            Le projet est conçu pour être modifié rapidement : texte, couleurs, URL de prise de rendez-vous,
            email de réception des leads et branding.
          </p>
        </div>
      </section>
    </main>
  );
}
