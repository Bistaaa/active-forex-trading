<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showScrollToTopButton: false,
    };
  },
  methods: {
    handleScroll() {
      // Verifica se lo scroll è maggiore di 100vh
      this.showScrollToTopButton = window.scrollY > window.innerHeight;
    },
    scrollToTop() {
      // Scrolla fino all'inizio della pagina
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  mounted() {
    // Aggiungi un listener per lo scroll
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Rimuovi il listener quando il componente viene distrutto
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
    <button v-bind:class="{ 'show': showScrollToTopButton, 'hide': !showScrollToTopButton }" @click="scrollToTop"
      class="hide" id="scroll-to-top-button">
      <svg class="svgIcon" viewBox="0 0 384 512">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z">
        </path>
      </svg>
    </button>
  </div>
</template>

<style lang="scss">
.hide {
  display: none;
}

.show {
  display: flex;
}

#scroll-to-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  z-index: 99;
}

.svgIcon {
  width: 12px;
  transition-duration: 0.3s;
}

.svgIcon path {
  fill: white;
}

#scroll-to-top-button:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: 0.3s;
  align-items: center;
}

#scroll-to-top-button:hover .svgIcon {
  /* width: 20px; */
  transition-duration: 0.3s;
  transform: translateY(-200%);
}

#scroll-to-top-button::before {
  position: absolute;
  bottom: -20px;
  content: "Torna all'inizio";
  color: white;
  /* transition-duration: .3s; */
  font-size: 0px;
}

#scroll-to-top-button:hover::before {
  font-size: 13px;
  opacity: 1;
  bottom: unset;
  /* transform: translateY(-30px); */
  transition-duration: 0.3s;
}
</style>