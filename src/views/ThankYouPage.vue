<template>
  <div class="min-h-screen bg-gradient-to-br from-didask-light via-white to-indigo-50 flex items-center justify-center px-4">
    <div class="max-w-2xl w-full">
      <!-- Success Card -->
      <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <!-- Success Icon -->
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>

        <!-- Title -->
        <h1 class="text-3xl md:text-4xl font-bold text-didask-dark mb-4">
          Merci pour votre achat ! 🎉
        </h1>

        <!-- Subtitle -->
        <p class="text-lg text-didask-muted mb-8">
          Votre paiement a été confirmé avec succès. Vous pouvez maintenant accéder à votre formation.
        </p>

        <!-- Access Card -->
        <div class="bg-gradient-to-br from-didask-primary to-didask-secondary rounded-xl p-1 mb-8">
          <div class="bg-white rounded-lg p-6">
            <div class="flex items-center justify-center gap-3 mb-4">
              <div class="w-12 h-12 bg-didask-light rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-didask-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-didask-dark">Accéder à votre formation</h2>
            </div>
            
            <p class="text-didask-muted mb-6">
              Cliquez sur le bouton ci-dessous pour accéder immédiatement à votre espace de formation sur la plateforme Didask.
            </p>

            <a 
              :href="formationLink" 
              target="_blank"
              class="inline-flex items-center justify-center w-full py-4 text-lg font-semibold text-white bg-didask-primary hover:bg-didask-secondary rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Accéder à ma formation
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Instructions -->
        <div class="bg-didask-light rounded-xl p-6 text-left mb-8">
          <h3 class="font-semibold text-didask-dark mb-4 flex items-center">
            <svg class="w-5 h-5 text-didask-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Instructions importantes
          </h3>
          <ul class="space-y-3 text-didask-text">
            <li class="flex items-start">
              <span class="w-6 h-6 bg-didask-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">1</span>
              <span>Cliquez sur le bouton "Accéder à ma formation" ci-dessus</span>
            </li>
            <li class="flex items-start">
              <span class="w-6 h-6 bg-didask-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">2</span>
              <span>Connectez-vous ou créez votre compte sur la plateforme Didask</span>
            </li>
            <li class="flex items-start">
              <span class="w-6 h-6 bg-didask-primary text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">3</span>
              <span>Commencez votre apprentissage immédiatement !</span>
            </li>
          </ul>
        </div>

        <!-- Email Notice -->
        <div class="flex items-center justify-center gap-2 text-didask-muted">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span>Un email de confirmation vous a été envoyé par Stripe</span>
        </div>

        <!-- Back to Home -->
        <div class="mt-8 pt-6 border-t border-gray-100">
          <router-link 
            to="/" 
            class="text-didask-primary hover:text-didask-secondary font-medium transition"
          >
            ← Retour à l'accueil
          </router-link>
        </div>
      </div>

      <!-- Support -->
      <p class="text-center text-didask-muted mt-6">
        Un problème ? Contactez-nous à <a href="mailto:support@didask.com" class="text-didask-primary hover:underline">support@didask.com</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { config } from '../config.js'

const formationLink = config.formationLink
</script>
