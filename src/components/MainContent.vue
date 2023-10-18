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
    <h1>hello i'm the Main</h1>
    <Instructions />
    <MyStrategy />
    <PersonalInfo />
</template>

<style scoped lang="scss">
h1 {
    width: 100%;
    text-align: center;
}
</style>
