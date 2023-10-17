<script>
import Header from './components/Header.vue';
import Jumbotron from './components/Jumbotron.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Jumbotron,
    MainContent,
    Footer,
  },
}
</script>

<template>
  <Header />
  <Jumbotron />
  <MainContent />
  <Footer />
</template>

<style scoped></style>
