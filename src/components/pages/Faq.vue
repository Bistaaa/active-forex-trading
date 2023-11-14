<script>

export default {
    name: 'Faq',
    data() {
        return {
            faqList: [
                {
                    question: "PERCHE’ SCEGLIERE LA NOSTRA STRATEGIA?",
                    answer: 'La nostra strategia si basa sul motto "STOPPARE LE PERDITE SUL NASCERE E LASCIAR CORRERE I PROFITTI". Impostiamo trade con stop-loss stretti in punti chiave del grafico e take profit medio-lunghi. Questo ci permette di bloccare le perdite e andare in positivo con la prima operazione che parte nella direzione giusta. La caratteristica distintiva della nostra strategia è il suo adattamento anche ai conti medio-piccoli grazie agli stop loss stretti che permettono draw-down minimi evitando perdite significative, al contrario di molti trader che non usano stop-loss e ti fanno bruciare il conto.',
                    expanded: false,
                },
                {
                    question: "L’ACCESSO AL GRUPPO PRIVATO “ELITE” E’ DAVVERO GRATUITO?",
                    answer: "Si, l’accesso al Gruppo è totalmente gratuito, così come sono gratuiti tutti i servizi che trovi al suo interno, l’unico vincolo è fare trading con il nostro Broker partner.",
                    expanded: false,
                },
                {
                    question: "3. Quanto bisogna investire?",
                    answer: "Il budget minimo per partire è di 100€ anche se noi consigliamo di partire con almeno 250€-300€ per poter sfruttare al massimo il sistema.",
                    expanded: false,
                },
                {
                    question: "4. Perché lo fate gratis? Non potete guadagnarci da soli?",
                    answer: "Solo tramite i tuoi profitti il nostro servizio di affiancamento diventa remunerativo per noi. In poche parole la piattaforma affiliata ci corrisponde un 3% solo ed ESCLUSIVAMENTE dai tuoi guadagni che non viene tolta a te ma ci viene pagata a parte dal broker.",
                    expanded: false,
                },
                {
                    question: "5. Una volta entrato nel gruppo vip dovrò successivamente pagare per restare?",
                    answer: "No se entri adesso e sfrutti la promozione entrerai GRATIS e ci potrai restare per sempre senza alcun prezzo aggiuntivo o vincolo a differenza di chi non si iscriverà in tempo ai quali sarà richiesto un pagamento per accedere.",
                    expanded: false,
                },
            ],
        };
    },

    mounted() {
        this.scrollToTop();
    },

    methods: {
        toggleAccordion(faq) {
            faq.expanded = !faq.expanded;
        },

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    },
};
</script>



<template>
    <div id="faq-overall-container">
        <h2>Frequently Asked Questions</h2>
        <div id="faq-container">
            <div v-for="(faq, index) in faqList" :key="index" class="faq-item">
                <button :id="'accordion-button-' + (index + 1)" :aria-expanded="faq.expanded" @click="toggleAccordion(faq)">
                    <span class="faq-title">{{ faq.question }}</span>
                    <span class="icon" aria-hidden="true"></span>
                </button>
                <div class="accordion-content" v-if="faq.expanded">
                    <p>{{ faq.answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  

  
<style scoped lang="scss">
$bg: #fff;
$text: #7288a2;
$gray: #4d5974;
$lightgray: #e5e5e5;
$blue: #03b5d2;

#faq-overall-container {
    padding: 100px 10%;
}

h2 {
    text-align: center;
    font-size: 60px;
    margin-bottom: 10px;
    color: #000000;
    text-decoration: underline;
}

#faq-container {

    padding: 0 20%;
    margin-top: 100px;

    .faq-item {
        border-bottom: 1px solid $lightgray;

        button[aria-expanded='true'] {
            border-bottom: 1px solid $blue;
        }
    }

    button {
        position: relative;
        display: block;
        text-align: left;
        width: 100%;
        padding: 1em 0;
        color: $text;
        font-size: 1.15rem;
        font-weight: 400;
        border: none;
        background: none;
        outline: none;

        &:hover,
        &:focus {
            cursor: pointer;
            color: $blue;

            &::after {
                cursor: pointer;
                color: $blue;
                border: 1px solid $blue;
            }
        }

        .faq-title {
            padding: 1em 1.5em 1em 0;
        }

        .icon {
            display: inline-block;
            position: absolute;
            top: 18px;
            right: 0;
            width: 22px;
            height: 22px;
            border: 1px solid;
            border-radius: 22px;

            &::before {
                display: block;
                position: absolute;
                content: '';
                top: 9px;
                left: 5px;
                width: 10px;
                height: 2px;
                background: currentColor;
            }

            &::after {
                display: block;
                position: absolute;
                content: '';
                top: 5px;
                left: 9px;
                width: 2px;
                height: 10px;
                background: currentColor;
            }
        }
    }

    button[aria-expanded='true'] {
        color: $blue;

        .icon {
            &::after {
                width: 0;
            }
        }

        +.accordion-content {
            opacity: 1;
            max-height: 9em;
            transition: all 200ms linear;
            will-change: opacity, max-height;
        }
    }

    .accordion-content {
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transition: opacity 200ms linear, max-height 200ms linear;
        will-change: opacity, max-height;

        p {
            font-size: 19px;
            font-weight: 300;
            margin: 2em 0;
        }
    }
}
</style>