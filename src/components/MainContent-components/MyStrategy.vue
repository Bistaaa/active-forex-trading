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
        <div id="mystrategy-content-container">
            <h2>LA NOSTRA STRATEGIA VINCENTE</h2>
            <div id="strategy-description-container">
                <div class="neon-border" id="left-description-container">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h3>STOPPARE LE PERDITE SUL NASCERE E LASCIAR CORRERE I PROFITTI</h3>
                    <p>Significa che anche se prendiamo qualche stop-loss non ci fanno male perché sono stoppati sul
                        nascere
                        impostandoli davvero corti in zone “magiche” del grafico che nel mio corso insegno a riconoscere
                        ed
                        individuare; allo stesso tempo mettiamo dei <b>“take-profit” medio-lunghi</b>: in tal modo con
                        il
                        primo
                        trade che parte nella direzione giusta lo lasciamo correre e andiamo velocemente a recuperare le
                        piccole
                        perdite subite andando in GAIN.</p>
                </div>
                <div class="neon-border" id="right-description-container">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h3>UNICA STRATEGIA ADATTA ANCHE A CONTI MEDIO PICCOLI</h3>
                    <p>perché ha draw-down impercettibili che non fanno bruciare il conto proprio perché utilizzo
                        stop-loss
                        stretti: la gente si fa incantare su Istagram dove sulle storie vengono mostrati “SCREEN” com
                        mega
                        risultati di trading che in effetti sono veri ma realizzati da chi ha conti da 100.000 euro in
                        su
                        dove
                        non usano STOP-LOSS: cosa succede? Semplice: loro possono tenere tante posizioni aperte anche in
                        forte
                        perdita, ma i piccoli trader che hanno conti medio/piccoli che provano ad utilizzare la loro
                        strategia
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
    </div>
</template>

<style scoped lang="scss">
#mystrategy-container {
    background-image: url(../../assets/img/20.png);
    background-size: cover;
    width: 100%;

    #mystrategy-content-container {
        width: 100%;
        height: 100%;
        padding: 100px 10%;
        background-color: rgba($color: #ffffff, $alpha: 0.7);

        h2 {
            text-align: center;
            font-size: 60px;
            margin-bottom: 150px;
            color: #000000;
        }

        #strategy-description-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 100px;
            width: 100%;

            #left-description-container {
                display: flex;
                flex-direction: column;
                width: 40%;
                padding: 40px 25px;
                transition: transform 0.3s;

                &:hover {
                    transform: scale(1.1);
                }

                h3 {
                    font-size: 35px;
                    text-align: center;
                    margin-bottom: 30px;
                }

                p {
                    font-size: 23px;
                    text-align: justify;
                }
            }

            #right-description-container {
                display: flex;
                flex-direction: column;
                width: 40%;
                padding: 40px 25px;
                transition: transform 0.3s;

                &:hover {
                    transform: scale(1.1);
                }

                h3 {
                    font-size: 35px;
                    text-align: center;
                    margin-bottom: 30px;
                }

                p {
                    font-size: 23px;
                    text-align: justify;
                }
            }
        }
    }
}
</style>