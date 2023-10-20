<script>
import Instructions from './MainContent-components/Instructions.vue';
import MyStrategy from './MainContent-components/MyStrategy.vue';
import PersonalInfo from './MainContent-components/PersonalInfo.vue';

export default {
    name: 'MainContent',
    components: {
        Instructions,
        MyStrategy,
        PersonalInfo,
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
    </div>
</template>

<style scoped lang="scss">
#main-container {
    padding: 100px 10%;
}
</style>
