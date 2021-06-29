<template>
  <v-card height="568px" width="296px" elevation="12">
    <v-avatar height="288px" width="296" rounded>
      <v-img :src="img" height="288px" rounded></v-img>
    </v-avatar>
    <v-card-subtitle
      class="pa-0 mt-6 mx-8 mb-4 ink--text text--darken-4 caption"
      >{{ location }}</v-card-subtitle
    >
    <v-card-title
      class="
        pa-0
        my-4
        ml-8
        mr-8
        subtitle-1
        ink--text
        text--darken-4
        font-weight-bold
      "
      >{{ title }}</v-card-title
    >
    <v-card-text
      class="pa-0 my-4 mx-8 ink--text text--darken-4 caption"
      id="information"
      >{{ subtitle }}
    </v-card-text>
    <v-card-text
      class="pa-0 ml-8 mt-4 mb-6 primary--text text--darken3 caption"
      id="link"
      text
      >Conocer Más
    </v-card-text>
    <!--v-card-actions class="pa-0">
      <v-btn
        class="ml-6 mb-4"
        style="text-transform: unset"
        color="primary darken3"
        text
        width="128"
        height="32"
      >
        Conocer Más
      </v-btn>
    </v-card-actions-->
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
#information {
  width: 232px;
  height: 104px;
}
#link {
  width: 128px;
  height: 24px;
}
.v-card__title {
  width: 232px;
  height: 32px;
}
.v-card__subtitle {
  width: 232px;
  height: 24px;
}
</style>
