<script>
import Jumbotron from './MainContent-components/Jumbotron.vue'
import Instructions from './MainContent-components/Instructions.vue';
import MyStrategy from './MainContent-components/MyStrategy.vue';
import PersonalInfo from './MainContent-components/PersonalInfo.vue';
import Ebook from './MainContent-components/Ebook.vue';
import BestTrades from './MainContent-components/BestTrades.vue';
import MyVideos from './MainContent-components/MyVideos.vue';
import Reviews from './MainContent-components/Reviews.vue';
import ContactForm from './MainContent-components/ContactForm.vue';

export default {
    name: 'MainContent',
    components: {
        Jumbotron,
        Instructions,
        MyStrategy,
        PersonalInfo,
        Ebook,
        BestTrades,
        MyVideos,
        Reviews,
        ContactForm,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <div id="main-container">
        <Jumbotron />
        <Instructions />
        <MyStrategy />
        <PersonalInfo />
        <Ebook />
        <BestTrades />
        <MyVideos />
        <Reviews />
        <ContactForm />
    </div>
</template>

<style scoped lang="scss">
#main-container {
    position: relative;
}
</style>
