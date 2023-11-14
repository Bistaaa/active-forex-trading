<script>
import { handleVipButtonClick } from '../../main.js';

export default {
  name: 'Jumbotron',
  data() {
    return {

    }
  },
  methods: {
    ShowForm() {

      handleVipButtonClick();
    },
  },
}
</script>

<template>
  <div id="jumbotron-container">
    <div id="jumbotron-content-container">
      <h1 id="jumbotron-title">Il nostro motto:
        <br>
        <span id="jumbotron-span">"Stoppare le perdite sul nascere e lasciar correre i profitti"</span>
      </h1>
      <div id="left-column">
        <h3>Servizi gratuiti sbloccando il gruppo privato Elite:</h3>
        <ul>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>TUTTI I NOSTRI INGRESSI A MERCATO</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>SERVIZIO DI COPYTRADING AUTOMATICO</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>INDICATORE "ACTIVE FOREX KEY-LEVELS"</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>VIDEOCORSO FORMATIVO "LA MIA STRATEGIA"</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>VIDEOAPPROFONDIMENTI "FULL IMMERSION"</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>VIDEOANALISI SETTIMANALI</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>VIDEOANALISI "LAMPO" GIORNALIERE</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>ACCESSO ALL'APPUNTAMENTO "SPAZIO ANALISI"</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>ACCESSO ALL'APPUNTAMENTO "FORZA VALUTE"</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>ACCESSO ALL'APPUNTAMENTO "FOCUS SETTIMANALE"</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>CONDIZIONI DI TRADING AGEVOLATE</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>VPS GRATUITA</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>RIMBORSO 5% SUL PRIMO DEPOSITO IN USDT</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>T-SHIRT "ACTIVE FOREX TRADING"</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>PIANO COMPENSI "PORTA UN AMICO E TROVA UN TESORO"</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>E-BOOK "DALLE BASI ALLA MIA STRATEGIA"</li>
          </div>
          <div class="bonus-container">
            <font-awesome-icon icon="fa-solid fa-check" />
            <li>BIDIRECTIONAL MAPPING</li>
          </div>
        </ul>
      </div>
      <div class="vip-button-container">
        <button class="vip-button" @click="ShowForm">Sblocca gratis il gruppo Elite</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#jumbotron-container {
  background-image: url(../../assets/img/jumbotron-background.png);
  background-size: cover;
  width: 100%;

  #jumbotron-content-container {
    width: 100%;
    height: 100%;
    background-color: rgba($color: #ffffff, $alpha: 0.7);
    padding: 100px 5%;

    #jumbotron-title {
      padding: 0 15%;
      font-size: 61px;
      text-align: center;

      #jumbotron-span {
        font-size: 70px;
        text-align: center;
        color: #ECC01B;
        -webkit-text-stroke: 2px black;
      }
    }

    @media screen and (max-width: 901px) {

      #jumbotron-title {
        padding: 0 10%;
        font-size: 55px;

        #jumbotron-span {
          font-size: 65px;
        }
      }
    }

    @media screen and (max-width: 601px) {
      #jumbotron-title {
        padding: 0;
        font-size: 35px;

        #jumbotron-span {
          font-size: 40px;
        }
      }
    }

    #left-column {
      width: 50%;
      margin: 100px 0;

      h3 {
        font-size: 35px;
        margin-bottom: 30px;
        text-decoration: underline;
      }

      @media screen and (max-width: 601px) {
        h3 {
          font-size: 30px;
        }
      }

      ul {
        list-style: none;

        .bonus-container {
          display: flex;
          align-items: center;
          gap: 10px;

          li {
            font-size: 23px;
            font-weight: bold;
            line-height: 35px;
          }

          @media screen and (max-width: 601px) {
            li {
              font-size: 15px;
              line-height: normal;
              text-align: left;
            }
          }
        }

        @media screen and (max-width: 601px) {
          .bonus-container {
            margin-bottom: 10px;
          }
        }
      }
    }

    @media screen and (max-width: 901px) {

      #left-column {
        width: 100%;
        margin: 100px 0;
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 901px) {

  #jumbotron-container {
    background-position: 50% 40%;
  }
}
</style>
