<template>
    
    <div class="Exclusive_Mixtape">

        <header class="Header">

            <title-bar top="Exclusive" bottom="Mixtape"></title-bar>

        </header>

        <audio v-el:audio 
            @waiting="onWaiting()" 
            @playing="onPlaying()"
            @play="onPlay()"
            @pause="onPause()"
            @canplay="onCanPlay()"
            @volumechange="onVolumeChange"
        >
        </audio>

        <div class="Wrapper">

            <loader :visible="loading"></loader>

            <div class="Top_Bar">

                <div class="Left">

                    <div class="Icon Playlist_Icon">
                        <span class="icon-list"></span>
                    </div>

                </div>

                <div class="Right">

                    <div class="Icon Share_Icon">
                        <span class="icon-share"></span>
                    </div>

                    <div class="Icon Popout_Icon">
                        <span class="icon-popout"></span>
                    </div>

                </div>

            </div>

            <div class="Player">

                <div class="Cover_Image" :style="{ 'background-image': 'url(' + getCurrentSong().img + ')' }">
                    <img src="../../assets/images/logo-mascot.svg" alt="Logo" class="Logo" v-show="!doesCurrentSongHaveImage()">
                </div>

                <div class="Player_Controls">

                    <div class="Playback_Slider">

                    </div>

                    <div class="Info">

                        <h4 class="Mixtape_Name">{{ getCurrentSong().album }}</h4>
                        <h4 class="Song_Name">{{ getCurrentSong().name }}</h4>
                        <h4 class="Artists">{{ getCurrentSong().artist }}</h4>

                    </div>

                    <div class="Playback_Controls">

                        <div class="Icon Back_Icon">
                            <button type="button" @click="playPreviousSong()"><span class="icon-previous"></span></button>
                        </div>

                        <div class="Icon Play_Icon" v-show="!isPlaying()">
                            <button type="button" @click="play()"><span class="icon-play"></span></button>
                        </div>

                        <div class="Icon Pause_Icon" v-show="isPlaying()">
                            <button type="button" @click="pause()"><span class="icon-pause"></span></button>
                        </div>

                        <div class="Icon Forward_Icon">
                            <button type="button" @click="playNextSong()"><span class="icon-next"></span></button>
                        </div>

                    </div>

                    <div class="Volume_Controls">

                        <div class="Volume_Slider">
                        
                            <input type="range" min="0" max="1" step=".05" v-model="volume" v-el:volume @input="onVolumeChanged()">

                        </div>

                        <div class="Icon Volume_Icon">

                            <button type="button" @click="toggleVolume()" v-show="volume >= 0.75 && !muted"><span class="icon-volume-high"></span></button>
                            <button type="button" @click="toggleVolume()" v-show="volume >= 0.25 && volume < 0.75 && !muted"><span class="icon-volume-medium"></span></button>
                            <button type="button" @click="toggleVolume()" v-show="volume >= 0.01 && volume < 0.25 && !muted"><span class="icon-volume-low"></span></button>
                            <button type="button" @click="toggleVolume()" v-show="muted"><span class="icon-volume-mute"></span></button>

                        </div>

                    </div>

                </div>

            </div>

            <div class="Logo">

            </div>

        </div>

    </div>

</template>

<script>

    import Loader   from '../misc/Loader.vue'
    import TitleBar from '../misc/Title-Bar.vue'

    export default 
    {
        components:
        {
            'loader':       Loader,
            'title-bar':    TitleBar
        },

        created()
        {
            this.setCurrentSong(this.getFirstSong());
        },

        data()
        {
            return {

                current: null,

                loading: true,

                muted: false,

                playing: false,

                playlist:
                [
                    {  
                        ID:     0,
                        name:   'Voodoo',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/01+Voodoo.mp3'
                    },
                    {  
                        ID:     1,
                        name:   'Champagne Problems',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/02+Champagne+Problems.mp3'
                    },
                    {  
                        ID:     2,
                        name:   'Close',
                        artist: 'Nick Jonas feat. Tove Lo',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/03+Close+(feat_+Tove+Lo).mp3'
                    },
                    {  
                        ID:     3,
                        name:   'Chainsaw',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/04+Chainsaw.mp3'
                    },
                    {  
                        ID:     4,
                        name:   'Touch',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/05+Touch.mp3'
                    },
                    {  
                        ID:     5,
                        name:   'Bacon',
                        artist: 'Nick Jonas feat. Ty Dolla $ign',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/06+Bacon+(feat_+Ty+Dolla+%24ign).mp3'
                    },
                    {  
                        ID:     6,
                        name:   'Good Girls',
                        artist: 'Nick Jonas feat Big Sean',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/07+Good+Girls+(feat_+Big+Sean).mp3'
                    },
                    {  
                        ID:     7,
                        name:   'The Difference',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/08+The+Difference.mp3'
                    },
                    {  
                        ID:     8,
                        name:   'Don\'t Make Me Choose',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/09+Don%27t+Make+Me+Choose.mp3'
                    },
                    {  
                        ID:     9,
                        name:   'Under You',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/10+Under+You.mp3'
                    },
                    {  
                        ID:     10,
                        name:   'Unhinged',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/11+Unhinged.mp3'
                    },
                    {  
                        ID:     11,
                        name:   'Comfortable',
                        artist: 'Nick Jonas',
                        album:  'Last Year Was Complicated',
                        img:    'https://s3.amazonaws.com/ears2thestreets/last-year-was-complicated.jpg',
                        src:    'https://s3.amazonaws.com/ears2thestreets/12+Comfortable.mp3'
                    }
                ],

                volume: 1,

                volume_saved: null

            }
        },

        methods:
        {
            /**
             * Returns true if the current song has a cover image.
             * 
             * @return boolean
             */
            doesCurrentSongHaveImage()
            {
                return this.getCurrentSong().img.length
            },

            /**
             * Returns the current song.
             * 
             * @return song
             */
            getCurrentSong()
            {
                return this.current;
            },

            /**
             * Returns the current song's ID
             * 
             * @return int
             */
            getCurrentSongID()
            {
                return this.getCurrentSong().ID;
            },

            /**
             * Returns the source of the current song.
             * 
             * @return string
             */
            getCurrentSongSource()
            {
                return this.getCurrentSong().src;
            },

            /**
             * Returns the first song in the playlist.
             * 
             * @return song
             */
            getFirstSong()
            {
                return this.playlist[0];
            },

            /**
             * Returns the song after the current song.
             * 
             * @return song
             */
            getNextSong()
            {
                if (this.getCurrentSongID() == (this.playlist.length - 1)) {
                    return this.getSong(0);
                }

                return this.getSong(this.getCurrentSongID() + 1);
            },

            /**
             * Returns the music player.
             * 
             * @return el
             */
            getPlayer()
            {
                return this.$els.audio;
            },

            /**
             * Returns the song before the current song.
             * 
             * @return song
             */
            getPreviousSong()
            {
                if (this.getCurrentSongID() == 0) {
                    return this.getSong(this.playlist.length - 1);
                }

                return this.getSong(this.getCurrentSongID() - 1);
            },

            /**
             * Returns the song with given ID
             * 
             * @params int ID - song ID
             * @return song
             */
            getSong(ID)
            {
                return this.playlist[ID];
            },

            /**
             * Returns the source of the song with given ID.
             * 
             * @params int ID - song ID
             * @return string
             */
            getSongSource(ID)
            {
                return this.getSong(ID).src;
            },

            /**
             * Returns the volume.
             * 
             * @return int
             */
            getVolume()
            {
                return this.volume;
            },

            /**
             * Returns the volume control input.
             * 
             * @return el
             */
            getVolumeControl()
            {
                return this.$els.volume;
            },

            /**
             * Returns true if the player is muted.
             * 
             * @return boolen
             */
            isMuted()
            {
                return this.getPlayer().muted || this.volume == 0;
            },

            /**
             * Returns true if the player is playing.
             * 
             * @return boolean
             */
            isPlaying()
            {
                return this.playing;
            },

            /**
             * Event occurs when the browser can start playing the media.
             * 
             * @return void
             */
            onCanPlay()
            {
                this.playing = false;
            },

            /**
             * Event occurs when the media is paused either by the user or programmatically.
             * 
             * @return void
             */
            onPause()
            {
                this.playing = false;
            },

            /**
             * Event occurs when media has been started or is no longer paused.
             * 
             * @return void
             */
            onPlay()
            {
                this.playing = true;
            },

            /**
             * Event occurs when media is playing after having been paused or stopped
             * for buffering.
             * 
             * @return void
             */
            onPlaying()
            {
                this.playing = true;

                if (this.loading) {
                    return this.loading = false;
                }
            },

            /**
             * Event occurs when volume of audio has been changed.
             * 
             * @return void
             */
            onVolumeChange()
            {
                if (this.isMuted())
                {
                    return this.muted = true;
                }

                return this.muted = false;
            },

            /**
             * Event occurs when volume slider value has changed.
             * 
             * @return void
             */
            onVolumeChanged()
            {
                if (this.isMuted() && (this.getVolume() > 0)) {
                    this.muted = false;
                    this.getPlayer().muted = false;
                    this.volume_saved = null;
                }

                return this.getPlayer().volume = this.getVolume();
            },

            /**
             * Event occurs when media has paused but is expected to resume (during buffer).
             * 
             * @return void
             */
            onWaiting()
            {
                return this.loading = true;
            },

            /**
             * Pause the current track.
             * 
             * @return void
             */
            pause()
            {
                return this.getPlayer().pause();
            },

            /**
             * Resume the current track.
             * 
             * @return void
             */
            play()
            {
                return this.getPlayer().play();
            },

            /**
             * Play the next song.
             * 
             * @return void
             */
            playNextSong()
            {
                this.loading = true;

                if (this.isPlaying()) {
                    this.pause();
                }

                this.setCurrentSong(this.getNextSong());

                this.getPlayer().src = this.getCurrentSongSource();
                this.reload();

                this.loading = false;

                this.play();
            },

            /**
             * Play the previous song.
             * 
             * @return void
             */
            playPreviousSong()
            {
                this.loading = true;

                if (this.isPlaying()) {
                    this.pause();
                }

                this.setCurrentSong(this.getPreviousSong());

                this.getPlayer().src = this.getCurrentSongSource();
                this.reload();

                this.loading = false;
                
                this.play();
            },

            /**
             * Reload the audio player.
             * 
             * @return void
             */
            reload()
            {
                return this.getPlayer().load();
            },

            /**
             * Set the current song with given song.
             * 
             * @params obj song - song
             * @return void
             */
            setCurrentSong(song)
            {
                return this.current = song;
            },

            /**
             * Set the player's volume.
             * 
             * @params int volume - volume to set
             * @return void
             */
            setVolume(volume)
            {
                this.volume = volume;
                this.getPlayer().volume = volume;
            },

            /**
             * Toggle volume (mute / unmute).
             * 
             * @return void
             */
            toggleVolume()
            {
                if (!this.isMuted()) {
                    this.volume_saved = this.getVolume();
                    this.setVolume(0);
                } else {
                    if (this.volume_saved != null) {
                        this.setVolume(this.volume_saved);
                    } else {
                        this.setVolume(1);
                    }
                }

                return this.getPlayer().muted = !this.getPlayer().muted;
            }
        },

        /**
         * Fire when the component is ready.
         */
        ready()
        {
            this.getPlayer().src = this.getCurrentSongSource();
            this.reload();
            this.loading = false;
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Exclusive_Mixtape .Wrapper
        background-color $BRAND_LIGHTER_BLUE
        border-radius 6px
        padding 20px
        position relative

    .Exclusive_Mixtape .Wrapper .Top_Bar
        align-items center
        display flex
        justify-content space-between
        margin-bottom 20px

    .Exclusive_Mixtape .Wrapper .Top_Bar .Left .Icon,
    .Exclusive_Mixtape .Wrapper .Top_Bar .Right .Icon
        color #8E8F98
        cursor pointer
        font-size 16px
        transition color .3s ease

    .Exclusive_Mixtape .Wrapper .Top_Bar .Left .Icon:hover,
    .Exclusive_Mixtape .Wrapper .Top_Bar .Right .Icon:hover
        color $BRAND_YELLOW
        cursor pointer

    .Exclusive_Mixtape .Wrapper .Top_Bar .Right
        align-items center
        display flex

    .Exclusive_Mixtape .Wrapper .Top_Bar .Right .Icon
        margin-right 25px

    .Exclusive_Mixtape .Wrapper .Top_Bar .Right .Icon:last-child
        margin-right 0

    .Exclusive_Mixtape .Wrapper .Player
        /** Todo **/

    .Exclusive_Mixtape .Wrapper .Player .Cover_Image
        align-items center
        background-color $BRAND_LIGHT_BLUE
        background-position center
        background-repeat no-repeat
        background-size cover
        display flex
        justify-content center
        height 260px
        overflow hidden

    .Exclusive_Mixtape .Wrapper .Player .Cover_Image .Logo
        margin 90px 0
        width 100px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls
        background-color $WHITE
        padding 15px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Slider
        /** Todo **/

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Info
        text-align center

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Info .Mixtape_Name
        color #292A32
        font-family inherit
        font-size 14px
        font-weight bold
        margin-bottom 12px
        text-transform uppercase

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Info .Song_Name
        color #8E8F98
        font-family inherit
        font-size 14px
        font-weight normal
        margin-bottom 8px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Info .Artists
        color #8E8F98
        font-family inherit
        font-size 13px
        font-weight normal

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls
        align-items center
        display flex
        justify-content space-around
        margin-left auto
        margin-right auto
        margin-top 20px
        width 150px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls .Icon span
        font-size 20px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls .Back_Icon span
        color #8E8F98

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls .Play_Icon span
        color $BRAND_BLUE
        font-size 26px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls .Pause_Icon span
        color $BRAND_BLUE
        font-size 26px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls .Forward_Icon span
        color #8E8F98

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Playback_Controls .Icon button
        background none
        border none
        cursor pointer
        margin 0
        padding 0

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls
        align-items center
        display flex
        justify-content space-between
        margin-top 20px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Slider
        align-items center
        display flex
        height 20px
        justify-content center
        width calc(100% - 40px)

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Slider input[type=range]
        border none
        -webkit-appearance none
        width 100%

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Slider input[type=range]:focus
        outline none

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Slider input[type=range]::-webkit-slider-runnable-track
        background #8E8F98
        border none
        border-radius none
        cursor pointer
        height 4px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Slider input[type=range]::-webkit-slider-thumb
        background #8E8F98
        border none
        border-radius 0
        cursor pointer
        height 20px
        margin-top -8px
        -webkit-appearance none
        width 5px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Slider input[type=range]::-moz-range-track
        background #D7D7D7
        border none
        border-radius none
        cursor pointer
        height 4px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Slider input[type=range]::-moz-range-progress
        background #8E8F98
        border none
        border-radius none
        cursor pointer
        height 4px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Slider input[type=range]::-moz-range-thumb
        background #8E8F98
        border none
        border-radius 0
        cursor pointer
        height 20px
        margin-top -8px
        -webkit-appearance none
        width 5px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Icon
        align-items center
        display flex
        height 20px
        justify-content center
        width 20px

    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Icon button
        background none
        border none
        cursor pointer
        height 20px
        margin 0
        padding 0
        width 20px
    
    .Exclusive_Mixtape .Wrapper .Player .Player_Controls .Volume_Controls .Volume_Icon span
        color #8E8F98
        font-size 17px

    .Exclusive_Mixtape .Wrapper .Logo
        /** Todo **/

</style>