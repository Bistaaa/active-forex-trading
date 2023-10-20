<script>

export default {
    name: 'MyStrategy',
    data() {
        return {

        }
    },
}
</script>

<template>
    <div id="mystrategy-container">
        <h2>La nostra strategia vincente</h2>
        <div id="strategy-description-container">
            <div id="upper-container">
                <h3>Cosa mi DISTINGUE dagli altri: la mia strategia che insegno che si basa sul motto
                    “STOPPARE LE PERDITE SUL NASCERE E LASCIAR CORRERE I PROFITTI”:</h3>
                <p>Significa che anche se prendiamo qualche stop-loss non ci fanno male perché sono stoppati sul nascere
                    impostandoli davvero corti in zone “magiche” del grafico che nel mio corso insegno a riconoscere ed
                    individuare; allo stesso tempo mettiamo dei <b>“take-profit” medio-lunghi</b>: in tal modo con il primo
                    trade che parte nella direzione giusta lo lasciamo correre e andiamo velocemente a recuperare le piccole
                    perdite subite andando in GAIN.</p>
            </div>
            <div id="bottom-container">
                <h3>Unica strategia adatta ANCHE a conti medio piccoli</h3>
                <p>perché ha draw-down impercettibili che non fanno bruciare il conto proprio perché utilizzo stop-loss
                    stretti: la gente si fa incantare su Istagram dove sulle storie vengono mostrati “SCREEN” com mega
                    risultati di trading che in effetti sono veri ma realizzati da chi ha conti da 100.000 euro in su dove
                    non usano STOP-LOSS: cosa succede? Semplice: loro possono tenere tante posizioni aperte anche in forte
                    perdita, ma i piccoli trader che hanno conti medio/piccoli che provano ad utilizzare la loro strategia
                    BRUCIANO I LORO CONTI E PERDONO TUTTO perché non reggono il forte draw-down.</p>
            </div>
        </div>
        <div class="button-container">
            <div class="vip-button b05_3d_roll">
                <div>Click!</div>
                <div>Sblocca gratis Gruppo VIP</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#mystrategy-container {
    padding: 100px 10%;

    h2 {
        text-align: center;
        font-size: 50px;
        margin-bottom: 150px;
    }

    #strategy-description-container {
        display: flex;
        flex-direction: column;

        #upper-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 50px;

            h3 {
                font-size: 30px;
                width: 40%;
                text-align: center;
            }

            p {
                font-size: 20px;
                width: 40%;
                text-align: center;
            }
        }

        #bottom-container {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            margin-bottom: 50px;

            h3 {
                font-size: 30px;
                width: 40%;
                text-align: center;
            }

            p {
                font-size: 20px;
                width: 40%;
                text-align: center;
            }
        }
    }
}
</style>