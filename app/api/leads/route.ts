import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.LEAD_NOTIFICATION_EMAIL;
    const from = process.env.EMAIL_FROM || 'AI Scorecard <onboarding@resend.dev>';

    if (!resendApiKey || !recipient) {
      return Response.json(
        {
          error:
            'Le formulaire est prêt, mais il manque RESEND_API_KEY ou LEAD_NOTIFICATION_EMAIL dans les variables d’environnement.'
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const subject = `Nouveau lead IA - ${body.company || 'Entreprise inconnue'}`;

    await resend.emails.send({
      from,
      to: [recipient],
      replyTo: body.email,
      subject,
      text: [
        `Prénom: ${body.firstName || ''}`,
        `Nom: ${body.lastName || ''}`,
        `Email: ${body.email || ''}`,
        `Entreprise: ${body.company || ''}`,
        `Téléphone: ${body.phone || ''}`,
        `Taille: ${body.employees || ''}`,
        `Contexte: ${body.context || ''}`,
        '',
        'Résumé du score:',
        body.resultSummary || ''
      ].join('\n')
    });

    return Response.json({ message: 'Merci, votre demande a bien été envoyée.' });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error ? error.message : 'Erreur inconnue lors de l’envoi du lead.'
      },
      { status: 500 }
    );
  }
}
