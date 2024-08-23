<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { i18n } from '@/i18n'
import HeaderBtn from '@/components/HeaderBtn.vue'
const t = i18n.global.t

const animatedText = ref('')
let text = t('message.slogan')

const DownloadCv = computed(() => t('resume.downloadCvTitle'))
const Portfolio = computed(() => t('navigation.projects'))

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

const DownloadDocument = () => {
  const link = document.createElement('a')
  link.href = '@/assets/doc/CV - Rostyslav Luchyshyn.pdf'
  link.download = 'CV-RL.pdf'
  link.click()
}
</script>

<template>
  <Transition name="fade" appear>
    <header class="main-header">
      <img src="@/assets/img/photos/img-laptop.jpg" alt="Laptop" loading="lazy"/>
      <div class="main-header-text">
        <h1>{{ t('message.title') }}</h1>
        <p class="fade-in-text">{{ animatedText }}&nbsp;</p>
        <div class="main-header-buttons">
          <HeaderBtn
            :titleBtn="DownloadCv"
            :action="DownloadDocument"
          />
          <HeaderBtn
            :titleBtn="Portfolio"
            :action="() => $router.push('/projects')"
          />
        </div>
      </div>
    </header>
  </Transition>
</template>

<style scoped>
.main-header-buttons {
  display: flex;
  gap: var(--space-lg);
  flex-wrap: wrap;
}

</style>
