# AI Scorecard Lead Gen

Landing page Next.js en français pour générer des leads via une auto-évaluation de maturité IA.

## Ce que contient le projet

- une landing page premium avec promesse claire
- un questionnaire de 25 questions basé sur votre scorecard Excel
- un calcul automatique du score global et des scores par pilier
- un bloc de call to action avec formulaire de capture
- un envoi d’email via Resend pour recevoir les leads
- une configuration simple pour Vercel

## Variables d’environnement

Copiez `.env.example` vers `.env.local` en local.

Variables à renseigner :

- `NEXT_PUBLIC_BRAND_NAME` : nom affiché dans la page
- `NEXT_PUBLIC_CTA_URL` : lien de prise de rendez-vous
- `RESEND_API_KEY` : clé API Resend
- `LEAD_NOTIFICATION_EMAIL` : email qui reçoit les leads
- `EMAIL_FROM` : expéditeur utilisé pour l’envoi

## Lancer en local

```bash
npm install
npm run dev
```

## Déployer sur Vercel

### Option 1 – la plus simple

1. Créez un dépôt GitHub et poussez le contenu du projet.
2. Importez le dépôt dans Vercel.
3. Ajoutez les variables d’environnement dans les settings du projet.
4. Déployez.

### Option 2 – en ligne de commande

```bash
npm install -g vercel
vercel
```

## Personnalisations rapides

- modifier les textes dans `app/page.tsx`
- changer les couleurs dans `app/globals.css`
- adapter les questions dans `lib/scorecard-data.ts`
- brancher votre URL Calendly via `NEXT_PUBLIC_CTA_URL`

## Recommandations business

- placer cette page derrière une campagne LinkedIn Ads ou email outbound
- ajouter un pixel analytics avant mise en production
- préparer un email de suivi automatique et un calendrier de prise de rendez-vous
- prévoir une page merci / confirmation si vous voulez un tunnel plus complet
