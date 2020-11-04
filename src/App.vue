<script lang="ts">
  import { computed, ref } from 'vue'
  export default {
    name: 'App',
    data: () => ({
      styles: ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social']
    }),
    setup() {
      const label = ref('')
      const message = ref('Docker')
      const color = ref('2496ED')
      const style = ref('flat-square')
      const logo = ref('docker')
      const logoColor = ref('white')

      const url = computed(() => {
        const params = Object.entries({
          style,
          logo,
          logoColor
        }).reduce(
          (result, [name, { value }]) => `${result ? `${result}&` : result}${name}=${value}`,
          ''
        )

        return `https://img.shields.io/badge/${label.value}-${message.value}-${color.value}?${params}`
      })

      const alt = computed(() => `${label.value} ${message.value}`.trim())

      return {
        label,
        message,
        color,
        url,
        alt,
        style,
        logo,
        logoColor
      }
    }
  }
</script>

<template>
  <v-input label="Label" type="text" name="label" id="label" v-model="label" /><br /><br />
  <v-input label="Message" type="text" name="message" id="message" v-model="message" /><br /><br />
  <v-input label="Color" type="text" name="color" id="color" v-model="color" /><br /><br />
  <v-input label="Logo" type="text" name="logo" id="logo" v-model="logo" /><br /><br />
  <v-input
    label="Logo Color"
    type="text"
    name="logoColor"
    id="logoColor"
    v-model="logoColor"
  /><br /><br />
  <v-select
    label="Style"
    name="style"
    id="style"
    v-model="style"
    :options="styles"
  /><br /><br /><br />

  Preview:
  <br /><br />
  <img :src="url" :alt="alt" :height="50" />
  <br /><br />
  Code:
  <br /><br />
  URL:
  <code
    ><a :href="url">{{ url }}</a></code
  ><br />
  HTML: <code> &lt;img src=&quot;{{ url }}&quot; alt=&quot;{{ alt }}&quot; /&gt; </code><br />
  Markdown: <code>![{{ alt }}]({{ url }})</code>
</template>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
