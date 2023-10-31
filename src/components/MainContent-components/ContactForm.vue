<script>
import emailjs from '@emailjs/browser';
import axios from 'axios';

export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        checkbox: false,
      },
      checkboxError: false,
    };
  },
  methods: {
    showCheckboxError() {
      this.checkboxError = true;
    },

    HideForm() {
      const contactFormContainer = document.getElementById('contactform-container');

      if (contactFormContainer) {

        if (contactFormContainer.classList.contains('show-form-container')) {

          contactFormContainer.classList.remove('show-form-container');
          contactFormContainer.classList.add('hide-form-container');
        }
      }
    },

    changeFormPage() {
      const currentFormPage = document.getElementById('first-page-form');

      if (currentFormPage) {
        if (currentFormPage.classList.contains('show-form')) {

          currentFormPage.classList.remove('show-form');
          currentFormPage.classList.add('hide-form');
          this.currentFormPage = 'second-page-form';

        };

        if (currentFormPage.classList.contains('hide-form')) {

          currentFormPage.classList.remove('hide-form');
          currentFormPage.classList.add('show-form');
          this.currentFormPage = 'first-page-form';
        }
      }
    },

    onFormSubmit() {
      /* this.sendEmail(); */
      this.submitForm();
    },

    sendEmail() {
      emailjs.sendForm('service_gwc7vhp', 'template_bpcot7h', this.$refs.form, 'haD2fBk5CrUugoVrd')
        .then((result) => {
          console.log('SUCCESS!', result.text);
        }, (error) => {
          console.log('FAILED...', error.text);
        });
    },

    submitForm() {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwfN2obVWjL9-tZX6eAVe9OiU6E73f9tvjLHTH2PlCx2rIqNnPhOLtGMiN3ay99HpVl/exec'
      const form = document.forms['contact-form']

      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => alert("Thank you!"))
          .then(() => { window.location.reload(); })
          .catch(error => console.error('Error!', error.message))
      })
    },
  },
}
</script>

<template>
  <div class="hide-form-container" id="contactform-container">
    <div class="show-form" id="first-page-form">
      <button class="close-button" @click="HideForm">&#10006;</button>
      <div id="form-logo-container">
        <img src="../../assets/img/white-logo.png" alt="">
      </div>
      <h2>COMPILA IL FORM</h2>
      <span id="form-explaination">e scarica l’E-book.</span>
      <div id="form-container">
        <form method="post" action="" name="contact-form" id="contact-form" @submit.prevent="onFormSubmit">
          <div class="form-group">
            <input type="text" id="name" name="name" class="input-group-input" v-model="formData.name" required>
            <label for="name" class="input-group-label">Nome:</label>
          </div>

          <div class="form-group">
            <input type="text" id="surname" name="surname" class="input-group-input" v-model="formData.surname" required>
            <label for="surname" class="input-group-label">Cognome:</label>
          </div>

          <div class="form-group">
            <input type="number" id="phone" name="phone" class="input-group-input" v-model="formData.phone" required>
            <label for="phone" class="input-group-label">Cellulare:</label>
          </div>

          <div class="form-group">
            <input type="email" id="email" name="email" class="input-group-input" v-model="formData.email" required>
            <label for="email" class="input-group-label">E-mail:</label>
          </div>

          <!-- <div class="form-checkbox-container">
            <input type="checkbox" value="None" id="checkbox" name="checkbox" v-model="formData.checkbox"
              @invalid="showCheckboxError" required>
            <label for="checkbox"></label>
            <span>Accetto di inviare le mie informazioni a Active Forex Trading che le userà in conformità con la propria
              informativa sulla privacy che dichiaro di aver letto. Visualizza le <a
                href="https://www.flipbookpdf.net/web/site/833816ac165c7847026bce9b49317f9f34e54db2202206.pdf.html#page/1">Note
                legali ed informativa sulla privacy</a> </span>
          </div>
          <div v-if="checkboxError" class="error-message">Devi accettare l'informativa sulla privacy.</div> -->

          <div id="button-container">
            <div id="animation-container">
              <button type="submit">
                Invia
              </button>
              <span></span>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="hide-form" id="second-page-form">
      <button class="close-button" @click="HideForm">&#10006;</button>
      <div id="form-logo-container">
        <img src="../../assets/img/white-logo.png" alt="">
      </div>
      <h2 id="second-page-title">Grazie per esserti registrato!</h2>
      <span id="second-page-contact-span">Un responsabile ti contatterà a breve</span>
      <span id="second-page-download-span">Scarica l'E-book:</span>
      <div id="button-container">
        <div id="animation-container">
          <a href="/download/e-book.pdf" download="Ebook-active-forex-trading.pdf">
            <button type="button">
              Scarica
            </button>
          </a>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hide-form-container {
  display: none;
}

.show-form-container {
  display: flex;
}



#contactform-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  width: 50vw;
  border-radius: 30px;
  padding: 0 5% 50px;
  background: #1B1717;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  .hide-form {
    display: none;
  }

  .show-form {
    display: flex;
  }

  #first-page-form {
    z-index: 10;
    flex-direction: column;
    align-items: center;

    #form-logo-container {
      width: 12%;
      margin-top: 10px;
      margin-bottom: 20px;

      img {
        width: 100%;
      }
    }

    h2 {
      color: #ffffff;
      font-size: 45px;
      text-align: center;
      margin-bottom: 0;
    }

    #form-explaination {
      color: #ffffff;
      text-align: center;
      margin-top: 0;
      margin-bottom: 40px;
      font-size: 20px;
    }

    .close-button {
      position: absolute;
      top: 15px;
      right: 20px;
      background: none;
      border: none;
      font-size: 24px;
      color: #ffffff;
      cursor: pointer;
      outline: none;
      padding: 0;
    }

    .close-button:hover {
      color: #FF0000;
    }

    #form-container {
      width: 70%;

      .form-group {
        position: relative;
        margin-bottom: 25px;

        .input-group-input {
          width: 100%;
          padding: 12px;
          font-size: 20px;
          color: #fff;
          border: none;
          border-radius: 4px;
          outline: 2px solid #ffffff;
          background: transparent;
          transition: outline-color 0.5s;
        }

        .input-group-input:is(:focus, :valid) {
          outline-color: #ECC01B;
        }

        .input-group-label {
          position: absolute;
          top: 0;
          left: 0;
          translate: 10px 10px;
          color: #ffffff;
          transition: translate 0.5s, scale 0.5s;
        }

        .input-group-input:focus+.input-group-label,
        .input-group-input:valid+.input-group-label {
          padding-inline: 5px;
          translate: 10px -14px;
          scale: 0.8;
          background-color: #1B1717;
        }
      }

      .form-checkbox-container {
        position: relative;
        margin: 20px auto;
        display: flex;
        align-items: flex-start;

        label {
          width: 20px;
          height: 20px;
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;
          background: #fcfff4;
          background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
          border-radius: 4px;
          box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);

          &:after {
            content: '';
            width: 9px;
            height: 5px;
            position: absolute;
            top: 4px;
            left: 4px;
            border: 3px solid #333;
            border-top: none;
            border-right: none;
            background: transparent;
            opacity: 0;
            transform: rotate(-45deg);
          }

          &:hover::after {
            opacity: 0.5;
          }
        }

        input[type=checkbox] {
          visibility: hidden;

          &:checked+label:after {
            opacity: 1;
          }
        }

        span {
          color: #ffffff;
          font-size: 13px;
          margin-left: 20px;

          a {
            color: #ffffff;
          }
        }
      }

      .error-message {
        color: red;
        font-size: 14px;
        margin-top: 5px;
      }
    }

    #button-container {
      display: flex;
      justify-content: center;
      margin-top: 50px;

      #animation-container {
        position: relative;
        padding-bottom: 10px;
        overflow: hidden;

        button {
          position: relative;
          display: inline-block;
          padding: 10px 20px;
          color: #ffffff;
          background-color: transparent;
          border-radius: 5px;
          font-size: 16px;
          text-decoration: none;
          text-transform: uppercase;
          transition: .5s;
          letter-spacing: 4px;
          border: none;
        }

        span {
          position: absolute;
          display: block;
          z-index: 11;
          bottom: 2px;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffffff);
          animation: btn-anim1 2s linear infinite;
        }

        @keyframes btn-anim1 {
          0% {
            left: -100%;
          }

          100% {
            left: 100%;
          }
        }

        button:hover {
          color: #ECC01B;
          border-radius: 5px;
        }

        button:active {
          scale: 0.9;
        }

        button:hover+span {
          background: linear-gradient(90deg, transparent, #ECC01B);
        }
      }
    }
  }

  #second-page-form {
    z-index: 10;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    padding: 50px 10% 20px;

    .close-button {
      position: absolute;
      top: 15px;
      right: 20px;
      background: none;
      border: none;
      font-size: 24px;
      color: #ffffff;
      cursor: pointer;
      outline: none;
      padding: 0;

      &:hover {
        color: #FF0000;
      }
    }

    #form-logo-container {
      width: 12%;
      margin-top: 10px;
      margin-bottom: 20px;

      img {
        width: 100%;
      }
    }

    #second-page-title {
      font-size: 50px;
      margin-bottom: 10px;
    }

    #second-page-contact-span {
      font-size: 30px;
      margin-bottom: 100px;
    }

    #second-page-download-span {
      font-size: 25px;
      margin-bottom: 20px;
    }

    #button-container {
      display: flex;
      justify-content: center;
      margin-bottom: 50px;

      #animation-container {
        position: relative;
        padding-bottom: 10px;
        overflow: hidden;

        button {
          position: relative;
          display: inline-block;
          padding: 10px 20px;
          color: #ffffff;
          background-color: transparent;
          border-radius: 5px;
          font-size: 16px;
          text-decoration: none;
          text-transform: uppercase;
          transition: .5s;
          letter-spacing: 4px;
          border: none;
        }

        span {
          position: absolute;
          display: block;
          z-index: 11;
          bottom: 2px;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffffff);
          animation: btn-anim1 2s linear infinite;
        }

        @keyframes btn-anim1 {
          0% {
            left: -100%;
          }

          100% {
            left: 100%;
          }
        }

        button:hover {
          color: #ECC01B;
          border-radius: 5px;
        }

        button:active {
          scale: 0.9;
        }

        button:hover+span {
          background: linear-gradient(90deg, transparent, #ECC01B);
        }
      }
    }
  }
}
</style>