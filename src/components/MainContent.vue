<script>
import Instructions from './MainContent-components/Instructions.vue';
import MyStrategy from './MainContent-components/MyStrategy.vue';
import PersonalInfo from './MainContent-components/PersonalInfo.vue';
import Ebook from './MainContent-components/Ebook.vue';

export default {
    name: 'MainContent',
    components: {
        Instructions,
        MyStrategy,
        PersonalInfo,
        Ebook,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <div id="main-container">
        <Instructions />
        <MyStrategy />
        <PersonalInfo />
        <Ebook />
    </div>
</template>

<style scoped lang="scss">
#main-container {}
</style>
