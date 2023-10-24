<script>
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

    submitForm() {
      // Qui puoi inviare i dati a Google Sheets utilizzando l'API di Google Sheets o qualsiasi altro servizio di terze parti che preferisci.
    },
  },
}
</script>

<template>
  <div id="contactform-container">
    <div id="form-logo-container">
      <img src="../../assets/img/white-logo.png" alt="">
    </div>
    <h2>COMPILA IL FORM</h2>
    <button class="close-button" onclick="closeWindow()">&#10006;</button>
    <div id="form-container">
      <form @submit="submitForm">
        <div class="form-group">
          <input type="text" id="name" class="input-group-input" v-model="formData.name" required>
          <label for="name" class="input-group-label">Nome:</label>
        </div>

        <div class="form-group">
          <input type="text" id="surname" class="input-group-input" v-model="formData.surname" required>
          <label for="surname" class="input-group-label">Cognome:</label>
        </div>

        <div class="form-group">
          <input type="number" id="phone" class="input-group-input" v-model="formData.phone" required>
          <label for="phone" class="input-group-label">Cellulare:</label>
        </div>

        <div class="form-group">
          <input type="email" id="email" class="input-group-input" v-model="formData.email" required>
          <label for="email" class="input-group-label">E-mail:</label>
        </div>

        <div class="form-checkbox-container">
          <input type="checkbox" value="None" id="checkbox" name="checkbox" v-model="formData.checkbox"
            @invalid="showCheckboxError" required>
          <label for="checkbox"></label>
          <span>Mio Testo Accanto alla Checkbox</span>
        </div>
        <div v-if="checkboxError" class="error-message">Devi accettare i Termini e Condizioni.</div>

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
</template>

<style scoped lang="scss">
#contactform-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90vh;
  width: 50vw;
  border-radius: 30px;
  padding: 0 5% 50px;
  background: #1B1717;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

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
    font-size: 50px;
    text-align: center;
    margin-bottom: 50px;
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
      margin-bottom: 35px;

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
</style>