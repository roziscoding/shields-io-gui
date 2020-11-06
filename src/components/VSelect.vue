<script lang="ts">
  import { defineComponent, PropType } from 'vue'

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
        type: Array as PropType<{ name: string; value: string }[]>,
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
  <div class="field">
    <label class="label" :for="id">{{ label }}</label>
    <!-- <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div> -->
    <div class="select">
      <select
        :name="name"
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
        <option v-for="option in options" :value="option.value" :key="option.value">
          {{ option.name }}
        </option>
      </select>
    </div>
  </div>
</template>
