import Vue from 'vue'
import Validator from 'vue-validator'
import Router from 'vue-router'

import './stylus/app.styl'

/** Import Views **/
import AboutView            from './components/pages/About.vue'
import AppView              from './components/App.vue'
import ArtistView           from './components/artists/Artist.vue'
import ArtistsView          from './components/artists/Artists.vue'
import DMCAView             from './components/pages/DMCA.vue'
import EventView            from './components/events/Event.vue'
import EventsView           from './components/events/Events.vue'
import HomeView             from './components/pages/Home.vue'
import LoginView            from './components/auth/Login.vue'
import MixtapeView          from './components/mixtapes/Mixtape.vue'
import MixtapesView         from './components/mixtapes/Mixtapes.vue'
import MusicVideoView       from './components/music/Music-Video.vue'
import MusicVideosView      from './components/music/Music-Videos.vue'
import NotFoundView         from './components/errors/Not-Found.vue'
import PrivacyPolicyView    from './components/pages/Privacy-Policy.vue'
import RegisterView         from './components/auth/Register.vue'
import TermsOfServiceView   from './components/pages/Terms-Of-Service.vue'
import UsersAgreementView   from './components/pages/Users-Agreement.vue'

/**
 * Install router.
 */
Vue.use(Router)

/**
 * Install validator.
 */
Vue.use(Validator)

/**
 * Create a router instance.
 */
var router = new Router({ history: true })

/**
 * Define some routes.
 */
router.map({
    '/':                { component: HomeView },
    'about':            { component: AboutView },
    'artists':          { component: ArtistsView },
    'dmca':             { component: DMCAView },
    'events':           { component: EventsView },
    'login':            { component: LoginView },
    'mixtapes':         { component: MixtapesView },
    'music-videos':     { component: MusicVideosView },
    'privacy-policy':   { component: PrivacyPolicyView },
    'register':         { component: RegisterView },
    'terms-of-service': { component: TermsOfServiceView },
    'users-agreement':  { component: UsersAgreementView },
    '*':                { component: NotFoundView }
})

router.beforeEach(function() {
    window.scrollTo(0, 0)
})

/**
 * Start application.
 */
router.start(AppView, 'div')