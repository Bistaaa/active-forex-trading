<script>
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    MainContent,
    Footer,
  },
}
</script>

<template>
  <Header />
  <MainContent />
  <Footer />
</template>

<style scoped></style>
