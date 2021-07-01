<template>
  <v-app>
    <Nav-bar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import NavBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { NavBar, Footer },
  name: "App",
};
</script>
<style scoped>
.v-main {
  margin-left: calc((100% - 1440px) / 2);
  margin-right: calc((100% - 1440px) / 2);
}
</style>
