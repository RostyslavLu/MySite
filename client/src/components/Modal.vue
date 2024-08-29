<script setup>
import { defineProps, defineEmits } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])
</script>

<template>
  <!-- Modal template -->
  <Transition name="modal">
    <div class="modal" v-if="show" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <slot name="header">default header</slot>
          <button
            class="modal-close-btn"
            title="Close"
            @click="emit('close')">
              <FontAwesomeIcon :icon="faXmark" />
          </button>
        </div>
        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
