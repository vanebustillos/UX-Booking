<template>
  <v-card height="104" width="400" tile flat>
    <div class="d-flex flex-no-wrap">
      <v-avatar size="104" rounded>
        <v-img :src="img"></v-img>
      </v-avatar>
      <div id="text-container">
        <v-card-title class="pa-0 mt-2 mb-1 mx-6 subtitle-1 ink--text text--darken-4 font-weight-bold">
          {{ title }}</v-card-title
        >
        <v-card-subtitle class="pa-0 mt-1 mx-6 ink--text text--darken-4 caption" :value="subtitle">{{
          subtitle
        }}</v-card-subtitle>
        <v-rating
          class="mx-16 mb-0 text-center"
          color="primary darken-2"
          background-color="primary darken-2"
          readonly
          small
          :value="stars"
        ></v-rating>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "small-card",
  props: {
    title: String,
    subtitle: String,
    stars: Number,
    img: String,
  },
};
</script>
<style scoped>
#text-container {
  width: 296px;
  height: 104px;
}
.v-card__title {
  width: 248px;
  height: 32px;
}
.v-card__subtitle {
  width: 248px;
  height: 24px;
}
</style>
