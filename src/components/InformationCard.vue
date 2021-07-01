<template>
  <v-card height="568px" width="288px" elevation="12">
    <v-avatar height="288px" width="288px" rounded>
      <v-img :src="img" height="288px" rounded></v-img>
    </v-avatar>
    <v-card-subtitle
      class="pa-0 mt-6 mx-8 mb-4 ink--text text--darken-4 caption"
      >{{ location }}</v-card-subtitle
    >
    <v-card-title
      class="pa-0 my-4 mx-8 subtitle-1 ink--text text--darken-4 font-weight-bold"
      >{{ title }}</v-card-title
    >
    <v-card-text
      class="information pa-0 my-4 mx-8 ink--text text--darken-4 caption"
      >{{ subtitle }}
    </v-card-text>
    <v-card-text
      class="link pa-0 ml-8 mt-4 mb-6 primary--text text--darken3 caption"
      text
      >Conocer Más
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "information-card",
  props: ["title", "subtitle", "location", "img"],
};
</script>
<style scoped>
.v-btn {
  letter-spacing: 0.0333333333em !important;
  font-size: 16px !important;
  line-height: 24px !important;
}
.information {
  width: 224px;
  height: 104px;
}
.link {
  width: 128px;
  height: 24px;
}
.v-card__title {
  width: 224px;
  height: 32px;
}
.v-card__subtitle {
  height: 24px;
}
</style>
