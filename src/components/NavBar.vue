<template>
  <v-app-bar
    class="navbar"
    app
    flat
    color="primary darken-2"
    height="160"
  >
    <div class="text-subtitle-1">
      <span class="nav-title"> HOTELES.COM </span>
    </div>
    <div
      class="menu-button"
      v-for="item in menuOptions"
      v-bind:key="item.title"
    >
      <v-btn class="text-subtitle-1" plain>
        <span class="btn-text"> {{ item.title }}</span>
      </v-btn>
    </div>
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
};
</script>

<style>
div .text-subtitle-1 {
  color: #fcfcfc;
  text-transform: none;
}

.nav-title {
  margin-right: 38px;
}

.v-toolbar__content {
  padding: 0% !important;
  margin-left: 96px;
}

.menu-button {
  margin-left: 8px;
}

.btn-text {
  text-transform: none;
  color: #d6fefa;
}

.profile-button {
  margin-left: 26px;
}

.icon1 {
  margin-right: 16px;
}
.a {
  width: 100%;
  max-width: 100%;
  margin-left: calc((100% - 1440px) / 2);
  margin-right: calc((100% - 1440px) / 2);
}
</style>
