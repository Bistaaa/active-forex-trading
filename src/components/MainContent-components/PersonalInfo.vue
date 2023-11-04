<script>
import { handleVipButtonClick } from '../../main.js';

export default {
    name: 'PersonalInfo',
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
    <div id="personalinfo-container">
        <p class="category-icon-black">
            <font-awesome-icon icon="fa-solid fa-user" />
        </p>
        <h2>CHI SONO</h2>
        <div id="personalinfo-main-content">
            <div id="personalinfo-upper-content">
                <p class="personalinfo-text">Sono Riccardo Bistarelli, il fondatore di Active Forex Trading.
                    <br>
                    <br>
                    La mia avventura in questo settore ha inizio nel 2021, ma è il risultato di oltre 25 anni di esperienza
                    nel
                    mondo finanziario. Durante il mio percorso,
                    ho esplorato diverse sfaccettature degli investimenti, iniziando con le tradizionali operazioni in borsa
                    e
                    successivamente muovendomi nel mondo del Forex e delle opzioni binarie. Alla fine, ho scelto di
                    specializzarmi nel Forex Valutario, nelle materie prime e negli indici.
                    <br>
                    <br>
                    La mia preparazione è il frutto di studi approfonditi in vari campi, tra cui l'analisi tecnica,
                    l'analisi
                    ciclica e l'analisi fondamentale. La mia specializzazione principale è l'analisi "PRICE ACTION", che ho
                    ulteriormente perfezionato con le conoscenze acquisite in due decenni di esperienza. Questa versione
                    "evoluta" dell'analisi tiene conto di conferme derivanti dalla mia vasta conoscenza tecnica, ciclica e
                    fondamentale.
                    <br>
                    <br>
                    Come trader analista dei mercati finanziari, ho sviluppato una strategia che si basa sul mio motto
                    personale: "STOPPARE LE PERDITE SUL NASCERE E LASCIAR CORRERE I PROFITTI". Questo approccio ha ispirato
                    la
                    creazione del mio corso di trading avanzato, intitolato "COME ESSERE PROFITTEVOLE CON LA MIA STRATEGIA".
                    Offro lezioni personalizzate "One to One" tramite Zoom, per garantire un apprendimento approfondito.
                    Ho anche creato un indicatore semiautomatico chiamato "ACTIVE FOREX KEY LEVEL" che si integra con la
                    piattaforma "META TRADE 4". Questo indicatore è progettato per ottimizzare la mia strategia.
                    <br>
                    <br>
                </p>
            </div>

            <div id="personalinfo-bottom-content">
                <p class="personalinfo-text">
                    Nel corso degli anni, ho ideato diverse tecniche di trading che si integrano perfettamente con la mia
                    strategia, inclusa l'innovativa tecnica "BIDIREZIONALE" e il relativo "Bidirectional Mapping": una
                    mappatura
                    dei principali market-mover ideali per utilizzare la strategia bidirezionale.
                    <br>
                    <br>
                    Recentemente, ho pubblicato un libro intitolato "IL TRADING: DALLE BASI FINO ALLA MIA STRATEGIA,"
                    disponibile anche in versione e-book gratuita.
                    <br>
                    <br>
                    Per condividere le mie conoscenze, gestisco un canale YouTube
                    in cui pubblico analisi Price Action e video su vari aspetti del trading. Inoltre, ho un canale e un
                    gruppo
                    Telegram in cui mostro la mia operatività e dove gli iscritti possono condividere esperienze. Offriamo
                    rubriche informative, come lo "Spazio Analisi," "Forza valute" e "Focus Settimanale."
                    <br>
                    <br>
                    In sintesi, sono un esperto trader e formatore nel campo del trading finanziario, specializzato in
                    analisi
                    Price Action evoluta, con una vasta gamma di risorse e strumenti per condividere la mia conoscenza e
                    aiutare
                    gli altri a diventare trader di successo.
                </p>
            </div>

        </div>
        <div class="vip-button-container">
            <button class="vip-button" @click="ShowForm">Sblocca gratis il gruppo Elite</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
#personalinfo-container {
    background-color: #ECC01B;
    padding: 100px 10%;

    h2 {
        font-size: 65px;
        text-align: center;
        text-decoration: underline;
        margin-bottom: 100px;
    }

    #personalinfo-main-content {
        margin-bottom: 100px;

        #personalinfo-upper-content {
            background-image: url(../../assets/img/4.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: right;
            margin-bottom: 100px;

            .personalinfo-text {
                background-color: #ECC01B;
                width: 65%;
                padding-right: 50px;
                font-size: 20px;
                text-align: justify;
            }
        }

        #personalinfo-bottom-content {
            background-image: url(../../assets/img/4.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: left;
            display: flex;
            justify-content: end;

            .personalinfo-text {
                background-color: #ECC01B;
                width: 65%;
                padding-left: 50px;
                font-size: 20px;
                text-align: justify;
            }
        }

    }
}
</style>