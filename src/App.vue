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
      cookieConsent: null, // Stato del consenso dei cookie
    };
  },
  methods: {
    handleScroll() {
      this.showScrollToTopButton = window.scrollY > window.innerHeight;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    loadCookieConsent() {
      const consent = localStorage.getItem('cookieConsent');
      if (consent) {
        this.cookieConsent = JSON.parse(consent);
      } else {
        this.cookieConsent = false; // Mostra il banner se non c'è consenso
      }
    },
    acceptAllCookies() {
      this.cookieConsent = true;
      localStorage.setItem('cookieConsent', JSON.stringify(true));
    },
    rejectAllCookies() {
      this.cookieConsent = true;
      localStorage.setItem('cookieConsent', JSON.stringify(true));
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.loadCookieConsent();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
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
    <div v-if="!cookieConsent" id="cookie-banner" :class="{ 'hidden': cookieConsent }">
      <div class="cookie-content">
        <p>
          Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo consenso, cookie funzionali,
          statistici e di marketing anche di terze parti. <br>
          Cliccando "Accetta tutti" acconsenti all'uso dei cookie non tecnici. Cliccando "Rifiuta tutti" proseguirai con
          i soli cookie tecnici. Puoi modificare le scelte in qualsiasi momento dal link "Rivedi le tue scelte" o dal
          Pannello preferenze. Maggiori dettagli nella nostra <a href="/documents/COOKIE.pdf" target="_blank">Cookie
            Policy</a> e <a href="/documents/PRIVACY.pdf" target="_blank">Privacy Policy</a>.
        </p>
        <div class="cookie-buttons">
          <button @click="acceptAllCookies">Accetta tutti</button>
          <button @click="rejectAllCookies">Rifiuta tutti</button>
        </div>
      </div>
    </div>
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

/* Stili per il banner dei cookie */
#cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #111111;
  color: #fff;
  padding: 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
  z-index: 100000;
  /* Sopra il pulsante "Torna all'inizio" */
  text-align: center;
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
}

.cookie-content p {
  font-size: 14px;
  margin-bottom: 15px;
  line-height: 1.5;
}

.cookie-content a {
  color: #ecc01b;
  text-decoration: underline;
}

.cookie-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.cookie-buttons button {
  background-color: #ecc01b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
}

.cookie-buttons button:hover {
  background-color: #d4a017;
}

.hidden {
  display: none;
}

@media (max-width: 600px) {
  .cookie-buttons {
    flex-direction: column;
  }

  .cookie-buttons button {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>