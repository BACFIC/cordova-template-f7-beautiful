// Import Vue
import Vue from 'vue'

// Import F7
import 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
/*
import 'framework7/dist/css/framework7.ios.min.css'
import 'framework7/dist/css/framework7.ios.colors.min.css'
 */
// Material Theme:
import 'framework7/dist/css/framework7.material.min.css'
import 'framework7/dist/css/framework7.material.colors.min.css'

// Import App Custom Styles
import 'styles/main.styl'

// Import Routes
import Routes from 'configs/routes.js'

// Import App Component
import App from 'pages/app.vue'

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes
  },
  // Register App Component
  components: {
    app: App
  }
})
