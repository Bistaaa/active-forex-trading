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
      const firstFormPage = document.getElementById('first-page-form');
      const secondFormPage = document.getElementById('second-page-form');

      if (firstFormPage && secondFormPage) {
        if (firstFormPage.classList.contains('show-form')) {
          firstFormPage.classList.remove('show-form');
          firstFormPage.classList.add('hide-form');
          secondFormPage.classList.remove('hide-form');
          secondFormPage.classList.add('show-form');
        }
      }
    },


    onFormSubmit() {
      this.changeFormPage();
      this.sendEmail();
      this.submitForm();
    },

    sendEmail() {
      emailjs.sendForm('service_77cvccw', 'template_wo0rwek', this.$refs.form, '6icwihSvMBfuBbUal')
        .then((result) => {
          console.log('SUCCESS!', result.text);
        }, (error) => {
          console.log('FAILED...', error.text);
        });
    },

    submitForm() {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbylZ0QHirhHdHTKC2R-kMllEcjTka8VhEGaB-WD-JVOeeS4GFy5EctCHBQGmET-tiRz/exec';
      const form = document.forms['contact-form'];

      // Fetch request to submit the form data
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          // Reset the form data after successful submission
          this.formData = {
            name: '',
            surname: '',
            phone: '',
            email: '',
            checkbox: false // Include this line if you have a checkbox in the form
          };
          /* alert("Thank you!"); */
        })
        /* .then(() => { window.location.reload(); }) */
        .catch(error => console.error('Error!', error.message))
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
      <h2 id="form-title">COMPILA IL FORM</h2>
      <span id="form-explaination">e scarica l’E-book.</span>
      <div id="form-container">
        <form method="post" action="" ref="form" name="contact-form" id="contact-form" @submit.prevent="onFormSubmit">
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

          <div class="form-checkbox-container">
            <input type="checkbox" value="None" id="checkbox" name="checkbox" v-model="formData.checkbox"
              @invalid="showCheckboxError" required>
            <label for="checkbox"></label>
            <span>Accetto di inviare le mie informazioni a Active Forex Trading che le userà in conformità con la propria
              informativa sulla privacy che dichiaro di aver letto. Visualizza le <a
                href="https://www.flipbookpdf.net/web/site/833816ac165c7847026bce9b49317f9f34e54db2202206.pdf.html#page/1">Note
                legali ed informativa sulla privacy</a> </span>
          </div>
          <div v-if="checkboxError" class="error-message">Devi accettare l'informativa sulla privacy.</div>

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
      <div id="second-page-link-container">
        <div id="second-page-left-side">
          <span class="second-page-download-span">Scarica l'E-book:</span>
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
        <div id="second-page-right-side">
          <span class="second-page-download-span">Accedi al gruppo telegram "BASE"</span>
          <div id="button-container">
            <div id="animation-container">
              <a href="https://t.me/activeforexbase" target="_blank">
                <button type="button">
                  Accedi
                </button>
              </a>
              <span></span>
            </div>
          </div>
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

  /* &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #D62929;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #A61D1D;
  } */

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

    #form-title {
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

    @media screen and (max-width: 601px) {
      #form-logo-container {
        width: 20%;
      }

      #form-title {
        font-size: 35px;
        margin-bottom: 0;
      }

      #form-explaination {
        margin-top: 0;
        margin-bottom: 40px;
        font-size: 20px;
      }
    }

    .close-button {
      position: absolute;
      top: 15px;
      right: 20px;
      background: none;
      border: none;
      font-size: 24px;
      color: #FF0000;
      cursor: pointer;
      outline: none;
      padding: 0;
    }

    .close-button:hover {
      color: #ffffff;
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

        @media screen and (max-width: 601px) {
          .input-group-input {
            padding: 10px;
            font-size: 15px;
            line-height: 17px;
            border: 2px solid #ffffff;
            ;
            outline: none;
          }
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

        @media screen and (max-width: 601px) {
          span {
            font-size: 11px;
            margin-left: 20px;
          }
        }
      }

      .error-message {
        color: red;
        font-size: 14px;
        margin-top: 5px;
      }
    }

    @media screen and (max-width: 601px) {
      #form-container {
        width: 80%;
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
    padding: 50px 0;

    .close-button {
      position: absolute;
      top: 15px;
      right: 20px;
      background: none;
      border: none;
      font-size: 24px;
      color: #FF0000;
      cursor: pointer;
      outline: none;
      padding: 0;

      &:hover {
        color: #ffffff;
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

    @media screen and (max-width: 601px) {
      #form-logo-container {
        width: 20%;
      }

      #second-page-title {
        font-size: 35px;
        margin-bottom: 25px;
        text-align: center;
        line-height: 40px;
      }

      #second-page-contact-span {
        font-size: 22px;
        margin-bottom: 100px;
        text-align: center;
      }
    }

    #second-page-link-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      #second-page-left-side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;

        .second-page-download-span {
          font-size: 25px;
          margin-bottom: 20px;
          text-align: center;
        }
      }

      #second-page-right-side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;

        .second-page-download-span {
          font-size: 25px;
          margin-bottom: 20px;
          text-align: center;
        }
      }
    }

    @media screen and (max-width: 601px) {
      #second-page-link-container {
        flex-direction: column;
        gap: 50px;
      }
    }
  }

  @media screen and (max-width: 601px) {
    #second-page-form {
      padding: 10px 0 50px;
    }
  }
}

@media screen and (max-width: 901px) {
  #contactform-container {
    max-height: 90vh;
    width: 95vw;
    border-radius: 30px;
    padding: 0 5% 50px;
    background: #1B1717;
    z-index: 10;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
}

#button-container {
  display: flex;
  justify-content: center;

  #animation-container {
    position: relative;
    padding-bottom: 10px;
    overflow: hidden;

    a {
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

        &:hover {
          color: #ECC01B;
          border-radius: 5px;
        }
      }

      &:hover+span {
        background: linear-gradient(90deg, transparent, #ECC01B);
      }
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
  }
}
</style>