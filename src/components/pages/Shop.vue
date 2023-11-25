<script>
export default {
    name: 'Shop',
    data() {
        return {
            selectedItemID: null,
            items: [
                { id: 1, name: 'Corso', price: 300 },
                { id: 2, name: '1 to 1', price: 100 },
                { id: 3, name: 'Indicatore', price: 500 },
            ]
        };
    },
    methods: {
        handleSelection() {
            console.log('Elemento selezionato:', this.selectedItemID);
            const selectedItemObject = this.items.find(item => item.id == this.selectedItemID)
            console.log(selectedItemObject.price);

            window.paypal.Buttons({
                createOrder(data, actions) {
                    console.log(data, actions)
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: selectedItemObject.price
                            }
                        }]
                    })
                },
                onApprove(data, actions) {
                    return actions.order.capture().then(function (details) {
                        console.log('Transaction completed by ' + details.payer.name.given_name);
                    });
                },
                onError(error) {
                    console.log(error);
                },
            }).render("#paypal-buttons")
        },
    }
}
</script>





<template>
    <div id="shop-overall-container">
        <label for="items">Seleziona un frutto:</label>
        <select id="items" v-model="selectedItemID" @change="handleSelection">
            <option v-for="item in items" :key="item.id" :value="item.id">{{ item.name }}</option>
        </select>
    </div>
    <div id="paypal-buttons"></div>
</template>

  

  
<style scoped lang="scss"></style>