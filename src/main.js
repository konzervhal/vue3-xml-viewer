import './assets/xml-global.css'
import XmlViewer from './components/XmlViewer.vue'

const plugin = {
  install (Vue) {
    Vue.component("XmlViewer", XmlViewer);
  }
}

export {XmlViewer}
export default plugin
