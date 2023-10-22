<script>

export default {
    name: 'PersonalInfo',
    data() {
        return {

        }
    },
}
</script>

<template>
    <div id="personalinfo-container">
        <h2>CHI SONO</h2>
        <div id="personalinfo-main-content">
            <p id="personalinfo-text">Sono Riccardo Bistarelli, il fondatore di Active Forex Trading. La mia avventura in
                questo settore ha inizio
                nel 2021, ma è il risultato di oltre 25 anni di esperienza nel mondo finanziario. Durante il mio percorso,
                ho esplorato diverse sfaccettature degli investimenti, iniziando con le tradizionali operazioni in borsa e
                successivamente muovendomi nel mondo del Forex e delle opzioni binarie. Alla fine, ho scelto di
                specializzarmi nel Forex Valutario, nelle materie prime e negli indici.
                La mia preparazione è il frutto di studi approfonditi in vari campi, tra cui l'analisi tecnica, l'analisi
                ciclica e l'analisi fondamentale. La mia specializzazione principale è l'analisi "PRICE ACTION", che ho
                ulteriormente perfezionato con le conoscenze acquisite in due decenni di esperienza. Questa versione
                "evoluta" dell'analisi tiene conto di conferme derivanti dalla mia vasta conoscenza tecnica, ciclica e
                fondamentale.
                Come trader analista dei mercati finanziari, ho sviluppato una strategia che si basa sul mio motto
                personale: "STOPPARE LE PERDITE SUL NASCERE E LASCIAR CORRERE I PROFITTI". Questo approccio ha ispirato la
                creazione del mio corso di trading avanzato, intitolato "COME ESSERE PROFITTEVOLE CON LA MIA STRATEGIA".
                Offro lezioni personalizzate "One to One" tramite Zoom, per garantire un apprendimento approfondito.
                Ho anche creato un indicatore semiautomatico chiamato "ACTIVE FOREX KEY LEVEL" che si integra con la
                piattaforma "META TRADE 4". Questo indicatore è progettato per ottimizzare la mia strategia.
                Nel corso degli anni, ho ideato diverse tecniche di trading che si integrano perfettamente con la mia
                strategia, inclusa l'innovativa tecnica "BIDIREZIONALE" e il relativo "Bidirectional Mapping". Questa
                tecnica impiega una mappatura dei principali market-mover ideali per una strategia bidirezionale.
                Recentemente, ho pubblicato un libro intitolato "IL TRADING: DALLE BASI FINO ALLA MIA STRATEGIA,"
                disponibile anche in versione e-book gratuita. Per condividere le mie conoscenze, gestisco un canale YouTube
                in cui pubblico analisi Price Action e video su vari aspetti del trading. Inoltre, ho un canale e un gruppo
                Telegram in cui mostro la mia operatività e dove gli iscritti possono condividere esperienze. Offriamo
                rubriche informative, come lo "Spazio Analisi," "Forza valute" e "Focus Settimanale."
                In sintesi, sono un esperto trader e formatore nel campo del trading finanziario, specializzato in analisi
                Price Action evoluta, con una vasta gamma di risorse e strumenti per condividere la mia conoscenza e aiutare
                gli altri a diventare trader di successo.
            </p>
            <div id="personalinfo-image-container">
                <div id="inner-image-container"></div>
            </div>
        </div>
        <div class="vip-button-container">
            <button class="vip-button">Sblocca gratis Gruppo VIP</button>
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
        display: flex;
        justify-content: flex-start;
        gap: 5%;
        margin-bottom: 100px;

        #personalinfo-text {
            width: 50%;
            font-size: 20px;
            text-align: justify;
        }

        #personalinfo-image-container {
            width: 50%;

            #inner-image-container {
                height: 100%;
                min-width: 500px;
                background-image: url(../../assets/img/4.png);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: right;
            }
        }
    }
}
</style>