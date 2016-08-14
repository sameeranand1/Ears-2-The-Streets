<template>
    
    <div class="Exclusive_Mixtape">

        <header class="Header">

            <title-bar top="Exclusive" bottom="Mixtape"></title-bar>

        </header>

        <div class="Wrapper">

        </div>

    </div>

</template>

<script>

    import TitleBar from '../misc/Title-Bar.vue'

    export default 
    {
        components:
        {
            'title-bar': TitleBar
        },

        data()
        {
            return {
            }
        }
    }

</script>

<style lang="stylus" scoped>

    @require '../../stylus/common/colors'

    .Exclusive_Mixtape .Wrapper
        background-color $BRAND_LIGHTER_BLUE
        border-radius 6px
        padding 20px

</style>