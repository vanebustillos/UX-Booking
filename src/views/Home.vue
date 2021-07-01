<template>
  <v-container class="main-container">
    <v-container class="ma-0 pa-0 img1">
      <v-container class="pt-14 main-container">
        <home-search-bar class="search" />
      </v-container>
      <v-container class="mt-8">
        <v-btn class="ink--text text--lighten-5 caption v-size--large" 
          color="primary darken-4">
          Me siento con suerte
        </v-btn>
      </v-container>
    </v-container>
    <v-container class="main-container my-10 px-0 ma-0">
      <label class="text-h2 font-weight-bold body">
        Explora cerca de ti
      </label>
      <v-container class="main-container pa-0">
        <v-row class="body d-flex justify-space-between mt-10 mb-5" v-for="i in 2" :key="i">
          <small-card v-for="i in 3" :key="i" :title=title :subtitle=subtitle :stars=4 :img=smallImg />
        </v-row>
      </v-container>
    </v-container>
    <v-divider class="primary darken-3" :inset="true"/>
    <v-container class="py-10 px-0 ma-0">
      <label class="body text-h2 font-weight-bold">
        Hospedaje
      </label>
      <v-container class="ma-0 pa-0">
        <v-row class="ma-0 mx-16 px-4 my-10 body d-flex">
          <information-card class="ma-0 pa-0 mx-4" v-for="i in hospedajeImgs" :key="i" :title=title :subtitle=subtitle :location=location :img=i />
        </v-row>
      </v-container>
    </v-container>
    <v-divider class="primary darken-3" :inset="true"/>
    <v-container class="py-10 px-0 ma-0">
      <label class="body text-h2 font-weight-bold">
        Transporte
      </label>
      <v-container class="main-container pa-0">
        <v-row class="ma-0 mx-16 px-4 my-10 body d-flex">
          <information-card class="ma-0 pa-0 mx-4" v-for="i in transportImgs" :key="i" :title=title :subtitle=subtitle :location=location :img=i />
        </v-row>
      </v-container>
    </v-container>
    <v-divider class="primary darken-3" :inset="true"/>
     <v-container class="my-10 body">
        <label class="text-h2 font-weight-bold">
        Explorar
      </label>
      <v-img class="my-10 main-container" src="../assets/maphome.png"></v-img>
    </v-container>
  </v-container>
</template>

<style scoped>
  .container {
    margin: 0px;
    padding: 0px;
  }
  .v-btn {
    height: 56px;
    width: 320px;
    margin-left: 560px;
    margin-right: 560px;
  }
  .body {
    margin-left: 96px;
    margin-right: 96px;
  }
  .v-divider {
    margin-left: 232px !important;
    margin-right: 232px !important;
  }
  .main-container {
    max-width: 100%;
    width: 100%;
  }
  .img1 {
    background: url('../assets/home1.png');
    height: 560px;
    max-width: 100%;
    width: 100%;
  }
  .v-img {
    max-width: 100%;
    width: 100%;
    height: 480px;
  }
  .search {
    margin-left: 412px;
    margin-right: 412px;
  }
 
</style>

<script>
import HomeSearchBar from "../components/HomeSearchBar.vue";
import SmallCard from "../components/SmallCard.vue";
import InformationCard from "../components/InformationCard.vue"

export default {
  name: "Home",

  components: {
    HomeSearchBar,
    SmallCard,
    InformationCard
  },

  data(){
    return{
      title:"Lorem ipsum",
      subtitle:"Loren ipsum",
      smallImg: 'https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240',
      location: 'Ubicacion',
      hospedajeImgs: [
        "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480",
        "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?aki_policy=x_large",
        "https://d2poxrheyfxwbo.cloudfront.net/resize/780x500/filters:quality(65):max_age(2604800)/s3/hotel/37d73b64-b13f-4b58-a4cc-efd2acc46e5d",
        "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
      ],
      transportImgs: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OGxtZgr1VVv-8CPhabZiPPQzRjAWX4jczl3v6WOcovnXoMR81u-QLmWO9MNcaCE95MI&usqp=CAU", 
        "https://pbs.twimg.com/media/EUrALa3U0AAvEn7.jpg",
        "https://www.familyvacationcritic.com/wp-content/uploads/sites/19/2020/02/Wonder-of-the-Seas-exterior-sunset-200x200.jpg",
        "https://www.infodiez.com/wp-content/uploads/2018/09/telef%C3%A9rico-L%C3%ADnea-Morada.jpg"
      ]
    }
  },

  computed: {
    screenWidth(){
      return window.screen.width;
    },
    marginLeft(){
      var screenWidth = this.screenWidth()
      var mockupWidth = 1280;
      var correctWidth = (screenWidth - mockupWidth) / 2;
      return correctWidth
    }
  }
};
</script>
