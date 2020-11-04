<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      id: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        required: true
      },
      modelValue: {
        type: String,
        required: false,
        default: ''
      }
    }
  })
</script>
<template>
  <label :for="id">{{ label }}</label>
  <select
    :name="name"
    :id="id"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option v-for="option in options" :value="option" :key="option">
      {{ option }}
    </option>
  </select>
</template>
