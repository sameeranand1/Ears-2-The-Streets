<template>
    
    <div class="Exclusive Mixtape">

        <header class="Header">

            <title-bar top="Exclusive" bottom="Mixtape"></title-bar>

        </header>

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

</style>