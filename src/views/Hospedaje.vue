<template>
  <v-container class="hospedaje-container pa-0">
    <v-container class="hospedaje-container ma-0 pa-0">
      <v-row class="d-flex pa-0 mt-12 mb-2">
          <hospedaje-search-bar />
      </v-row>
      <v-row class="first-col d-flex pa-0 my-0">
        <v-col lg="3" class="pa-0 my-2"
          ><label class="primary--text text--darken-2 caption"
            >Precio</label
          ></v-col
        >
        <v-col lg="3" class="pa-0 my-2"
          ><label class="primary--text text--darken-2 caption my-2">Tipo</label>
        </v-col>
        <v-col lg="6" class="pa-0 my-2">
          <label class="primary--text text--darken-2 caption my-2"
            >Servicios</label
          ></v-col
        >
      </v-row>
      <v-row class="row-per d-flex pa-0 my-0">
        <v-col lg="3" class="py-0 pl-0">
          <v-select dense outlined height="56px" class="mt-2 mb-3" :items="price" color="primary darken-2"></v-select>
        </v-col>
        <v-col lg="3" class="py-0 pl-0">
          <v-select dense outlined height="56px" class="mt-2 mb-3" :items="type" color="primary darken-2"></v-select
        ></v-col>
        <v-col lg="6" class="d-flex justify-space-between pa-0">
          <v-btn
            class="
              primary--text
              text--darken-2
              caption
              font-weight-bold
              v-size--large
              mt-2 mb-3
            "
            outlined
            v-for="n in buttons" v-bind:key="n.id"
            >Button</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
    <v-container class="hospedaje-container ma-0 pa-0">
      <v-row class="d-flex flex-column my-0">
        <label class="ofertas display-3 font-weight-bold my-3"
          >Alojamientos</label
        >
        <label class="puntuados body-2 mt-3">Populares</label>
      </v-row>
      <v-row class="first-col d-flex justify-space-between pa-0 my-0">
        <v-col lg="3" class="pa-0">
          <information-card
            v-for="card in firstColumnPop"
            v-bind:key="card.id"
            v-bind:title="card.title"
            v-bind:subtitle="card.subtitle"
            v-bind:location="card.location"
            v-bind:img="card.img"
            class="my-8"
          ></information-card>
        </v-col>
        <v-col lg="3" class="pa-0">
          <information-card
            v-for="card in secondColumnPop"
            v-bind:key="card.id"
            v-bind:title="card.title"
            v-bind:subtitle="card.subtitle"
            v-bind:location="card.location"
            v-bind:img="card.img"
            class="my-8"
          ></information-card>
        </v-col>
        <v-col lg="6" class="pa-0">
          <v-img src="../assets/map.jpg" class="map mt-8"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="hospedaje-container ma-0 pa-0">
      <v-row class="d-flex flex-column my-0">
        <label class="puntuados body-2">Cerca a tu destino</label>
      </v-row>
      <v-row class="destino-row d-flex justify-space-between pa-0 my-0">
        <information-card
          v-for="card in destinyRow"
          v-bind:key="card.id"
          v-bind:title="card.title"
          v-bind:subtitle="card.subtitle"
          v-bind:location="card.location"
          v-bind:img="card.img"
          class="my-8"
        ></information-card>
      </v-row>
    </v-container>
    <v-container class="ofertas-container ma-0 pa-0">
      <v-row class="d-flex flex-column my-0">
        <label class="ofertas display-3 font-weight-bold mt-6 mb-3"
          >Ofertas</label
        >
        <label class="puntuados body-2 my-3">Mejores puntuados</label>
      </v-row>
      <v-row class="first-col d-flex justify-space-between pa-0 my-0">
        <small-card
          v-for="card in firstRowSmall"
          v-bind:key="card.id"
          v-bind:title="card.title"
          v-bind:subtitle="card.subtitle"
          v-bind:stars="card.stars"
          v-bind:img="card.img"
          class="my-3"
        >
        </small-card>
      </v-row>
      <v-row class="d-flex flex-column my-0">
        <label class="puntuados body-2 my-3">Mejores precios</label>
      </v-row>
      <v-row class="first-col d-flex justify-space-between pa-0 my-0">
        <small-card
          v-for="card in secondRowSamll"
          v-bind:key="card.id"
          v-bind:title="card.title"
          v-bind:subtitle="card.subtitle"
          v-bind:stars="card.stars"
          v-bind:img="card.img"
          class="my-3"
        >
        </small-card>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import InformationCard from "../components/InformationCard.vue";
import SmallCard from "../components/SmallCard.vue";
import data from "../../store/data.json";
import HospedajeSearchBar from "../components/HospedajeSearchBar.vue";

export default {
  name: "hospedaje",

  components: {
    InformationCard,
    HospedajeSearchBar,
    SmallCard,
  },

  data() {
    return {
      infoCards: data.infoCards,
      smallCards: data.smallCards,
      firstColumnPop: [],
      secondColumnPop: [],
      destinyRow: [],
      firstRowSmall: [],
      secondRowSamll: [],
      buttons: 4,
      price: ["50-100", "100-200", "200-300", "300-400"],
      type: ["1", "2", "3", "4"]
    };
  },

  created: function () {
    for (let i = 0; i < 2; i++) {
      this.destinyRow.push(data.infoCards[i]);
      this.firstColumnPop.push(data.infoCards[i + 2]);
      this.secondColumnPop.push(data.infoCards[i + 4]);
    }
    for (let i = 0; i < 3; i++) {
      this.firstRowSmall.push(data.smallCards[i]);
      this.secondRowSamll.push(data.smallCards[i + 3]);
    }
  },
};
</script>
<style scoped>
div.v-input__slot {
  width: 294px;
}
.map {
  width: 612px;
  height: 568px;
}
.row-per {
  margin-left: 96px;
  margin-right: 96px;
  height: 76px;
}
.first-col {
  margin-left: 96px;
  margin-right: 96px;
}
.puntuados {
  width: 256px;
  height: 32px;
  margin-left: 96px;
}
.ofertas {
  width: 160px;
  height: 40px;
  margin-left: 96px;
}
.hospedaje-container {
  max-width: 100%;
  width: 100%;
}
.destino-row {
  margin-left: 96px;
  width: 616px;
}
.ofertas-container {
  background: url("../assets/beach.jpg") center center;
  max-width: 100%;
  width: 100%;
  height: 504px;
  opacity: 0.8;
}
</style>
