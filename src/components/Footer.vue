<template>
  <v-container>
    <v-footer absolute padless>
      <v-card flat tile width="100%" class="ink lighten-1 text-center">
        <v-row justify="center">
          <v-col v-for="i in info" :key="i.title">
            <v-card flat tile class="ink lighten-1 text-left">
              <v-card-title
                class="primary--text text--lighten-5 justify-center"
                >{{ i.title }}</v-card-title
              >
              <v-card-text class="primary--text text--lighten-5">{{
                i.content
              }}</v-card-text></v-card
            >
          </v-col>
        </v-row>
        <v-row>
          <v-divider class="primary darken-3 mx-12"></v-divider>
        </v-row>
        <v-row>
          <v-col md="auto">
            <v-card-text class="primary--text text--lighten-5"
              >2021 Hoteles.com Privacidad Términos de uso
            </v-card-text>
          </v-col>
          <v-col></v-col>
          <v-col></v-col>
          <v-col>
            <v-card-text class="primary--text text--lighten-4">
              <v-btn class="mx-1" icon>
                <v-icon class="primary--text text--lighten-4" size="24px">
                  mdi-web
                </v-icon>
              </v-btn>
              <label class="mx-1">Español (BO)</label>
              <v-btn v-for="icon in icons" :key="icon" class="mx-1" icon>
                <v-icon class="primary--text text--lighten-4" size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-footer>

    <v-row align="center" justify="center" class="ma-12">
      <v-col cols="12" md="8"></v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
    info: [
      {
        title: "ACERCA DE",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
      {
        title: "COMUNIDAD",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
      {
        title: "ANFITRIÓN",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
      {
        title: "ASISTENCIA",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
    ],
  }),
  computed: {},
};
</script>
