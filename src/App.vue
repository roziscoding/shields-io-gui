<script lang="ts">
  import simpleIcons from 'simple-icons'
  import { computed, ref, watch } from 'vue'

  const icons = Object.entries(simpleIcons).map(([key, value]) => ({
    name: key,
    value: (value as any).slug
  }))

  export default {
    name: 'App',
    data: () => ({
      styles: ['plastic', 'flat', 'flat-square', 'for-the-badge', 'social'].map((style) => ({
        name: style,
        value: style
      })),
      icons
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

      watch(logo, (slug) => {
        color.value = simpleIcons.get(slug).hex
      })

      const updateLogoAndColor = (text: string) => {
        const newIcon = simpleIcons.get(text)

        if (!newIcon) return

        color.value = newIcon.hex
        logo.value = newIcon.slug
      }

      watch(label, updateLogoAndColor)
      watch(message, updateLogoAndColor)

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
  <section class="section">
    <div class="container is-fluid">
      <h1 class="title">Shield.io Generator</h1>
      <div class="columns">
        <div class="column">
          <v-input label="Label" type="text" name="label" id="label" v-model="label" />
        </div>
        <div class="column">
          <v-input label="Message" type="text" name="message" id="message" v-model="message" />
        </div>
        <div class="column">
          <v-input label="Color" type="text" name="color" id="color" v-model="color" />
        </div>
        <div class="column">
          <v-select label="Logo" name="logo" id="logo" v-model="logo" :options="icons" />
        </div>
        <div class="column">
          <v-input
            label="Logo Color"
            type="text"
            name="logoColor"
            id="logoColor"
            v-model="logoColor"
          />
        </div>
        <div class="column">
          <v-select label="Style" name="style" id="style" v-model="style" :options="styles" />
        </div>
      </div>

      Preview:
      <br /><br />
      <img :src="url" :alt="alt" :height="50" />
      <br /><br />
      Code:
      <br /><br />
      URL:
      <code>{{ url }}</code
      ><br />
      HTML: <code> &lt;img src=&quot;{{ url }}&quot; alt=&quot;{{ alt }}&quot; /&gt; </code><br />
      Markdown: <code>![{{ alt }}]({{ url }})</code>

      <br />
      <br />
      <br />
    </div>
  </section>
</template>

<style lang="scss">
  @import 'bulma/sass/utilities/initial-variables';
  @import 'bulma/bulma.sass';

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
