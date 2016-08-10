<template>
    
    <div class="Search">

        <div class="Container">

            <input v-bind:class="{ 'magnifer': !query }"  class="Input Search_Bar" type="text" v-model="query" @keyup="search" placeholder="search artists, mixtapes, music videos and more">

            <span class="icon-x" v-show="query" v-on:click="clear"></span>

            <div class="Social">

                <ul>
                    <li><a target="_blank" href="https://www.facebook.com/ears2thestreets/"><span class="icon-facebook"></span></a></li>
                    <li><a target="_blank" href="https://twitter.com/e2thestreets"><span class="icon-twitter"></span></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/e2thestreets/"><span class="icon-instagram"></span></a></li>
                </ul>

            </div>

        </div>

    </div>

    <div class="Search_Results_Container" v-show="query" transition="expand">

        <div class="Category Events">

            <header>
                <h4>Events</h4>
            </header>

            <div class="Search_Results">

                <div class="Search_Result">
                    <img class="Search_Result_Thumbnail" src="../../assets/images/search/thumbnail.png">
                    {{ query }}
                </div>
                <div class="Search_Result">
                    <img class="Search_Result_Thumbnail" src="../../assets/images/search/thumbnail.png">
                    {{ query }}
                </div>
                <div class="Search_Result">
                    <img class="Search_Result_Thumbnail" src="../../assets/images/search/thumbnail.png">
                    {{ query }}
                </div>

            </div>
            
        </div>

        <div class="Category Music_Videos">

            <header>
                <h4>Music Videos</h4>
            </header>

            <div class="Search_Results">

                <div class="Search_Result">
                    <img class="Search_Result_Thumbnail" src="../../assets/images/search/thumbnail.png">
                    {{ query }}
                </div>
                <div class="Search_Result">
                    <img class="Search_Result_Thumbnail" src="../../assets/images/search/thumbnail.png">
                    {{ query }}
                </div>
                <div class="Search_Result">
                    <img class="Search_Result_Thumbnail" src="../../assets/images/search/thumbnail.png">
                    {{ query }}
                </div>

            </div>

        </div>

        <div class="Category Mixtapes">

            <header>
                <h4>Mixtapes</h4>
            </header>

            <div class="Search_Results">

                <div class="Search_Result">
                    <img class="Search_Result_Thumbnail" src="../../assets/images/search/thumbnail.png">
                    {{ query }}
                </div>
                <div class="Search_Result">
                    <img class="Search_Result_Thumbnail" src="../../assets/images/search/thumbnail.png">
                    {{ query }}
                </div>
                <div class="Search_Result">
                    <img class="Search_Result_Thumbnail" src="../../assets/images/search/thumbnail.png">
                    {{ query }}
                </div>

            </div>

        </div>

        <div class="Category Artists">

            <header>
                <h4>Artists</h4>
            </header>

            <div class="Search_Results">

                <div class="Search_Result">
                    <img class="Search_Result_Thumbnail" src="../../assets/images/search/thumbnail.png">
                    {{ query }}
                </div>
                <div class="Search_Result">
                    <img class="Search_Result_Thumbnail" src="../../assets/images/search/thumbnail.png">
                    {{ query }}
                </div>
                <div class="Search_Result">
                    <img class="Search_Result_Thumbnail" src="../../assets/images/search/thumbnail.png">
                    {{ query }}
                </div>

            </div>

        </div>

    </div>

</template>

<script>
    export default 
    {
        data() 
        {
            return { 
                query: ''
            }
        },
        methods: 
        {
            clear()
            {
                this.query = ''
            },
            search() 
            {
                // TODO
            }
        }
    }
</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Search
        background-color $BRAND_LIGHTER_BLUE
        border-bottom 1px solid #0C0D16
        padding 20px 0
        width 100%

    .Search .Container
        display block
        height 100%
        position relative

    .Search .Search_Bar
        padding: 0 45px 0px 16px;
        width 100%

    .Search .Search_Bar.magnifer
        background url('../../assets/images/search/search-icon.svg') $BRAND_LIGHT_BLUE
        background-position: right 15px center;
        background-repeat no-repeat
        background-size: 16px auto;

    .Search .Search_Bar::placeholder
        opacity .4
        transition opacity .3s ease

    .Search .Search_Bar:focus::placeholder
        color $BRAND_BLUE
        opacity .6

    .Search .Search_Bar
        transition background-color ease-in-out .3s

    .Search .Search_Bar:focus
        background-color $WHITE
        border none
        color $BRAND_LIGHTER_BLUE

    .Search .icon-x
        color #747478
        position absolute
        right 30px
        top 12px

    .Search .icon-x:hover
        cursor pointer

    .Search .Social
        display none

    .Search_Results_Container
        background-color $WHITE
        border-bottom-left-radius 5px
        border-bottom-right-radius 5px
        left 0
        margin-left auto
        margin-right auto
        max-height 350px
        overflow-y auto
        position absolute
        right 0
        z-index 99

    .Search_Results_Container.expand-transition
        transition opacity .3s ease

    .Search_Results_Container.expand-enter,
    .Search_Results_Container.expand-leave
        opacity 0

    .Search_Results_Container .Category header
        background-color #EDEFF2
        border-bottom 1px solid #E0E2E6
        box-sizing border-box
        height auto
        padding 10px
        width 100%

    .Search_Results_Container .Category header h4
        color #94969B
        font-family inherit
        font-size 11px
        text-transform uppercase

    .Search_Results_Container .Category .Search_Results
        box-sizing border-box
        font-family inherit
        font-size 14px
        width 100%

    .Search_Results_Container .Category .Search_Results .Search_Result
        align-items center
        border-bottom 1px solid #E0E2E6
        box-sizing border-box
        display flex
        padding 10px

    .Search_Results_Container .Category .Search_Results .Search_Result:hover
        background-color #F2F4F5

    .Search_Results_Container .Category .Search_Results .Search_Result:last-child
        border-bottom none

    .Search_Results_Container .Category .Search_Results .Search_Result .Search_Result_Thumbnail
        height 40px
        margin-right 20px
        width 48px

    /** Medium Devices **/
    /** Large Devices **/
    /** Extra Large Devices **/
    @media (min-width 768px)

        .Search
            height 64px
            padding 0

        .Search .Container
            align-items center
            display flex
            justify-content center

        .Search .Search_Bar
            width 70%

        .Search .Social
            align-items center
            display flex
            height 100%
            justify-content center
            position absolute
            right 15px
            top 0

        .Search .Social ul
            margin 0
            padding 0

        .Search .Social ul li
            display inline
            list-style-type none
            margin-right 20px

        .Search .Social ul li:last-child
            margin-right 0

        .Search .Social ul li a
            color #A4AAAA
            font-size 13px
            text-decoration none
        
        .Search .Social ul li a:hover
            color $BRAND_YELLOW

        .Search .icon-x
            color #747478
            position relative
            right 30px
            top 0px

    /** Large Devices **/
    @media (min-width 992px)

        .Search_Results_Container
            box-shadow 0px 7px 10px #888888
            width calc(962px * .70)

    /** Extra Large Devices **/
    @media (min-width 1200px)

        .Search_Results_Container
            width calc(1170px * .70)


</style>