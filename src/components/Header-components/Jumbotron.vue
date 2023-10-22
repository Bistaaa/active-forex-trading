<script>

export default {
  name: 'Jumbotron',
  data() {
    return {

    }
  },
}
</script>

<template>
  <div id="jumbotron-container">
    <div id="jumbotron-content-container">
      <h1>Il nostro motto:
        <br>
        <span>"Stoppare le perdite sul nascere e lasciar correre i profitti"</span>
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
        <button class="vip-button">Sblocca gratis Gruppo VIP</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#jumbotron-container {
  background-image: url(../../assets/img/10.png);
  background-size: cover;
  width: 100%;

  #jumbotron-content-container {
    width: 100%;
    height: 100%;
    background-color: rgba($color: #ffffff, $alpha: 0.7);
    padding: 100px 5%;

    h1 {
      padding: 0 15%;
      font-size: 61px;
      text-align: center;

      span {
        font-size: 70px;
        text-align: center;
        color: #ECC01B;
        -webkit-text-stroke: 2px black;
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
        }
      }
    }
  }
}
</style>
