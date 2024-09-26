<script setup>
import InputText from '@/components/InputText.vue'
import Textarea from '@/components/Textarea.vue'
import Label from '@/components/Label.vue'
import InputError from '@/components/InputError.vue'
import EmailDataService from '@/services/EmailDataService'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import VueCaptcha from './VueCaptcha.vue'

const sent = ref(false)
const { t } = useI18n()
const form = ref({
  name: '',
  email: '',
  message: ''
})
const captchaToken = ref('')
const loading = ref(false)

const handleToken = (token) => {
  captchaToken.value = token
}
const errors = ref({
  name: '',
  email: '',
  message: ''
})
// form validation and sending the email
const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

const validateForm = () => {
  if (form.value.name === '' || form.value.email === '' || form.value.message === '' || !validateEmail(form.value.email)) {
    if (form.value.name === '') {
      errors.value.name = t('contactForm.requiredName')
    } else {
      errors.value.name = ''
    }
    if (form.value.email === '') {
      errors.value.email = t('contactForm.requiredEmail')
    } else if (!validateEmail(form.value.email)) {
      errors.value.email = t('contactForm.requiredSymolsEmail')
    } else {
      errors.value.email = ''
    }
    if (form.value.message === '') {
      errors.value.message = t('contactForm.requiredMessage')
    } else {
      errors.value.message = ''
    }
    return false
  }
  errors.value.name = ''
  errors.value.email = ''
  errors.value.message = ''
  return true
}

const onSubmit = async (e) => {
  e.preventDefault()
  if (!validateForm()) {
    triggerShake(e)
    return
  } else if (!captchaToken.value) {
    e.target.querySelector('.checkbox-button').classList.add('captcha-not-verified')
    setTimeout(() => {
      e.target.querySelector('.checkbox-button').classList.remove('captcha-not-verified')
    }, 500)
    return
  }
  loading.value = true
  try {
    await EmailDataService.sendMail({
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    })
    sent.value = true
    setTimeout(() => {
      sent.value = false
      form.value.name = ''
      form.value.email = ''
      form.value.message = ''
    }, 2000)
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
    errors.value.name = ''
    errors.value.email = ''
    errors.value.message = ''
    captchaToken.value = ''
  }
}

// shake animation for the button if the form is not filled correctly
const triggerShake = (e) => {
  e.target.querySelector('.button-send').classList.add('shake')
  setTimeout(() => {
    e.target.querySelector('.button-send').classList.remove('shake')
  }, 500)
}
</script>

<template>
  <!-- Contact form -->
  <div class="contact">
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
          <Textarea id="message" v-model="form.message" name="message"
            :placeholder="$t('contactForm.placeholderMessage')" rows="8" />
        </div>
        <div class="form-captcha">
          <VueCaptcha @verified="handleToken" />
        </div>
        <button class="button-send" type="submit" :disabled="loading">{{ $t('contactForm.submit') }}</button>
      </form>
    </Transition>
  </div>
</template>
