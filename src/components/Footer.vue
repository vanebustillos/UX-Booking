<template>
  <v-container class="pa-0 ma-0 footer-container">
    <v-footer absolute padless class="ink text-center justify-center">
      <v-card flat tile width="1440" class="ink text-center">
        <v-row justify="center" class="mx-16 my-4">
          <v-col class="pa-0" v-for="i in info" :key="i.title">
            <v-card flat tile class="ink">
              <v-card-title
                class="
                  px-3
                  pt-0
                  py-3
                  primary--text
                  text--lighten-5
                  justify-center
                "
                >{{ i.title }}</v-card-title
              >
              <v-card-text
                class="
                  text-information
                  primary--text
                  text--lighten-5
                  px-3
                  py-0
                  justify-center
                "
                >{{ i.content }}</v-card-text
              ></v-card
            >
          </v-col>
        </v-row>
        <v-divider class="primary darken-3 mx-16"></v-divider>
        <v-row class="my-4">
          <v-col cols="auto" class="mr-auto py-0">
            <label class="ml-16 primary--text text--lighten-5">2021 </label>
            <label class="mx-1 primary--text text--lighten-5"
              >Hoteles.com
            </label>
            <label class="mx-1 primary--text text--lighten-5 mx-1"
              >Privacidad Términos de uso
            </label>
          </v-col>
          <v-col cols="auto" class="mr-16 py-0">
            <v-icon class="primary--text text--lighten-5 mx-1" size="24px">
              mdi-web
            </v-icon>
            <label class="mx-1 primary--text text--lighten-5"
              >Español (BO)</label
            >
            <v-icon
              v-for="icon in icons"
              :key="icon"
              class="primary--text text--lighten-5 mx-1"
              size="24px"
            >
              {{ icon }}
            </v-icon>
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
<style scoped>
.footer-container {
  max-width: 100%;
  width: 100%;
  height: 222px;
}
.text-information {
  height: 88px;
  width: 294px;
}
</style>
