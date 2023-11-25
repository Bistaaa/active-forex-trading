<script>
export default {
    name: 'Faq',
    data() {
        return {
            faqList: [
                {
                    question: `PERCHE’ SCEGLIERE LA NOSTRA STRATEGIA?`,
                    answer:
                        `La nostra strategia si basa sul motto "STOPPARE LE PERDITE SUL NASCERE E LASCIAR CORRERE I PROFITTI".Impostiamo trade con stop-loss stretti in punti chiave del grafico e take profit medio-lunghi.Questo ci permette di bloccare le perdite e andare in positivo con la prima operazione che parte nella direzione giusta. La caratteristica distintiva della nostra strategia è il suo adattamento anche ai conti medio-piccoli grazie agli stop loss stretti che permettono draw-down minimi evitando perdite significative, al contrario di molti trader che non usano stop-loss e ti fanno bruciare il conto.`,
                    active: false,
                },
                {
                    question: `L’ACCESSO AL GRUPPO PRIVATO “ELITE” E’ DAVVERO GRATUITO?`,
                    answer:
                        `Si, l’accesso al Gruppo è totalmente gratuito, così come sono gratuiti tutti i servizi che trovi al suo interno, l’unico vincolo è fare trading con il nostro Broker partner.`,
                    active: false,
                },
                {
                    question: `QUALI SONO I SERVIZI A CUI ACCEDO GRATUITAMENTE NEL GRUPPO PRIVATO “ELITE”?`,
                    answer:
                        `Accedendo al Gruppo Privato “Elite” accedi gratuitamente ai seguenti servizi: ACCESSO A TUTTI I NOSTRI INGRESSI A MERCATO - SERVIZIO DI COPY-TRADING AUTOMATICO - INDICATORE "ACTIVE FOREX KEY-LEVEL" -  VIDEOCORSO FORMATIVO "LA MIA STRATEGIA" - VIDEOAPPROFONDIMENTI "FULL IMMERSION" - TUTTE LE MIE VIDEOANALISI SETTIMANALI LIVE E REGISTRATE - VIDEOANALISI "LAMPO" GIORNALIERE LIVE E REGISTRATE - ACCESSO ALL'APPUNTAMENTO  "SPAZIO ANALISI" - ACCESSO ALL'APPUNTAMENTO "FORZA VALUTE" - ACCESSO ALL'APPUNTAMENTO "FOCUS SETTIMANALE" - CONDIZIONI DI TRADING AGEVOLATE - VPS GRATUITO  - RIMBORSO 5 % SUL PRIMO   DEPOSITO IN USDT - T - SHIRT "ACTIVE FOREX TRADING" - PIANO COMPENSI: "PORTA UN AMICO E TROVI UN TESORO" - E - BOOK "DALLE BASI ALLA MIA STRATEGIA" - "BIDIRECTIONAL MAPPING"`,
                    active: false,
                },
                {
                    question: `COME FATE AD OFFRIRE GRATUITAMENTE TUTTI QUESTI SERVIZI?`,
                    answer:
                        `Possiamo permetterci di offrire i servizi gratuiti perché è il nostro Broker Partner a riconoscerci una commissione.`,
                    active: false,
                },
                {
                    question: `CHE ESPERIENZA AVETE?`,
                    answer:
                        `La mia avventura in questo settore ha inizio nel 2021, ma è il risultato di oltre 25 anni di esperienza nel mondo finanziario. Durante il mio percorso, ho esplorato diverse sfaccettature degli investimenti, iniziando con le tradizionali operazioni in borsa e successivamente muovendomi nel mondo del Forex e delle opzioni binarie. Alla fine, ho scelto di specializzarmi nel Forex Valutario, nelle materie prime e negli indici.`,
                    active: false,
                },
                {
                    question: `COME FACCIO AD ACCEDERE AL CORSO GRATUITO?`,
                    answer:
                        `È molto semplice: una volta che farai parte del Gruppo Privato “Elite” ti sarà inviata una mail contenente il link per poter vedere il Videocorso che potrai rivedere quante volte vorrai.`,
                    active: false,
                },
                {
                    question: `COME FACCIO AD INSTALLARE L’INDICATORE “ACTIVE FOREX KEY LEVEL” SU MT4?`,
                    answer:
                        `E’ molto semplice: una volta che farai parte del Gruppo Privato “Elite” ti sarà inviata una mail con tutte le istruzioni descrittive (compreso un link per la video-istruzione)`,
                    active: false,
                },
                {
                    question: `IL SERVIZIO DI COPY-TRADING AUTOMATICO NECESSITA DI TENERE SEMPRE IL PC ACCESO?`,
                    answer:
                        `No, con il nostro Copy-trading non è necessario tenere il vostro PC sempre acceso (come la maggior parte richiedono): è sufficiente avere copertura Dati sul cellulare: infatti l’APP si scarica sul cellulare.`,
                    active: false,
                },
                {
                    question: `POSSO FARE OPERAZIONI IN MANUALE MENTRE E’ ATTIVO IL COPY-TRADING?`,
                    answer:
                        `Assolutamente si, mentre il copy-trading è attivo puoi fare anche operazioni manualmente e, in ogni caso, il Copy-trading è disattivabile in ogni momento tu voglia.`,
                    active: false,
                },
            ],
        };
    },
    methods: {
        toggleAnswer(index) {
            this.faqList.forEach((faq, i) => {
                if (i !== index) {
                    faq.active = false;
                }
            });
            this.faqList[index].active = !this.faqList[index].active;
        },
    },
};
</script>



<template>
    <div id="faq-overall-container">
        <h2>Frequently Asked Questions</h2>
        <div id="faqs-container">
            <div class="single-faq-container" v-for="(faq, index) in faqList" :key="index">
                <div class="faq-label" @click="toggleAnswer(index)">
                    <div class="faq-label-text">{{ faq.question }}</div>
                    <div class="faq-label-icon">
                        <span class="material-icons" :class="{ rotate: faq.active }">
                            <font-awesome-icon icon="fa-solid fa-chevron-down" />
                        </span>
                    </div>
                </div>
                <div class="faq-answer" :class="{ active: faq.active }">
                    <div class="faq-answer-content">{{ faq.answer }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
  

  
<style scoped lang="scss">
#faq-overall-container {
    padding: 100px 10%;

    h2 {
        margin-bottom: 50px;
        font-size: 55px;
        text-align: center;
    }

    #faqs-container {
        .single-faq-container {
            .faq-label {
                cursor: pointer;
                width: 100%;
                padding: 10px 25px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                border-radius: 19px;
                background: #d0edf0;
                box-shadow: 5px 5px 10px #b7d1d3,
                    -5px -5px 10px #e9ffff;

                .faq-label-text {
                    color: #365A5E;
                    font-size: 20px;
                }

                @media screen and (max-width: 601px) {
                    .faq-label-text {
                        font-size: 17px;
                    }
                }

                .faq-label-icon {
                    padding: 2px 3px;
                    background: #d0edf0;
                    border-radius: 6px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .material-icons {
                        color: #365A5E;
                        transition: 0.3s ease;
                    }
                }
            }

            .faq-answer {
                transition: 0.3s ease;
                margin-top: 15px;
                height: 0;
                border-radius: 6px;
                color: rgba(127, 121, 121, 1);
                overflow: hidden;

                .faq-answer-content {
                    padding: 10px 0 10px 15px;
                    font-size: 20px;
                }

                @media screen and (max-width: 601px) {
                    .faq-answer-content {
                        font-size: 17px;
                    }
                }

                &.active {
                    background: #FFFFFF;
                    border: 1px solid #C7C4C4;
                    height: auto;
                    margin-bottom: 25px;
                }

                &.rotate {
                    transform: rotate(180deg);
                }
            }
        }
    }
}

@media screen and (max-width: 601px) {
    #faq-overall-container {
        padding: 100px 5%;
    }
}
</style>