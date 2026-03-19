import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Scorecard – Auto-évaluation IA',
  description: 'Landing page d’auto-évaluation IA conçue pour générer des leads qualifiés.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
