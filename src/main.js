import './assets/_variables.css'
import './assets/xml-global.css'
import XmlViewer from './components/XmlViewer.vue'

const plugin = {
  install (Vue) {
    Vue.component("XmlViewer", XmlViewer);
  }
}

export default plugin
