<template>
  <!--v-container class="pa-0">
    <v-row justify="space-around">
      <v-col cols="12" md="3" class="px-0">
        <information-card
          title="Lorem"
          subtitle="Ipsum"
          location="Hola"
          img="https://picsum.photos/200"
        ></information-card>
      </v-col>
      <v-col cols="12" md="3" class="px-0">
        <information-card
          title="Lorem"
          subtitle="Ipsum"
          location="Hola"
          img="https://picsum.photos/200"
        ></information-card>
      </v-col>
      <v-col cols="12" md="6" class="px-0">
          <v-img src="https://picsum.photos/200" class="ma-0" width="612px" height="568px"></v-img>
      </v-col>
    </v-row>
  </v-container-->
  <v-container fluid>
    <v-row class="ma-0" justify="start">
      <v-col md="3">
        <v-card dark tile flat color="error">
          <v-card-text>#1</v-card-text>
        </v-card>
        <information-card
          v-for="card in firstColumn"
          v-bind:key="card.id"
          v-bind:title="card.title"
          v-bind:subtitle="card.subtitle"
          v-bind:location="card.location"
          v-bind:img="card.img"
          class="my-6 ml-16"
        ></information-card>
      </v-col>
      <v-col md="3">
        <v-card dark tile flat color="pink darken-2">
          <v-card-text>#2</v-card-text>
        </v-card>
        <information-card
          v-for="card in secondColumn"
          v-bind:key="card.id"
          v-bind:title="card.title"
          v-bind:subtitle="card.subtitle"
          v-bind:location="card.location"
          v-bind:img="card.img"
          class="my-6 ml-6"
        ></information-card>
      </v-col>
      <v-col md="6">
        <v-card dark tile flat color="pink darken-4">
          <v-card-text>#3</v-card-text>
        </v-card>
        <v-img
          src="https://picsum.photos/200"
          width="612px"
          height="568px"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import InformationCard from "../components/InformationCard.vue";
import data from "../../store/data.json";

export default {
  name: "hospedaje",

  components: {
    InformationCard,
  },

  data() {
    return {
      infoCards: data.infoCards,
      firstColumn: [],
      secondColumn: [],
    };
  },

  created: function () {
    for (let i = 0; i < 3; i++) {
      this.firstColumn.push(data.infoCards[i]);
      this.secondColumn.push(data.infoCards[i + 3]);
    }
  },
};
</script>
