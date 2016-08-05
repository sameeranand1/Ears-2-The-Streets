import Vue from 'vue'
import Router from 'vue-router'

import './stylus/app.styl'

/** Import Views **/
import AppView from './components/App.vue'
import NotFoundView from './components/errors/NotFound.vue'
import HomeView from './components/pages/Home.vue'
import AboutView from './components/pages/About.vue'

/**
 * Install router.
 */
Vue.use(Router)

/**
 * Create a router instance.
 */
var router = new Router({ history: true })

/**
 * Define some routes.
 */
router.map({
    '/':        { component: HomeView },
    'about':    { component: AboutView },
    '*':        { component: NotFoundView }
})

router.beforeEach(function() {
    window.scrollTo(0, 0)
})

/**
 * Start application.
 */
router.start(AppView, '#app')