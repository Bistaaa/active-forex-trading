<script>
export default {
    name: 'Shop',
    data() {
        return {
            selectedItemID: 1,
            selectedItemObject: {},
            items: [
                {
                    id: 1,
                    name: 'Corso',
                    description: `questa è la descrizione del corso: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea earum consequatur omnis laudantium eum nam hic animi necessitatibus voluptates, repudiandae corporis quasi nihil odit nulla qui, aut molestiae voluptatum!
                    Ducimus quasi minus, deserunt sequi sit, odit autem illo non dolorem assumenda quas culpa repudiandae reprehenderit eos itaque voluptate eaque minima, rem ex unde doloremque? Illum nemo necessitatibus dignissimos at?`,
                    price: 300
                },
                {
                    id: 2,
                    name: '1 to 1',
                    description: `questa è la descrizione del 1 to 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea earum consequatur omnis laudantium eum nam hic animi necessitatibus voluptates, repudiandae corporis quasi nihil odit nulla qui, aut molestiae voluptatum!
                    Ducimus quasi minus, deserunt sequi sit, odit autem illo non dolorem assumenda quas culpa repudiandae reprehenderit eos itaque voluptate eaque minima, rem ex unde doloremque? Illum nemo necessitatibus dignissimos at?`,
                    price: 100
                },
                {
                    id: 3,
                    name: 'Indicatore',
                    description: `questa è la descrizione dell'indicatore: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea earum consequatur omnis laudantium eum nam hic animi necessitatibus voluptates, repudiandae corporis quasi nihil odit nulla qui, aut molestiae voluptatum!
                    Ducimus quasi minus, deserunt sequi sit, odit autem illo non dolorem assumenda quas culpa repudiandae reprehenderit eos itaque voluptate eaque minima, rem ex unde doloremque? Illum nemo necessitatibus dignissimos at?`,
                    price: 500
                },
                {
                    id: 4,
                    name: 'Abbonamento Mensile',
                    description: `questa è la descrizione dell'abbonamento: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea earum consequatur omnis laudantium eum nam hic animi necessitatibus voluptates, repudiandae corporis quasi nihil odit nulla qui, aut molestiae voluptatum!
                    Ducimus quasi minus, deserunt sequi sit, odit autem illo non dolorem assumenda quas culpa repudiandae reprehenderit eos itaque voluptate eaque minima, rem ex unde doloremque? Illum nemo necessitatibus dignissimos at?`,
                    price: 80
                },
            ]
        };
    },

    mounted() {
        this.handleSelection()
    },

    methods: {
        handleSelection() {
            const paypalButtonsContainer = document.getElementById('paypal-buttons');
            paypalButtonsContainer.innerHTML = '';

            console.log('Elemento selezionato:', this.selectedItemID);
            this.selectedItemObject = this.items.find(item => item.id == this.selectedItemID);
            console.log(this.selectedItemObject.price);

            window.paypal.Buttons({
                createOrder(data, actions) {
                    console.log(data, actions);
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: this.selectedItemObject.price
                            }
                        }]
                    });
                },
                onApprove(data, actions) {
                    return actions.order.capture().then(function (details) {
                        console.log('Transaction completed by ' + details.payer.name.given_name);
                    });
                },
                onError(error) {
                    console.log(error);
                },
            }).render("#paypal-buttons");
        },
    }
}
</script>





<template>
    <div id="shop-overall-container">
        <h2 id="shop-title">NEGOZIO</h2>
        <div id="items-choice">
            <label for="items">Seleziona un servizio:</label>
            <select id="items" v-model="selectedItemID" @change="handleSelection">
                <option v-for="item in items" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
        </div>
        <div class="item-container">
            <h3 class="item-name">{{ selectedItemObject.name }}</h3>
            <p class="item-description">{{ selectedItemObject.description }}</p>
            <p class="item-price">Prezzo: {{ selectedItemObject.price }}€</p>
        </div>
        <div id="paypal-buttons"></div>
    </div>
</template>

  

  
<style scoped lang="scss">
#shop-overall-container {
    padding: 100px 10%;

    #shop-title {
        font-size: 55px;
        text-align: center;
    }

    #items-choice {
        font-size: 30px;
    }

    .item-container {
        width: 100%;

        .item-name {
            font-size: 40px;
        }

        .item-description {
            font-size: 25px;
        }

        .item-price {
            font-size: 35px;
        }
    }
}
</style>
