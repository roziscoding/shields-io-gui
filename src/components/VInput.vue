<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    props: {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      modelValue: String
    }
  })
</script>

<template>
  <label :for="id">{{ label }}&nbsp;</label><br />
  <input
    :type="type"
    :id="id"
    :name="name"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
