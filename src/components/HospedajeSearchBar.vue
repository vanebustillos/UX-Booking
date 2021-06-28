<template>
  <v-container class="primary lighten-3 rounded-lg py-4">
    <v-row>
      <v-col class="ml-6" cols="auto" sm="3"> 
        <v-text-field class="ink--text text--darken-4 caption"
            label="Área del Mapa"
            prepend-icon="mdi-map-marker"
        ></v-text-field>
      </v-col>
      <v-col cols="auto" sm="3">
        <v-menu
          v-model="dateMenu"
          :close-on-content-click="false"
          :nudge-right="40" 
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
          max-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              label="Llegada - Salida"
              prepend-icon="mdi-airplane"
              v-model="dateRangeText"
              readonly
              hide-details
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker range locale="en-in" v-model="dates" no-title @input="dateMenu = false"></v-date-picker>
        </v-menu>
      </v-col>
     <v-col cols="auto" sm="3">
         <v-select
          :items="items"
          label="Huéspedes"
        ></v-select>
      </v-col>
      <v-col class="pl-6 pr-6 mr-0" cols="auto">
        <v-btn class="mx-2 primary darken-2 white--text"
          fab
          large
        >
          <v-icon dark>
            mdi-magnify
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
        
  </v-container>
</template>

<style>
  .container {
    width: 616px;
    height: 96px;
  }
</style>

<script>
export default {
  name: "HospedajeSearchBar",
  data() {
    return {
      items: ['1 Huésped', '2 Huéspedes', '3 Huéspedes', '4 Huéspedes'],
      dateMenu: false,
      dates: []
    };
  },
  computed: {
    dateRangeText () {
      return this.dates.join(' ~ ')
    },
  }
};
</script>