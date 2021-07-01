<template>
  <v-app-bar
    class="navbar"
    app
    flat
    color="primary darken-2"
    min-width="1440"
    height="160"
  >
    <v-container class="toolbar-content" style="max-width: 0px">
      <v-row class="rows">
        <v-col class="column" cols="auto">
          <div class="text-subtitle-1 title">
            <span class="nav-title">
              <router-link to="/" tag="span" style="cursor: pointer">
                HOTELES.COM
              </router-link>
            </span>
          </div>
        </v-col>
        <v-col class="column" cols="auto">
          <div>
            <v-btn
              class="text-subtitle-1 button"
              plain
              router
              to="/thing-to-do"
            >
              <span class="btn-text">Cosas que hacer</span>
            </v-btn>
          </div>
        </v-col>
        <v-col class="column" cols="auto">
          <div>
            <v-btn class="text-subtitle-1 button" plain router to="/lodgement">
              <span class="btn-text">Hospedaje</span>
            </v-btn>
          </div>
        </v-col>
        <v-col class="column" cols="auto">
          <div>
            <v-btn
              class="text-subtitle-1 button"
              plain
              router
              to="/loyaltyProgram"
            >
              <span class="btn-text">Programa Fidelidad</span>
            </v-btn>
          </div>
        </v-col>
        <v-col class="column" cols="auto">
          <v-btn
            elevation="4.8"
            class="profile-button"
            rounded
            color="primary darken-1"
            width="160"
            height="56"
          >
            <span>
              <v-icon class="icon1" size="48">mdi-menu</v-icon>
              <v-icon size="48">mdi-account-circle-outline</v-icon>
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      menuOptions: [
        { title: "Cosas que hacer" },
        { title: "Hospedaje" },
        { title: "Programa Fidelidad" },
      ],
    };
  },
  methods: {
    clickMethod() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.toolbar-content {
  min-width: 1440px;
  height: 160px !important;
  padding: 0% !important;
}

.v-toolbar__content {
  padding: 0% !important;
}

.rows {
  margin: 0% !important;
}

.column {
  padding: 0% !important;
}

.title {
  color: #fcfcfc;
  text-transform: none;
  margin-top: 62px;
  margin-left: 96px;
}

.button {
  padding: 0% !important;
  margin-top: 62px;
  margin-left: 62px;
}

.btn-text {
  text-transform: none;
  color: #d6fefa;
}

.profile-button {
  margin-left: 42px;
  margin-top: 52px;
  margin-right: 72px;
}
</style>
