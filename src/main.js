import Vue from 'vue'
import Router from 'vue-router'

import './stylus/app.styl'

/** Import Views **/
import AboutView        from './components/pages/About.vue'
import AppView          from './components/App.vue'
import ArtistView       from './components/artists/Artist.vue'
import ArtistsView      from './components/artists/Artists.vue'
import EventView        from './components/events/Event.vue'
import EventsView       from './components/events/Events.vue'
import HomeView         from './components/pages/Home.vue'
import MixtapeView      from './components/mixtapes/Mixtape.vue'
import MixtapesView     from './components/mixtapes/Mixtapes.vue'
import MusicVideoView   from './components/music/MusicVideo.vue'
import MusicVideosView  from './components/music/MusicVideos.vue'
import NotFoundView     from './components/errors/NotFound.vue'

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
    '/':                { component: HomeView },
    'about':            { component: AboutView },
    'artists':          { component: ArtistsView },
    'events':           { component: EventsView },
    'mixtapes':         { component: MixtapesView },
    'music-videos':     { component: MusicVideosView },
    '*':                { component: NotFoundView }
})

router.beforeEach(function() {
    window.scrollTo(0, 0)
})

/**
 * Start application.
 */
router.start(AppView, '#app')