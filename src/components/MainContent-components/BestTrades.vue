<script>
export default {
    name: 'BestTrades',
    data() {
        return {
            images: [
                '4.png',
                '10.png',
                '20.png',
                '4.png',
                '10.png',
                '20.png',
                '4.png',
                '10.png',
                '20.png',
                '4.png',
                '10.png',
                '20.png',
                '4.png',
                '10.png',
                '20.png',
                '4.png',
                '10.png',
                '20.png',
            ]
        };
    },

    methods: {

    },
}
</script>

<template>
    <div id="best-trades-container">
        <p class="category-icon-black">
            <font-awesome-icon icon="fa-solid fa-chart-line" />
        </p>
        <h2>I MIGLIORI TRADE DELL'ANNO</h2>
        <div id="trades-container">
            <div class="trade-image-container" v-for="(image, index) in images" :key="index">
                <img :src="'src/assets/img/' + image" class="trades-images" alt="Trade Image" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#best-trades-container {
    background-color: #ECC01B;
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
        margin-bottom: 70px;
    }

    #trades-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .trade-image-container {
            width: calc(100% / 4);
            padding: 10px;

            .trades-images {
                width: 100%;
            }
        }
    }
}
</style>