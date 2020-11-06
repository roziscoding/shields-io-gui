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
  <div class="field">
    <label class="label" :for="id">{{ label }}&nbsp;</label>
    <div class="control">
      <input
        class="input"
        :type="type"
        :id="id"
        :name="name"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
