// Configuration de l'application
// Modifiez ces valeurs selon votre projet

export const config = {
  // Prix de la formation
  price: 297,
  originalPrice: 497,

  // Stripe Payment Link
  // Créez votre lien sur: https://dashboard.stripe.com/payment-links
  // Configurez la redirection post-paiement vers: https://votre-domaine.com/merci
  stripePaymentLink: 'https://buy.stripe.com/test_cNi3cv01e9zhaLoeEL9AA00',

  // Lien vers la formation Didask (après paiement)
  formationLink: 'https://www.didask.com/',

  // Informations de contact
  supportEmail: 'support@didask.com',
}
