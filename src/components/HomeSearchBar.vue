<template>
  <v-container class="primary lighten-5 rounded-lg py-0 my-4">
    <v-row class="ma-0 pa-0">
      <v-col class="ml-6 mr-4">
        <v-text-field
          class="ink--text text--darken-4 caption"
          label="Ubicacion"
          prepend-icon="mdi-map-marker"
        ></v-text-field>
      </v-col>
      <v-col class="mx-4">
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
              label="Llegada"
              prepend-icon="mdi-airplane-landing"
              readonly
              hide-details
              :value="arrival"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            locale="en-in"
            v-model="arrival"
            no-title
            @input="dateMenu = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col class="mx-4">
        <v-menu
          v-model="dateMenu2"
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
              label="Salida"
              prepend-icon="mdi-airplane-takeoff"
              hide-details
              :value="departure"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            locale="en-in"
            v-model="departure"
            no-title
            @input="dateMenu2 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col class="ml-4 mr-6 px-0 py-0 my-4" cols="auto">
        <v-btn class="primary darken-2 white--text" fab large>
          <v-icon dark> mdi-magnify </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.container {
  width: 616px;
  height: 96px;
}
</style>

<script>
export default {
  name: "HomeSearchBar",
  data() {
    return {
      dateMenu: false,
      dateMenu2: false,
      arrival: null,
      departure: null,
    };
  },
};
</script>
