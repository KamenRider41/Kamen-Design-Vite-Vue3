import KamenUI from '../../../src/entry'
import Theme from 'vitepress/theme'
import './style/var.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(KamenUI)
  },
}