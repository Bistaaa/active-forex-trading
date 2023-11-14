<script>

export default {
    name: 'Shop',
    data: function () {
        return {
            loaded: false,
            paidFor: false,
            product: {
                price: 149.99,
                name: "the lamp",
                description: "leg lamp from that one movie",
                img: "./assets/lamp.jpg"
            }
        };
    },
    mounted() {
        const script = document.createElement("script");
        script.src =
            "https://www.paypal.com/sdk/js?client-id=AYROxkOqU2jNT3TuxNZasuUMfLzO9BnX9o8E-BnVWulilXAAhxasZiLLfrp7217FHl-4oow9wGmRm98W";
        script.addEventListener("load", this.setLoaded);
        document.body.appendChild(script);
    },
    methods: {
        setLoaded() {
            this.loaded = true;
            window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: this.product.name,
                                    amount: {
                                        currency_code: "EUR",
                                        value: this.product.price
                                    }
                                }
                            ]
                        });
                    },
                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture();
                        this.paidFor = true;
                        console.log(order);
                    },
                    onError: err => {
                        console.log(err);
                    }
                })
                .render(this.$refs.paypal);
        }
    }
};
</script>



<template>
    <div id="shop-overall-container">
        <div v-if="!paidFor">
            <h1>{{ product.name }}</h1>

            <p>{{ product.description }}</p>
            <p>{{ product.price }} $</p>

        </div>

        <div v-if="paidFor">
            <h1>Noice, you bought a beautiful lamp!</h1>
        </div>

        <div ref="paypal"></div>
    </div>
</template>
  

  
<style scoped lang="scss"></style>