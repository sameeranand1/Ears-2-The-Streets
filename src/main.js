import Vue from 'vue'
import Router from 'vue-router'

import './stylus/app.styl'

// Import Views - Top Level
import AppView from './components/App.vue'
import NotFoundView from './components/NotFound.vue'

// Import Views - Coming Soon
import ComingSoonView from './components/coming-soon/ComingSoon.vue'

// Import Views - Site
import SiteLayout from './components/site/Layout.vue'
import HomeView from './components/site/pages/Home.vue'
import AboutView from './components/site/pages/About.vue'

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
    '/': { component: ComingSoonView },
    'home': 
    {
        component: SiteLayout,
        subRoutes:
        {
            '/': { component: HomeView }
        }
    },
    'about': 
    {
        component: SiteLayout,
        subRoutes:
        {
            '/': { component: AboutView }
        }
    },
    '*': { component: NotFoundView }
})

router.beforeEach(function() {
    window.scrollTo(0, 0)
})

/**
 * Start application.
 */
router.start(AppView, '#app')