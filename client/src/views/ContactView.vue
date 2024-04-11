<script setup>
import InputText from '@/components/InputText.vue'
import Textarea from '@/components/Textarea.vue'
import Label from '@/components/Label.vue'
import InputError from '@/components/InputError.vue'
import EmailDataService from '@/services/EmailDataService'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const sent = ref(false)
const { t } = useI18n()
const form = ref({
  name: '',
  email: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  message: ''
})

const onSubmit = (e) => {
  e.preventDefault()
  if (form.value.name === '' || form.value.email === '' || form.value.message === '' || form.value.email.indexOf('@') === -1 || form.value.email.indexOf('.') === -1) {
    if (form.value.name === '') {
      errors.value.name = t('contactForm.requiredName')
    } else {
      errors.value.name = ''
    }
    if (form.value.email === '') {
      errors.value.email = t('contactForm.requiredEmail')
    } else if (form.value.email.indexOf('@') === -1 || form.value.email.indexOf('.') === -1) {
      errors.value.email = t('contactForm.requiredSymolsEmail')
    } else {
      errors.value.email = ''
    }
    if (form.value.message === '') {
      errors.value.message = t('contactForm.requiredMessage')
    } else {
      errors.value.message = ''
    }
    triggerShake(e)
    return
  } else {
    EmailDataService.sendMail({
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
    errors.value.name = ''
    errors.value.email = ''
    errors.value.message = ''
  }

  sent.value = true
  setTimeout(() => {
    sent.value = false
    form.value.name = ''
    form.value.email = ''
    form.value.message = ''
  }, 2000)
}
const triggerShake = (e) => {
  e.target.querySelector('.button-send').classList.add('shake')
  setTimeout(() => {
    e.target.querySelector('.button-send').classList.remove('shake')
  }, 500)
}
</script>

<template>
  <main>
    <section class="contact-social">
      <h1 class="contact-title">{{ $t('contactForm.title') }}</h1>
      <div class="footer-social">
        <a href="https://github.com/RostyslavLu" target="_blank" aria-label="github">
          <svg width="36" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
              clip-rule="evenodd" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/rostyslav-luchyshyn-66350ba5/" target="_blank" aria-label="linkedin">
          <svg width="36" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
              clip-rule="evenodd" />
            <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
          </svg>
        </a>
      </div>
    <Transition name="message">
      <div v-if="sent" class="form-message">
        <p>{{ $t('contactForm.messageSuccess') }}</p>
      </div>
    </Transition>
    <Transition name="form">
      <form v-if="!sent" class="contact-form" @submit="onSubmit">
        <h2>{{ $t('contactForm.subtitle') }}</h2>
        <div class="form-group">
          <div class="input-label">
            <Label for="name" :label="$t('contactForm.name')" />
            <InputError :message="errors.name" />
          </div>
          <InputText id="name" type="text" v-model="form.name" name="name" autocomplete="name"
          :placeholder="$t('contactForm.placeholderName')" />
        </div>
        <div class="form-group">
          <div class="input-label">
            <Label for="email" :label="$t('contactForm.email')" />
            <InputError :message="errors.email" />
          </div>
          <InputText id="email" type="text" v-model="form.email" name="email" autocomplete="email"
          :placeholder="$t('contactForm.placeholderEmail')" />
        </div>
        <div class="form-group">
          <div class="input-label">
            <Label for="message" :label="$t('contactForm.message')" />
            <InputError :message="errors.message" />
          </div>
          <Textarea id="message" v-model="form.message" name="message" :placeholder="$t('contactForm.placeholderMessage')"
            rows="15" />
        </div>
        <button class="button-send" type="submit">{{ $t('contactForm.submit') }}</button>
      </form>
    </Transition>
  </section>
  </main>
</template>
