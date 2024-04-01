<script setup>
import FooterView from '@/components/FooterView.vue'
import InputText from '@/components/InputText.vue'
import Textarea from '@/components/Textarea.vue'
import Label from '@/components/Label.vue'
import InputError from '@/components/InputError.vue'
import EmailDataService from '@/services/EmailDataService'
import { ref } from 'vue'

const sent = ref(false)

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
      errors.value.name = 'Name is required'
    } else {
      errors.value.name = ''
    }
    if (form.value.email === '') {
      errors.value.email = 'Email is required'
    } else if (form.value.email.indexOf('@') === -1 || form.value.email.indexOf('.') === -1) {
      errors.value.email = 'Email must have "@" and "."'
    } else {
      errors.value.email = ''
    }
    if (form.value.message === '') {
      errors.value.message = 'Message is required'
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
        <p>Thank you for your message!</p>
      </div>
    </Transition>
    <Transition name="form">
      <form v-if="!sent" class="contact-form" @submit="onSubmit">
        <h2>Contact me</h2>
        <div class="form-group">
          <div class="input-label">
            <Label
              for="name"
              label="Name"
            />
            <InputError :message="errors.name" />
          </div>
          <InputText
            id="name"
            type="text"
            v-model="form.name"
            name="name"
            autocomplete="name"
            placeholder="ex. John Doe"
          />
        </div>
        <div class="form-group">
          <div class="input-label">
            <Label
              for="email"
              label="Email"
            />
            <InputError :message="errors.email" />
          </div>
          <InputText
            id="email"
            type="text"
            v-model="form.email"
            name="email"
            autocomplete="email"
            placeholder="ex. john@example.com"
          />
        </div>
        <div class="form-group">
          <div class="input-label">
            <Label
              for="message"
              label="Message"
            />
            <InputError :message="errors.message" />
          </div>
          <Textarea
            id="message"
            v-model="form.message"
            name="message"
            placeholder="Write your message here"
            rows="15"
          />
        </div>
        <button class="button-send" type="submit">Send</button>
      </form>
    </Transition>
  </main>
  <FooterView />
</template>
