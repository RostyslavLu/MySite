<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showArrow = ref(false)

const handleScroll = () => {
  showArrow.value = (window.innerHeight + window.scrollY) < document.body.offsetHeight
}

onMounted(() => {
  setTimeout(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  }, 1500)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- Scroll Arrow template -->
  <div class="scroll-to-top" v-if="showArrow">
    <FontAwesomeIcon :icon="faAnglesDown" />
  </div>
</template>
