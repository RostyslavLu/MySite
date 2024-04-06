<script setup>
import { ref, onMounted } from 'vue'

const animatedText = ref('')
const text = 'My name is Rostyslav Luchyshyn and I\'m a web developer'

onMounted(() => {
  let i = 0
  setTimeout(() => {
    const interval = setInterval(() => {
      if (i < text.length) {
        animatedText.value += text.charAt(i)
        i++
      } else {
        clearInterval(interval)
      }
    }, 70)
  }, 1000)
})

</script>

<template>
  <Transition name="fade" appear>
    <header class="main-header">
      <img src="@/assets/img/photos/img-laptop.jpg" alt="Laptop" />
      <div class="main-header-text">
        <h1>My Portfolio</h1>
        <p class="fade-in-text">{{ animatedText }}</p>
      </div>
    </header>
  </Transition>
</template>
