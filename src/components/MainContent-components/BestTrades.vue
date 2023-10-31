<script>
export default {
    name: 'BestTrades',
    data() {

    },
    methods: {

    },
}
</script>

<template>
    <div id="best-trades-container">
        <span class="category-icon">
            <font-awesome-icon icon="fa-solid fa-chart-line" />
        </span>
        <h2>I MIGLIORI TRADE DELL'ANNO</h2>
        <div id="trades-container">

        </div>
    </div>
</template>

<style scoped lang="scss">
#best-trades-container {
    background-color: #ffffff;
    padding: 100px 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: #000000;
        font-size: 65px;
        text-align: center;
        text-decoration: underline;
        margin-bottom: 30px;
    }

    #trades-container {}
}
</style>