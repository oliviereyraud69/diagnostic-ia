'use client';

import { useState } from 'react';

type Props = {
  resultSummary: string;
  callUrl?: string;
};

export function LeadCaptureForm({ resultSummary, callUrl }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    setMessage('');

    const payload = Object.fromEntries(formData.entries());
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, resultSummary })
    });

    const data = await response.json();

    if (!response.ok) {
      setStatus('error');
      setMessage(data.error || 'Impossible d’envoyer le formulaire pour le moment.');
      return;
    }

    setStatus('success');
    setMessage(data.message || 'Merci, votre demande a bien été envoyée.');
  }

  return (
    <div className="ctaCard">
      <div>
        <span className="eyebrow">Call to action</span>
        <h3>Recevez votre débrief personnalisé</h3>
        <p>
          Laissez vos coordonnées pour obtenir une lecture experte de votre score,
          vos 3 priorités d’action et une proposition d’échange.
        </p>
      </div>

      <form
        action={handleSubmit}
        className="leadForm"
      >
        <div className="grid2">
          <input name="firstName" placeholder="Prénom" required />
          <input name="lastName" placeholder="Nom" required />
        </div>
        <div className="grid2">
          <input name="email" type="email" placeholder="Email professionnel" required />
          <input name="company" placeholder="Entreprise" required />
        </div>
        <div className="grid2">
          <input name="phone" placeholder="Téléphone" />
          <input name="employees" placeholder="Taille d’entreprise" />
        </div>
        <textarea
          name="context"
          rows={4}
          placeholder="Quel est votre enjeu principal autour de l’IA aujourd’hui ?"
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Envoi en cours…' : 'Être recontacté'}
        </button>
        {callUrl ? (
          <a href={callUrl} className="secondaryCta" target="_blank" rel="noreferrer">
            Réserver directement un créneau
          </a>
        ) : null}
        {message ? <p className={`formMessage ${status}`}>{message}</p> : null}
      </form>
    </div>
  );
}
