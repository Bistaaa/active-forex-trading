import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);

import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')









export function handleVipButtonClick() {
  const contactFormContainer = document.getElementById('contactform-container');

  if (contactFormContainer) {
    // Verifica se l'elemento esiste prima di modificare la classe
    if (contactFormContainer.classList.contains('hide-form')) {
      // Rimuovi la classe "hide-form" e aggiungi la classe "show-form"
      contactFormContainer.classList.remove('hide-form');
      contactFormContainer.classList.add('show-form');
    }
  }
}







