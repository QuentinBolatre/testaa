<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-100">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-didask-primary">Didask</span>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#features" class="text-didask-text hover:text-didask-primary transition">Fonctionnalités</a>
            <a href="#testimonials" class="text-didask-text hover:text-didask-primary transition">Témoignages</a>
            <a href="#pricing" class="text-didask-text hover:text-didask-primary transition">Tarif</a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-didask-light via-white to-indigo-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl lg:text-5xl font-bold text-didask-dark leading-tight">
              Formez-vous efficacement avec notre 
              <span class="text-didask-primary">formation complète</span>
            </h1>
            <p class="mt-6 text-lg text-didask-muted leading-relaxed">
              Découvrez une approche pédagogique innovante, fondée sur les sciences cognitives 
              et l'intelligence artificielle, pour un apprentissage réellement transformant.
            </p>
            <div class="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                :href="stripePaymentLink" 
                class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-didask-primary hover:bg-didask-secondary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Acheter la formation
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a 
                href="#features" 
                class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-didask-primary bg-white border-2 border-didask-primary hover:bg-didask-light rounded-xl transition-all duration-300"
              >
                En savoir plus
              </a>
            </div>
            <div class="mt-8 flex items-center gap-6 text-sm text-didask-muted">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Accès immédiat
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Paiement sécurisé
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-didask-primary to-didask-secondary rounded-2xl p-8 shadow-2xl">
              <div class="bg-white rounded-xl p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 bg-didask-light rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-didask-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-didask-dark">Formation complète</h3>
                    <p class="text-sm text-didask-muted">Accès à vie</p>
                  </div>
                </div>
                <ul class="space-y-3 mb-6">
                  <li class="flex items-center text-didask-text">
                    <svg class="w-5 h-5 text-didask-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Modules vidéo interactifs
                  </li>
                  <li class="flex items-center text-didask-text">
                    <svg class="w-5 h-5 text-didask-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Exercices pratiques
                  </li>
                  <li class="flex items-center text-didask-text">
                    <svg class="w-5 h-5 text-didask-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Certificat de réussite
                  </li>
                  <li class="flex items-center text-didask-text">
                    <svg class="w-5 h-5 text-didask-primary mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Support personnalisé
                  </li>
                </ul>
                <div class="border-t pt-4">
                  <div class="flex items-baseline justify-between">
                    <span class="text-3xl font-bold text-didask-dark">{{ price }}€</span>
                    <span class="text-didask-muted line-through">{{ originalPrice }}€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-didask-dark">
            Pourquoi choisir cette formation ?
          </h2>
          <p class="mt-4 text-lg text-didask-muted max-w-2xl mx-auto">
            Une approche pédagogique unique, conçue pour maximiser votre apprentissage
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-didask-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-didask-primary rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-didask-dark mb-3">Sciences cognitives</h3>
            <p class="text-didask-muted">
              Méthodes d'apprentissage validées scientifiquement pour une rétention optimale des connaissances.
            </p>
          </div>
          <div class="bg-didask-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-didask-secondary rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-didask-dark mb-3">Apprentissage actif</h3>
            <p class="text-didask-muted">
              Exercices interactifs et mises en situation pour ancrer les compétences dans la pratique.
            </p>
          </div>
          <div class="bg-didask-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-didask-accent rounded-xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-didask-dark mb-3">À votre rythme</h3>
            <p class="text-didask-muted">
              Accédez à la formation quand vous voulez, où vous voulez, et progressez à votre propre rythme.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 bg-gradient-to-br from-didask-light to-indigo-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-didask-dark">
            Ce qu'en disent nos apprenants
          </h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
            <p class="text-didask-text mb-6">
              "Une formation exceptionnelle ! Les concepts sont expliqués clairement et les exercices pratiques m'ont vraiment aidé à progresser."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-didask-primary rounded-full flex items-center justify-center text-white font-semibold">
                ML
              </div>
              <div class="ml-3">
                <p class="font-semibold text-didask-dark">Marie L.</p>
                <p class="text-sm text-didask-muted">Responsable RH</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
            <p class="text-didask-text mb-6">
              "J'ai suivi beaucoup de formations en ligne, mais celle-ci est vraiment différente. L'approche pédagogique est remarquable."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-didask-secondary rounded-full flex items-center justify-center text-white font-semibold">
                TD
              </div>
              <div class="ml-3">
                <p class="font-semibold text-didask-dark">Thomas D.</p>
                <p class="text-sm text-didask-muted">Chef de projet</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
            </div>
            <p class="text-didask-text mb-6">
              "Le meilleur investissement que j'ai fait cette année. Les résultats sont visibles immédiatement dans mon travail quotidien."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-didask-accent rounded-full flex items-center justify-center text-white font-semibold">
                SB
              </div>
              <div class="ml-3">
                <p class="font-semibold text-didask-dark">Sophie B.</p>
                <p class="text-sm text-didask-muted">Consultante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-didask-dark mb-4">
          Prêt à transformer votre apprentissage ?
        </h2>
        <p class="text-lg text-didask-muted mb-8">
          Rejoignez des milliers d'apprenants qui ont déjà fait le choix de l'excellence
        </p>
        <div class="bg-gradient-to-br from-didask-primary to-didask-secondary rounded-2xl p-1">
          <div class="bg-white rounded-xl p-8">
            <div class="flex items-baseline justify-center gap-4 mb-6">
              <span class="text-5xl font-bold text-didask-dark">{{ price }}€</span>
              <span class="text-xl text-didask-muted line-through">{{ originalPrice }}€</span>
            </div>
            <p class="text-didask-muted mb-8">Paiement unique • Accès à vie</p>
            <a 
              :href="stripePaymentLink" 
              class="block w-full py-4 text-lg font-semibold text-white bg-didask-primary hover:bg-didask-secondary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Acheter maintenant
            </a>
            <p class="mt-4 text-sm text-didask-muted">
              🔒 Paiement 100% sécurisé par Stripe
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-didask-dark py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-white mb-4 md:mb-0">
            <span class="text-2xl font-bold">Didask</span>
            <p class="text-gray-400 mt-2">Formez efficacement, à grande échelle</p>
          </div>
          <div class="flex gap-6 text-gray-400">
            <a href="#" class="hover:text-white transition">Mentions légales</a>
            <a href="#" class="hover:text-white transition">CGV</a>
            <a href="#" class="hover:text-white transition">Contact</a>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 Didask. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { config } from '../config.js'

const price = config.price
const originalPrice = config.originalPrice
const stripePaymentLink = config.stripePaymentLink
</script>
