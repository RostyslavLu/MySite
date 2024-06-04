<script setup>
import ContactForm from '@/components/ContactForm.vue'
import ContactSocial from '@/components/ContactSocial.vue'
</script>

<template>
  <main>
    <section class="contact-section">
      <h1 class="section-title">{{ $t('contactForm.title') }}</h1>
      <div class="contact-container">
        <ContactForm
          :form="form"
          :errors="errors"
          :onSubmit="onSubmit"
          :sent="sent"
        />
        <ContactSocial />
      </div>
    </section>
  </main>
</template>
