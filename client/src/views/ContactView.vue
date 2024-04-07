<script setup>
import FooterView from '@/components/FooterView.vue'
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
    <Transition name="message">
      <div v-if="sent" class="form-message">
        <p>{{ $t('contactForm.messageSuccess') }}</p>
      </div>
    </Transition>
    <Transition name="form">
      <form v-if="!sent" class="contact-form" @submit="onSubmit">
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
  </main>
  <FooterView />
</template>
