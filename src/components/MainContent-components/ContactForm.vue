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
      },
    };
  },
  methods: {
    submitForm() {
      // Qui puoi inviare i dati a Google Sheets utilizzando l'API di Google Sheets o qualsiasi altro servizio di terze parti che preferisci.
      // Assicurati di configurare l'invio dei dati nel tuo metodo submitForm.
    },
  },
}
</script>

<template>
  <div id="form-container">
    <form @submit="submitForm">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>

      <div class="form-group">
        <label for="surname">Cognome:</label>
        <input type="text" id="surname" v-model="formData.surname" required>
      </div>

      <div class="form-group">
        <label for="phone">Telefono:</label>
        <input type="text" id="phone" v-model="formData.phone" required>
      </div>

      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>

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
</template>

<style scoped lang="scss">
#form-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 60vw;
  border: 5px solid black;
  padding: 5%;
  background: #1B1717;
  z-index: 10;

  .form-group {
    position: relative;

    input {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      background: transparent;
    }

    label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      pointer-events: none;
      transition: .5s;
    }

    input:focus~label,
    input:valid~label {
      top: -20px;
      left: 0;
      color: #bdb8b8;
      font-size: 12px;
    }
  }

  #button-container {
    display: flex;
    justify-content: center;

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
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        transition: .5s;
        letter-spacing: 4px;
        border: none;

        &:hover {
          background-color: #ffffff;
          color: #000000;
          border-radius: 5px;
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
}
</style>