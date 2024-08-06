<script setup>
import { ref, onMounted, watch } from 'vue'
import { i18n } from '@/i18n'

const t = i18n.global.t

const animatedText = ref('')
let text = t('message.slogan')

const updateAnimatedText = () => {
  animatedText.value = ''
  let i = 0
  const interval = setInterval(() => {
    if (i < text.length) {
      animatedText.value += text.charAt(i)
      i++
    } else {
      clearInterval(interval)
    }
  }, 30)
}

onMounted(() => {
  updateAnimatedText()
})

watch(() => i18n.global.locale.value, () => {
  text = t('message.slogan')
  updateAnimatedText()
})

</script>

<template>
  <Transition name="fade" appear>
    <header class="main-header">
      <img src="@/assets/img/photos/img-laptop.jpg" alt="Laptop" loading="lazy"/>
      <div class="main-header-text">
        <h1>{{ t('message.title') }}</h1>
        <p class="fade-in-text">{{ animatedText }}&nbsp;</p>
        <router-link to="/projects" class="btn">{{ t('navigation.projects') }}</router-link>
      </div>
    </header>
  </Transition>
</template>
