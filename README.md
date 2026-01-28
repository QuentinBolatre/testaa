# Didask Landing Page

Landing page de vente pour formation Didask avec intégration Stripe Payment Links.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
```

## ⚙️ Configuration

Modifiez le fichier `src/config.js` pour personnaliser :

```javascript
export const config = {
  // Prix affiché
  price: 297,
  originalPrice: 497,

  // Votre Stripe Payment Link
  stripePaymentLink: 'https://buy.stripe.com/VOTRE_LIEN',

  // Lien vers la formation Didask
  formationLink: 'https://lms.didask.com/votre-formation',
}
```

## 🔗 Configuration Stripe

1. Connectez-vous à [Stripe Dashboard](https://dashboard.stripe.com)
2. Allez dans **Produits** → **Payment Links**
3. Créez un nouveau Payment Link avec votre produit
4. Dans les paramètres du Payment Link, configurez :
   - **URL de redirection après paiement** : `https://votre-domaine.com/merci`
5. Copiez le lien généré dans `src/config.js`

## 📁 Structure du projet

```
didask-landing/
├── src/
│   ├── config.js          # Configuration centralisée
│   ├── router/
│   │   └── index.js       # Routes Vue Router
│   ├── views/
│   │   ├── LandingPage.vue    # Page d'accueil/vente
│   │   └── ThankYouPage.vue   # Page de confirmation
│   ├── App.vue
│   ├── main.js
│   └── style.css          # TailwindCSS
├── tailwind.config.js     # Charte graphique Didask
└── package.json
```

## 🎨 Charte graphique

Les couleurs Didask sont définies dans `tailwind.config.js` :

- `didask-primary` : Violet/Indigo principal
- `didask-secondary` : Violet secondaire
- `didask-accent` : Cyan accent
- `didask-dark` : Bleu très foncé
- `didask-light` : Gris très clair

## 📱 Pages

### Landing Page (`/`)
- Hero section avec CTA
- Fonctionnalités
- Témoignages
- Section prix

### Page Merci (`/merci`)
- Confirmation de paiement
- Lien d'accès à la formation
- Instructions

## 🚀 Déploiement

```bash
# Build
npm run build

# Les fichiers sont dans dist/
```

Compatible avec : Netlify, Vercel, ou tout hébergement statique.

