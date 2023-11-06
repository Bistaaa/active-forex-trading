<script>

export default {
    name: 'Footer',
    data() {
        return {

        }
    },
}
</script>

<template>
    <div id="footer-container">

        <!-- UPPER FOOTER -->
        <div id="upper-footer"></div>


        <!-- LOWER FOOTER -->
        <div id="lower-footer">
            <div id="social-container">
                <a href="https://www.youtube.com/channel/UCb1ZKE1eay_VPglsP0Xp7EQ" target="_blank">
                    <div class="social-icon-background" id="youtube-background">
                        <img src="../assets/img/social-icons/youtube-icon.png" class="social-icon" id="youtube-icon">
                    </div>
                </a>
                <a href="https://t.me/activeforexbase" target="_blank">
                    <div class="social-icon-background" id="telegram-background">
                        <img src="../assets/img/social-icons/telegram-icon.png" class="social-icon" id="telegram-icon">
                    </div>
                </a>
                <a href="https://www.instagram.com/active_forex_trading_/" target="_blank">
                    <div class="social-icon-background" id="instagram-background">
                        <img src="../assets/img/social-icons/instagram-icon.png" class="social-icon" id="instagram-icon">
                    </div>
                </a>
                <a href="https://www.facebook.com/activeforextrading.it/" target="_blank">
                    <div class="social-icon-background" id="facebook-background">
                        <img src="../assets/img/social-icons/facebook-icon.png" class="social-icon" id="facebook-icon">
                    </div>
                </a>
                <a href="https://wa.me/message/POHA3ZSPWN73D1" target="_blank">
                    <div class="social-icon-background" id="whatsapp-background">
                        <img src="../assets/img/social-icons/whatsapp-icon.png" class="social-icon" id="whatsapp-icon">
                    </div>
                </a>
                <a href="mailto:info@activeforextrading.it" target="_blank">
                    <div class="social-icon-background" id="mail-background">
                        <img src="../assets/img/social-icons/mail-icon.png" class="social-icon" id="mail-icon">
                    </div>
                </a>
            </div>
            <span class="bottom-footer-info" id="owner">Active Forex Trading di Bistarelli Riccardo</span>
            <span class="bottom-footer-info" id="owner-vat-number">P.IVA: 03832340545</span>
            <div id="bottom-informations"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#footer-container {

    #upper-footer {}

    #lower-footer {
        background-color: #111111;
        padding: 30px 0 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        #social-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 10px;
            margin-top: 10px;

            .social-icon-background {
                height: 50px;
                width: 50px;
                border-radius: 50%;
                position: relative;

                .social-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 20px;
                    color: #ffffff;
                }


                .social-icon:not(#facebook-icon) {
                    width: 50%;
                }

                .social-icon#facebook-icon {
                    height: 50%;
                }
            }

            #youtube-background {
                background-color: #ff0000;
            }

            #telegram-background {
                background-color: #2481CC;
            }

            #instagram-background {
                background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
            }

            #facebook-background {
                background-color: #1877F2;
            }

            #whatsapp-background {
                background-color: #25D366;
            }

            #mail-background {
                background-color: #617379;
            }
        }

        .bottom-footer-info {
            font-size: 20px;
            color: #ffffff;
        }

        #owner {
            margin: 40px 0 25px;
        }

        #owner-vat-number {
            margin-bottom: 40px;
        }
    }
}
</style>
