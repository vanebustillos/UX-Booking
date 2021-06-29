<template>
    <v-container class="lp-content">
        <v-row class="row1">
            <v-col class="column">
                <v-img
                    class="image1"
                    height="660"
                    width="612"
                    src="https://www.crankyfranksbbq.com/wp-content/uploads/travel37.jpg"
                />
            </v-col>
            <v-col class="column">
                <div class="text-h1 main-header">
                    Experiencias de la gente
                </div>
                <div class="text-subtitle-1 header-sub">
                    Viaja y cuentanos tus experiencias para ganar mas puntos.
                </div>
            </v-col>
        </v-row>
        <v-row class="row2">
            <v-col class="column">
                <div class="text-h2 header2">
                    Canjea tus puntos
                </div>
                <v-img
                    class="image2"
                    height="344"
                    width="612"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFYgd9HH7lQ-8uv74vBOhEvAhXW4x2A6JyLx_MtFeMRT0b9kP3Izebs40szlUor4vs9I&usqp=CAU"
                />
            </v-col>
             <v-col class="column">
                <div class="text-subtitle-1 header2-sub">
                    Canjea tus puntos por viajes, transporte y disfruta al maximo con nosotros.
                    Se parte de nuestra gran comunidad!
                </div>
            </v-col>
            <v-col class="column">
                <div class="text-body-2 subheader1">
                    Reclama tus recompensas
                </div>
            </v-col>
            <v-col>
                <small-card />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SmallCard from "../components/SmallCard.vue";
export default {
  components: { SmallCard },
    setup() {
        
    },
}
</script>

<style scoped>
.lp-content {
    min-width: 1440px;
}

.column {
    padding: 0%;
}

.image1 {
    margin-left: 96px;
    margin-top: 72px;
}
.main-header {
    text-align: center;
    width: 334px;
    height: 112px;
    font-weight: 700;
    margin-left: 151px;
    margin-top: 280px;
}
.header-sub{
    text-align: center;
    width: 416px;
    height: 108px;
    margin-left: 111px;
    margin-top: 24px;
}

.row2 {
    /* background: url("../assets/LP-images/BGimage1.jpg") no-repeat center center;
    position: absolute;
    object-fit: cover; */
    margin-top: 72px;
}

.header2 {
    width: 332px;
    height: 40px;
    font-weight: 700;
    margin-top: 72px;
    margin-left: 96px;
}
.header2-sub{
    text-align: center;
    width: 612px;
    height: 308px;
    margin-left: 24px;
    margin-top: 160px;
    margin-right: 96px;
}
.image2 {
    margin-left: 96px;
    margin-top: 48px;
}

.subheader1{
    width: 428px;
    height: 32px;
    margin: 48px 916px 48px 96px;
}
</style>