<script setup>
import { useI18n } from 'vue-i18n'
import photos from '../photo.json'
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const { t } = useI18n()

const gallery = ref(photos.gallery)

</script>

<template>
<!-- Photo Gallery -->
<main>
  <section class="page-container">
    <h1 class="section-title">{{ t('gallery.title') }}</h1>
      <div class="gallery">
        <div class="gallery-item" v-for="photo in gallery" :key="photo.id">
          <img :src="`/gallery/web/${photo.url}`" :alt="photo.title" />
          <button class="gallery-item-add-to-cart" @click="addToCart(photo)">
            <FontAwesomeIcon :icon="faShoppingCart" />
          </button>
        </div>
      </div>
  </section>
</main>
</template>

<style scoped>
.gallery-item {
  position: relative;
}
.gallery-item-add-to-cart {
  height: 50px;
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.01);
  border: none;
}
.gallery {
  width: min(1000px, 100%);
  margin: 0 auto;
  columns: 2 300px;
  column-gap: 1rem;
}

.gallery-item > img {
  display: block;
  margin-bottom: 1rem;
  filter: grayscale(50%);
}

.gallery-item > img:hover {
  filter: grayscale(0%);
  transition: 0.5s;
}

</style>
