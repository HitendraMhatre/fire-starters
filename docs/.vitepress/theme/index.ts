// https://vitepress.dev/guide/custom-theme
import { h, App } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/base.css"
import "./assets/css/main.css"
import "./assets/css/range-wth-step.css"
import "./assets/css/superior.css"
import "./assets/scss/style.scss"



import { NaiveUIContainer } from '../../utils/component/index'

import '../../utils/component/styles/nustyle.css'
import "bootstrap/dist/css/bootstrap.min.css"


export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', NaiveUIContainer)
}
}