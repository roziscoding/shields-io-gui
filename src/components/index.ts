import { App } from 'vue'
import VInput from './VInput.vue'
import VSelect from './VSelect.vue'

const components = {
  VInput,
  VSelect
}

export function install(app: App<Element>) {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })
}

export default {
  install
}
